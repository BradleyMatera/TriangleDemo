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
  bookmarks: Bookmark[];
  recent: LessonId[];
  setActiveLesson: (id: LessonId) => void;
  completeLesson: (id: LessonId) => void;
  isLessonAvailable: (id: LessonId) => boolean;
  getEffectiveCatalog: () => LessonSection[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (id: string) => void;
  recordRecent: (id: LessonId) => void;
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
        const status = get().progress[id]?.status;
        return status === "available" || status === "in-progress" || status === "completed";
      },
      getEffectiveCatalog: () => {
        const { progress } = get();
        return lessonCatalog.map((item) => {
          if (item.type === "chapter") {
            const chapterLessons = lessonCatalog.filter(
              (other) => other.type === "lesson" && other.title.startsWith(item.title)
            );
            const anyAvailable = chapterLessons.some((lesson) => progress[lesson.id!]?.status !== "locked");
            return { ...item, status: anyAvailable ? "available" : "locked" };
          }
          const lessonProgress = progress[item.id!];
          return { ...item, status: lessonProgress?.status ?? "locked" };
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
        })
    }),
    {
      name: "webgpu-lab-lesson-progress"
    }
  )
);
