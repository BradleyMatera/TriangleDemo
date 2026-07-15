import { create } from "zustand";
import { persist } from "zustand/middleware";
import { lessonCatalog, type LessonId, type LessonStatus, type LessonSection, getInitialLessonId } from "@/lib/lessons/catalog";

interface LessonProgress {
  status: LessonStatus;
  completedAt?: number;
}

type LessonRecord = Record<LessonId, LessonProgress>;

export interface Bookmark {
  id: string;
  title: string;
  type: "lesson" | "shader" | "geometry";
}

interface LessonState {
  activeLessonId: LessonId;
  progress: LessonRecord;
  unlocked: boolean;
  bookmarks: Bookmark[];
  recent: LessonId[];
  setActiveLesson: (id: LessonId) => void;
  completeLesson: (id: LessonId) => void;
  isLessonAvailable: (id: LessonId) => boolean;
  getEffectiveCatalog: () => LessonSection[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (id: string) => void;
  recordRecent: (id: LessonId) => void;
  unlockAll: () => void;
  lockAll: () => void;
}

function buildInitialProgress(): LessonRecord {
  const record: Partial<LessonRecord> = {};
  for (const item of lessonCatalog) {
    if (item.type === "lesson" && item.id) {
      record[item.id] = { status: item.status };
    }
  }
  return record as LessonRecord;
}

function unlockNextLesson(catalog: LessonSection[], id: LessonId): LessonId | null {
  const index = catalog.findIndex((item) => item.id === id);
  if (index < 0) return null;
  const next = catalog.slice(index + 1).find((item) => item.type === "lesson");
  return next?.id ?? null;
}

export const useLessonStore = create<LessonState>()(
  persist(
    (set, get) => ({
      activeLessonId: getInitialLessonId(),
      progress: buildInitialProgress(),
      unlocked: false,
      bookmarks: [],
      recent: [getInitialLessonId()],
      setActiveLesson: (id) => {
        const available = get().isLessonAvailable(id);
        if (!available) return;
        set({ activeLessonId: id });
        get().recordRecent(id);
      },
      completeLesson: (id) => {
        const now = Date.now();
        set((state) => {
          const next = unlockNextLesson(lessonCatalog, id);
          const updated: LessonRecord = {
            ...state.progress,
            [id]: { status: "completed", completedAt: now }
          };
          if (next && state.progress[next]?.status === "locked") {
            updated[next] = { status: "available" };
          }
          return { progress: updated };
        });
      },
      isLessonAvailable: (id) => {
        if (get().unlocked) return true;
        const status = get().progress[id]?.status;
        return status === "available" || status === "in-progress" || status === "completed";
      },
      getEffectiveCatalog: () => {
        const { progress, unlocked } = get();
        return lessonCatalog.map((item, index) => {
          if (item.type === "chapter") {
            const nextChapterIndex = lessonCatalog.findIndex(
              (other, otherIndex) => otherIndex > index && other.type === "chapter"
            );
            const chapterSlice = lessonCatalog.slice(
              index + 1,
              nextChapterIndex === -1 ? lessonCatalog.length : nextChapterIndex
            );
            const chapterLessons = chapterSlice.filter((other) => other.type === "lesson");
            const anyAvailable = unlocked || chapterLessons.some((lesson) => progress[lesson.id!]?.status !== "locked");
            return { ...item, status: anyAvailable ? "available" : "locked" };
          }
          const lessonProgress = progress[item.id!];
          const status = unlocked ? "available" : (lessonProgress?.status ?? "locked");
          return { ...item, status };
        });
      },
      addBookmark: (bookmark) =>
        set((state) => {
          if (state.bookmarks.some((b) => b.id === bookmark.id)) return state;
          return { bookmarks: [...state.bookmarks, bookmark] };
        }),
      removeBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((b) => b.id !== id)
        })),
      recordRecent: (id) =>
        set((state) => {
          const next = [id, ...state.recent.filter((r) => r !== id)].slice(0, 8);
          return { recent: next };
        }),
      unlockAll: () =>
        set((state) => {
          const updated: LessonRecord = { ...state.progress };
          for (const item of lessonCatalog) {
            if (item.type === "lesson" && item.id && updated[item.id]?.status === "locked") {
              updated[item.id] = { status: "available" };
            }
          }
          return { unlocked: true, progress: updated };
        }),
      lockAll: () =>
        set(() => ({
          unlocked: false,
          activeLessonId: getInitialLessonId(),
          progress: buildInitialProgress(),
          recent: [getInitialLessonId()]
        }))
    }),
    {
      name: "webgpu-lab-lesson-progress",
      version: 2,
      partialize: (state) => ({
        activeLessonId: state.activeLessonId,
        progress: state.progress,
        unlocked: state.unlocked,
        bookmarks: state.bookmarks,
        recent: state.recent
      }),
      merge: (persisted, current) => {
        const restored = persisted as Partial<LessonState>;
        return {
          ...current,
          ...restored,
          progress: {
            ...current.progress,
            ...restored.progress
          },
          bookmarks: restored.bookmarks ?? current.bookmarks,
          recent: restored.recent ?? current.recent
        };
      }
    }
  )
);
