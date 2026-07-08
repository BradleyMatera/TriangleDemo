(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/stores/ui-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUiStore",
    ()=>useUiStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useUiStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        activePanel: "lessons",
        sidebarOpen: true,
        sidebarMode: "lessons",
        commandPaletteOpen: false,
        showGpuMetrics: true,
        reduceMotion: false,
        highDensity: false,
        minimap: true,
        autosave: false,
        toggleSidebar: ()=>set((state)=>({
                    sidebarOpen: !state.sidebarOpen
                })),
        setSidebarMode: (mode)=>set({
                sidebarMode: mode
            }),
        setActivePanel: (panel)=>set({
                activePanel: panel
            }),
        openCommandPalette: ()=>set({
                commandPaletteOpen: true
            }),
        closeCommandPalette: ()=>set({
                commandPaletteOpen: false
            }),
        toggleGpuMetrics: ()=>set((state)=>({
                    showGpuMetrics: !state.showGpuMetrics
                })),
        toggleReduceMotion: ()=>set((state)=>({
                    reduceMotion: !state.reduceMotion
                })),
        toggleHighDensity: ()=>set((state)=>({
                    highDensity: !state.highDensity
                })),
        toggleMinimap: ()=>set((state)=>({
                    minimap: !state.minimap
                })),
        toggleAutosave: ()=>set((state)=>({
                    autosave: !state.autosave
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$switch$2f$dist$2f$chunk$2d$JK2N2KWJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__switch_default__as__Switch$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/switch/dist/chunk-JK2N2KWJ.mjs [app-client] (ecmascript) <export switch_default as Switch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ThemeToggle() {
    _s();
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const frame = requestAnimationFrame({
                "ThemeToggle.useEffect.frame": ()=>{
                    setIsMounted(true);
                }
            }["ThemeToggle.useEffect.frame"]);
            return ({
                "ThemeToggle.useEffect": ()=>cancelAnimationFrame(frame)
            })["ThemeToggle.useEffect"];
        }
    }["ThemeToggle.useEffect"], []);
    const hasResolvedTheme = typeof resolvedTheme === "string";
    const isDark = resolvedTheme === "dark";
    const label = hasResolvedTheme ? resolvedTheme === "system" ? "System" : isDark ? "Dark" : "Light" : "Theme";
    if (!isMounted || !hasResolvedTheme) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/components/ui/theme-toggle.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                "Theme"
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/theme-toggle.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$switch$2f$dist$2f$chunk$2d$JK2N2KWJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__switch_default__as__Switch$3e$__["Switch"], {
        size: "sm",
        color: "default",
        isSelected: isDark,
        onValueChange: (selected)=>{
            const nextTheme = selected ? "dark" : "light";
            setTheme(nextTheme);
        },
        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/theme-toggle.tsx",
            lineNumber: 48,
            columnNumber: 21
        }, void 0),
        endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/theme-toggle.tsx",
            lineNumber: 49,
            columnNumber: 19
        }, void 0),
        "aria-label": "Toggle theme",
        className: "bg-white/60 px-2 py-1 text-xs font-medium text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            suppressHydrationWarning: true,
            children: label
        }, void 0, false, {
            fileName: "[project]/components/ui/theme-toggle.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/theme-toggle.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "+Xo5ZDqQSqhXkfOj0W42oqFF/tM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/lessons/catalog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInitialLessonId",
    ()=>getInitialLessonId,
    "getLessonById",
    ()=>getLessonById,
    "lessonCatalog",
    ()=>lessonCatalog
]);
const lessonCatalog = [
    {
        type: "lesson",
        id: "intro",
        title: "Introduction",
        status: "completed",
        description: "What is WebGPU and how does the lab work?"
    },
    {
        type: "chapter",
        title: "Chapter 1",
        status: "available"
    },
    {
        type: "lesson",
        id: "ch1-first-triangle",
        title: "Drawing Your First Triangle",
        status: "available",
        demo: {
            type: "webgpu",
            shape: "hello-triangle"
        }
    },
    {
        type: "chapter",
        title: "Chapter 2",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch2-vertex-buffers",
        title: "Vertex Buffers",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 3",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch3-index-buffers",
        title: "Index Buffers",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 4",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch4-uniform-buffers",
        title: "Uniform Buffers",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 5",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch5-matrices",
        title: "Matrices",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 6",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch6-coordinate-systems",
        title: "Coordinate Systems",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 7",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch7-textures",
        title: "Textures",
        status: "locked",
        demo: {
            type: "webgpu",
            shape: "textured-cube"
        }
    },
    {
        type: "chapter",
        title: "Chapter 8",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch8-lighting",
        title: "Lighting",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 9",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch9-model-loading",
        title: "Model Loading",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 10",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch10-instancing",
        title: "Instancing",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 11",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch11-shadow-mapping",
        title: "Shadow Mapping",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 12",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch12-post-processing",
        title: "Post Processing",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 13",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch13-particles",
        title: "Particles",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 14",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch14-compute-shaders",
        title: "Compute Shaders",
        status: "locked"
    },
    {
        type: "chapter",
        title: "Chapter 15",
        status: "locked"
    },
    {
        type: "lesson",
        id: "ch15-optimization",
        title: "Optimization",
        status: "locked"
    }
];
function getLessonById(id) {
    return lessonCatalog.find((item)=>item.id === id);
}
function getInitialLessonId() {
    return "ch1-first-triangle";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/stores/lesson-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLessonStore",
    ()=>useLessonStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/lessons/catalog.ts [app-client] (ecmascript)");
;
;
;
function buildInitialProgress() {
    const record = {};
    for (const item of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonCatalog"]){
        if (item.type === "lesson" && item.id) {
            record[item.id] = {
                status: item.status
            };
        }
    }
    return record;
}
function unlockNextLesson(catalog, id) {
    const index = catalog.findIndex((item)=>item.id === id);
    if (index < 0) return null;
    const next = catalog.slice(index + 1).find((item)=>item.type === "lesson");
    return next?.id ?? null;
}
const useLessonStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        activeLessonId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialLessonId"])(),
        progress: buildInitialProgress(),
        bookmarks: [],
        recent: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialLessonId"])()
        ],
        setActiveLesson: (id)=>{
            const available = get().isLessonAvailable(id);
            if (!available) return;
            set({
                activeLessonId: id
            });
            get().recordRecent(id);
        },
        completeLesson: (id)=>{
            const now = Date.now();
            set((state)=>{
                const next = unlockNextLesson(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonCatalog"], id);
                const updated = {
                    ...state.progress,
                    [id]: {
                        status: "completed",
                        completedAt: now
                    }
                };
                if (next && state.progress[next]?.status === "locked") {
                    updated[next] = {
                        status: "available"
                    };
                }
                return {
                    progress: updated
                };
            });
        },
        isLessonAvailable: (id)=>{
            const status = get().progress[id]?.status;
            return status === "available" || status === "in-progress" || status === "completed";
        },
        getEffectiveCatalog: ()=>{
            const { progress } = get();
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonCatalog"].map((item, index)=>{
                if (item.type === "chapter") {
                    const nextChapterIndex = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonCatalog"].findIndex((other, otherIndex)=>otherIndex > index && other.type === "chapter");
                    const chapterSlice = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonCatalog"].slice(index + 1, nextChapterIndex === -1 ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonCatalog"].length : nextChapterIndex);
                    const chapterLessons = chapterSlice.filter((other)=>other.type === "lesson");
                    const anyAvailable = chapterLessons.some((lesson)=>progress[lesson.id]?.status !== "locked");
                    return {
                        ...item,
                        status: anyAvailable ? "available" : "locked"
                    };
                }
                const lessonProgress = progress[item.id];
                return {
                    ...item,
                    status: lessonProgress?.status ?? "locked"
                };
            });
        },
        addBookmark: (bookmark)=>set((state)=>{
                if (state.bookmarks.some((b)=>b.id === bookmark.id)) return state;
                return {
                    bookmarks: [
                        ...state.bookmarks,
                        bookmark
                    ]
                };
            }),
        removeBookmark: (id)=>set((state)=>({
                    bookmarks: state.bookmarks.filter((b)=>b.id !== id)
                })),
        recordRecent: (id)=>set((state)=>{
                const next = [
                    id,
                    ...state.recent.filter((r)=>r !== id)
                ].slice(0, 8);
                return {
                    recent: next
                };
            })
    }), {
    name: "webgpu-lab-lesson-progress"
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(...inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/sidebar/lesson-sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonSidebar",
    ()=>LessonSidebar,
    "MobileSidebarToggle",
    ()=>MobileSidebarToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/keyboard.js [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/accessibility.js [app-client] (ecmascript) <export default as Accessibility>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/lesson-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/ui-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const modes = [
    {
        id: "lessons",
        label: "Lessons",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        id: "bookmarks",
        label: "Bookmarks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"]
    },
    {
        id: "shortcuts",
        label: "Keys",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"]
    },
    {
        id: "profile",
        label: "Profile",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"]
    },
    {
        id: "settings",
        label: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
function LessonSidebar() {
    _s();
    const { sidebarMode, setSidebarMode, sidebarOpen, toggleSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const getEffectiveCatalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "LessonSidebar.useLessonStore[getEffectiveCatalog]": (s)=>s.getEffectiveCatalog
    }["LessonSidebar.useLessonStore[getEffectiveCatalog]"]);
    const activeLessonId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "LessonSidebar.useLessonStore[activeLessonId]": (s)=>s.activeLessonId
    }["LessonSidebar.useLessonStore[activeLessonId]"]);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "LessonSidebar.useLessonStore[progress]": (s)=>s.progress
    }["LessonSidebar.useLessonStore[progress]"]);
    const setActiveLesson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "LessonSidebar.useLessonStore[setActiveLesson]": (s)=>s.setActiveLesson
    }["LessonSidebar.useLessonStore[setActiveLesson]"]);
    const completeLesson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "LessonSidebar.useLessonStore[completeLesson]": (s)=>s.completeLesson
    }["LessonSidebar.useLessonStore[completeLesson]"]);
    const catalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LessonSidebar.useMemo[catalog]": ()=>getEffectiveCatalog()
    }["LessonSidebar.useMemo[catalog]"], [
        getEffectiveCatalog
    ]);
    const activeLesson = catalog.find((item)=>item.id === activeLessonId);
    const isCompleted = activeLesson?.status === "completed";
    const lessonItems = catalog.filter((item)=>item.type === "lesson" && item.id);
    const completedCount = lessonItems.filter((item)=>item.id && progress[item.id]?.status === "completed").length;
    const totalLessons = lessonItems.length;
    const progressPercent = totalLessons > 0 ? Math.round(completedCount / totalLessons * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/10 bg-[#0B0C15]/80 backdrop-blur-xl transition-transform duration-300 ease-out lg:static lg:translate-x-0", sidebarOpen ? "translate-x-0" : "-translate-x-full"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-white/10 p-2 lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 text-xs font-semibold text-white",
                        children: "WebGPU Lab"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleSidebar,
                        className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white",
                        "aria-label": "Close sidebar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 overflow-x-auto border-b border-white/10 p-2",
                children: modes.map((mode)=>{
                    const Icon = mode.icon;
                    const active = sidebarMode === mode.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSidebarMode(mode.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex shrink-0 items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors", active ? "text-white" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"),
                        children: [
                            active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: "sidebar-mode-pill",
                                className: "absolute inset-0 rounded-lg bg-white/10",
                                transition: {
                                    type: "spring",
                                    bounce: 0.15,
                                    duration: 0.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    mode.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this)
                        ]
                    }, mode.id, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-3",
                children: sidebarMode === "lessons" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: catalog.map((item, index)=>{
                        if (item.type === "chapter") {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pt-3 text-[10px] font-bold uppercase tracking-wider", item.status === "locked" ? "text-slate-600" : "text-brand-subtle"),
                                children: item.title
                            }, `chapter-${index}`, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 105,
                                columnNumber: 19
                            }, this);
                        }
                        const isActive = item.id === activeLessonId;
                        const isLocked = item.status === "locked";
                        const completed = item.status === "completed";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: isLocked,
                            onClick: ()=>item.id && setActiveLesson(item.id),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-xs transition-all", isActive ? "bg-brand/15 text-white shadow-[inset_0_0_0_1px_rgba(108,140,255,0.25)]" : isLocked ? "text-slate-600" : "text-slate-300 hover:bg-white/5 hover:text-white"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex size-5 shrink-0 items-center justify-center",
                                    children: completed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-label": "Completed",
                                        className: "text-emerald-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                            lineNumber: 138,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                        lineNumber: 137,
                                        columnNumber: 23
                                    }, this) : isLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-label": "Locked",
                                        className: "text-slate-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                            lineNumber: 142,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                        lineNumber: 141,
                                        columnNumber: 23
                                    }, this) : isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-label": "Active",
                                        className: "text-brand",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                            lineNumber: 146,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-label": "Available",
                                        className: "text-slate-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                            lineNumber: 150,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                        lineNumber: 149,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                    lineNumber: 135,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex-1 truncate font-medium",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 19
                                }, this),
                                !isLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "size-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                    lineNumber: 158,
                                    columnNumber: 21
                                }, this) : null
                            ]
                        }, item.id, true, {
                            fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                            lineNumber: 122,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this) : sidebarMode === "bookmarks" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookmarksPanel, {}, void 0, false, {
                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this) : sidebarMode === "shortcuts" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShortcutsPanel, {}, void 0, false, {
                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this) : sidebarMode === "profile" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfilePanel, {
                    completedCount: completedCount,
                    totalLessons: totalLessons,
                    progressPercent: progressPercent
                }, void 0, false, {
                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsPanel, {}, void 0, false, {
                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/10 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-white/10 bg-white/5 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Course Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand",
                                        children: [
                                            completedCount,
                                            " / ",
                                            totalLessons
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1.5 overflow-hidden rounded-full bg-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full bg-gradient-to-r from-brand to-brand-accent",
                                    style: {
                                        width: `${progressPercent}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    activeLesson && !isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>activeLesson.id && completeLesson(activeLesson.id),
                        className: "mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-500/15 px-3 py-2 text-xs font-medium text-emerald-200 transition-colors hover:bg-emerald-500/25",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            "Complete exercise"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(LessonSidebar, "m/04KZBj4euSiIf9wO79rW9k5PQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"]
    ];
});
_c = LessonSidebar;
const shortcutGroups = [
    {
        title: "Global",
        rows: [
            {
                keys: [
                    "Ctrl",
                    "K"
                ],
                label: "Open command palette"
            },
            {
                keys: [
                    "Esc"
                ],
                label: "Close dialogs and overlays"
            },
            {
                keys: [
                    "Tab"
                ],
                label: "Move focus forward"
            },
            {
                keys: [
                    "Shift",
                    "Tab"
                ],
                label: "Move focus backward"
            }
        ]
    },
    {
        title: "Workspace",
        rows: [
            {
                keys: [
                    "Run"
                ],
                label: "Apply shader changes from editor toolbar"
            },
            {
                keys: [
                    "Grid"
                ],
                label: "Toggle viewport grid overlay"
            },
            {
                keys: [
                    "Axis"
                ],
                label: "Toggle axis overlay"
            },
            {
                keys: [
                    "Docs"
                ],
                label: "Jump to documentation from status bar"
            }
        ]
    }
];
function ShortcutsPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: shortcutGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-white/10 bg-white/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                                className: "size-3.5 text-brand-subtle"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            group.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: group.rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3 text-xs text-slate-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: row.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex shrink-0 items-center gap-1",
                                        children: row.keys.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                className: "rounded border border-white/10 bg-black/20 px-1.5 py-0.5 text-[10px] text-slate-300",
                                                children: key
                                            }, key, false, {
                                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                                lineNumber: 238,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, row.label, true, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this)
                ]
            }, group.title, true, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_c1 = ShortcutsPanel;
function ProfilePanel({ completedCount, totalLessons, progressPercent }) {
    _s1();
    const recent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "ProfilePanel.useLessonStore[recent]": (s)=>s.recent
    }["ProfilePanel.useLessonStore[recent]"]);
    const catalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProfilePanel.useMemo[catalog]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"].getState().getEffectiveCatalog()
    }["ProfilePanel.useMemo[catalog]"], []);
    const achievements = [
        {
            title: "First Frame",
            unlocked: completedCount >= 1
        },
        {
            title: "Pipeline Reader",
            unlocked: completedCount >= 2
        },
        {
            title: "Shader Explorer",
            unlocked: completedCount >= 4
        },
        {
            title: "Optimization Ready",
            unlocked: completedCount >= totalLessons
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-brand/20 bg-brand/10 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] uppercase tracking-wider text-brand-subtle",
                        children: "Profile"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 font-display text-lg font-semibold text-white",
                        children: [
                            progressPercent,
                            "% complete"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-slate-400",
                        children: [
                            completedCount,
                            " of ",
                            totalLessons,
                            " lessons complete."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-white/10 bg-white/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "size-3.5 text-brand-subtle"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            "Achievements"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: achievements.map((achievement)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs", achievement.unlocked ? "bg-emerald-500/10 text-emerald-200" : "bg-white/5 text-slate-500"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                        lineNumber: 294,
                                        columnNumber: 15
                                    }, this),
                                    achievement.title
                                ]
                            }, achievement.title, true, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-white/10 bg-white/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                className: "size-3.5 text-brand-subtle"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            "Recent Lessons"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: recent.slice(0, 5).map((id)=>{
                            const lesson = catalog.find((item)=>item.id === id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "truncate rounded-lg bg-black/20 px-2 py-1.5 text-xs text-slate-300",
                                children: lesson?.title ?? id
                            }, id, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 310,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_s1(ProfilePanel, "g71sdjhfY0ubyyN59kSnlSOMRgQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"]
    ];
});
_c2 = ProfilePanel;
function BookmarksPanel() {
    _s2();
    const bookmarks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "BookmarksPanel.useLessonStore[bookmarks]": (s)=>s.bookmarks ?? []
    }["BookmarksPanel.useLessonStore[bookmarks]"]);
    const removeBookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "BookmarksPanel.useLessonStore[removeBookmark]": (s)=>s.removeBookmark
    }["BookmarksPanel.useLessonStore[removeBookmark]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: bookmarks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/10 p-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                    className: "size-8 text-slate-600"
                }, void 0, false, {
                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                    lineNumber: 329,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500",
                    children: "No bookmarks yet. Pin lessons and shaders from their panels."
                }, void 0, false, {
                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                    lineNumber: 330,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
            lineNumber: 328,
            columnNumber: 9
        }, this) : bookmarks.map((bookmark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2 truncate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                className: "size-3.5 text-brand"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 339,
                                columnNumber: 15
                            }, this),
                            bookmark.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 338,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>removeBookmark(bookmark.id),
                        className: "rounded p-1 text-slate-500 transition-colors hover:bg-white/5 hover:text-white",
                        "aria-label": `Remove ${bookmark.title} bookmark`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "size-3"
                        }, void 0, false, {
                            fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                            lineNumber: 347,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 342,
                        columnNumber: 13
                    }, this)
                ]
            }, bookmark.id, true, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 334,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
        lineNumber: 326,
        columnNumber: 5
    }, this);
}
_s2(BookmarksPanel, "vqgILZfmr4mgbRTwtN70rvtdxyg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"]
    ];
});
_c3 = BookmarksPanel;
function SettingsPanel() {
    _s3();
    const { reduceMotion, toggleReduceMotion, showGpuMetrics, toggleGpuMetrics, highDensity, toggleHighDensity, minimap, toggleMinimap, autosave, toggleAutosave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsPanel.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        }
    }["SettingsPanel.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPanel.useEffect": ()=>{
            const media = window.matchMedia("(prefers-reduced-motion: reduce)");
            const handler = {
                "SettingsPanel.useEffect.handler": (e)=>setPrefersReducedMotion(e.matches)
            }["SettingsPanel.useEffect.handler"];
            media.addEventListener("change", handler);
            return ({
                "SettingsPanel.useEffect": ()=>media.removeEventListener("change", handler)
            })["SettingsPanel.useEffect"];
        }
    }["SettingsPanel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-white/10 bg-white/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__["Accessibility"], {
                                className: "size-3.5 text-brand-subtle"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            "Appearance"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleRow, {
                        label: "Reduced motion",
                        active: reduceMotion,
                        onClick: toggleReduceMotion
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[10px] text-slate-500",
                        children: [
                            "System preference: ",
                            prefersReducedMotion ? "reduced" : "no-preference"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-white/10 bg-white/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                className: "size-3.5 text-brand-subtle"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            "Performance"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleRow, {
                        label: "Show GPU metrics",
                        active: showGpuMetrics,
                        onClick: toggleGpuMetrics
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-white/10 bg-white/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                className: "size-3.5 text-brand-subtle"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                                lineNumber: 404,
                                columnNumber: 11
                            }, this),
                            "Editor"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleRow, {
                        label: "High density",
                        active: highDensity,
                        onClick: toggleHighDensity
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleRow, {
                        label: "Minimap",
                        active: minimap,
                        onClick: toggleMinimap
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleRow, {
                        label: "Autosave",
                        active: autosave,
                        onClick: toggleAutosave
                    }, void 0, false, {
                        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
        lineNumber: 382,
        columnNumber: 5
    }, this);
}
_s3(SettingsPanel, "kuJtqVPTdeJKO3fM6/IlxzUnIjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c4 = SettingsPanel;
function ToggleRow({ label, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex items-center justify-between gap-3 py-1.5 text-xs text-slate-300",
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClick,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-5 w-9 rounded-full transition-colors", active ? "bg-brand" : "bg-white/10"),
                "aria-pressed": active,
                "aria-label": `Toggle ${label}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-1 size-3 rounded-full bg-white transition-transform", active ? "left-5" : "left-1")
                }, void 0, false, {
                    fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
        lineNumber: 425,
        columnNumber: 5
    }, this);
}
_c5 = ToggleRow;
function MobileSidebarToggle() {
    _s4();
    const { sidebarOpen, toggleSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleSidebar,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 lg:hidden", sidebarOpen && "text-white"),
        "aria-label": sidebarOpen ? "Close sidebar" : "Open sidebar",
        "aria-expanded": sidebarOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
            lineNumber: 459,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/lab/sidebar/lesson-sidebar.tsx",
        lineNumber: 450,
        columnNumber: 5
    }, this);
}
_s4(MobileSidebarToggle, "qTlvh5j6HAOv+aLt76lmQuqBVVs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c6 = MobileSidebarToggle;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "LessonSidebar");
__turbopack_context__.k.register(_c1, "ShortcutsPanel");
__turbopack_context__.k.register(_c2, "ProfilePanel");
__turbopack_context__.k.register(_c3, "BookmarksPanel");
__turbopack_context__.k.register(_c4, "SettingsPanel");
__turbopack_context__.k.register(_c5, "ToggleRow");
__turbopack_context__.k.register(_c6, "MobileSidebarToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/navigation/top-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabTopNav",
    ()=>LabTopNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/command.js [app-client] (ecmascript) <export default as Command>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/keyboard.js [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/ui-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$sidebar$2f$lesson$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/sidebar/lesson-sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const primaryNav = [
    {
        id: "editor",
        label: "Editor",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"]
    },
    {
        id: "lessons",
        label: "Lessons",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        id: "pipeline",
        label: "Pipeline",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
    },
    {
        id: "shaders",
        label: "Shaders",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        id: "geometry",
        label: "Geometry",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"]
    },
    {
        id: "matrices",
        label: "Matrices",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__["Command"]
    },
    {
        id: "lighting",
        label: "Lighting",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
    },
    {
        id: "textures",
        label: "Textures",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
    },
    {
        id: "performance",
        label: "Performance",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"]
    },
    {
        id: "playground",
        label: "Playground",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"]
    },
    {
        id: "examples",
        label: "Examples",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        id: "documentation",
        label: "Docs",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    }
];
function LabTopNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { activePanel, setActivePanel, openCommandPalette, sidebarOpen, toggleSidebar, setSidebarMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const openSidebarMode = (mode)=>{
        setSidebarMode(mode);
        if (!sidebarOpen) toggleSidebar();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-14 border-b border-white/10 bg-[#0B0C15]/80 px-4 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hidden items-center gap-2 rounded-lg px-2 py-1.5 text-white transition-colors hover:bg-white/5 sm:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-lg bg-gradient-to-br from-brand to-brand-accent p-1.5 text-white shadow-lg shadow-brand/25",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display text-sm font-semibold tracking-tight text-white",
                                    children: "WebGPU Lab"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$sidebar$2f$lesson$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileSidebarToggle"], {}, void 0, false, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex items-center gap-1 overflow-x-auto",
                            children: primaryNav.map((item)=>{
                                const Icon = item.icon;
                                const isActive = activePanel === item.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActivePanel(item.id),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex shrink-0 items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors md:px-3", isActive ? "text-white" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"),
                                    children: [
                                        isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "top-nav-pill",
                                            className: "absolute inset-0 rounded-lg bg-white/10",
                                            transition: {
                                                type: "spring",
                                                bounce: 0.15,
                                                duration: 0.5
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                            lineNumber: 97,
                                            columnNumber: 21
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "size-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden md:inline",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/lab/navigation/top-nav.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex shrink-0 items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: openCommandPalette,
                            className: "hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-400 transition-colors hover:border-white/20 hover:text-slate-200 sm:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "size-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden lg:inline",
                                    children: "Command Palette"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px]",
                                    children: "⌘K"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: openCommandPalette,
                            className: "flex rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 sm:hidden",
                            "aria-label": "Open command palette",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>openSidebarMode("shortcuts"),
                            className: "hidden rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 sm:flex",
                            "aria-label": "Keyboard shortcuts",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>openSidebarMode("bookmarks"),
                            className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200",
                            "aria-label": "Bookmarks",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>openSidebarMode("settings"),
                            className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200",
                            "aria-label": "Settings",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>openSidebarMode("profile"),
                            className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200",
                            "aria-label": "Profile and progress",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/navigation/top-nav.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-1 h-4 w-px bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                            fileName: "[project]/components/lab/navigation/top-nav.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/lab/navigation/top-nav.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/lab/navigation/top-nav.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/lab/navigation/top-nav.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(LabTopNav, "bwrmGXk006r0/Vbn0+bfY8YcpAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = LabTopNav;
var _c;
__turbopack_context__.k.register(_c, "LabTopNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/stores/workspace-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWorkspaceStore",
    ()=>useWorkspaceStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useWorkspaceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        activeLessonTab: "demo",
        activeCodeFile: "fragment",
        codeVertex: "",
        codeFragment: "",
        appliedShaders: {},
        compileError: null,
        isRunning: true,
        versionHistory: [],
        setActiveLessonTab: (tab)=>set({
                activeLessonTab: tab
            }),
        setActiveCodeFile: (file)=>set({
                activeCodeFile: file
            }),
        setCodeVertex: (code)=>set({
                codeVertex: code
            }),
        setCodeFragment: (code)=>set({
                codeFragment: code
            }),
        applyShaders: (shaders)=>set({
                appliedShaders: shaders
            }),
        setCompileError: (error)=>set({
                compileError: error
            }),
        setIsRunning: (running)=>set({
                isRunning: running
            }),
        saveVersion: (version)=>set((state)=>({
                    versionHistory: [
                        {
                            ...version,
                            id: `${version.file}-${Date.now()}`,
                            createdAt: Date.now()
                        },
                        ...state.versionHistory
                    ].slice(0, 12)
                })),
        restoreVersion: (version)=>set((state)=>({
                    activeCodeFile: version.file,
                    codeVertex: version.file === "vertex" ? version.code : state.codeVertex,
                    codeFragment: version.file === "fragment" ? version.code : state.codeFragment,
                    compileError: null
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/lessons/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLessonContent",
    ()=>getLessonContent,
    "lessonContents",
    ()=>lessonContents
]);
const lessonContents = {
    intro: {
        id: "intro",
        title: "Introduction",
        estimatedMinutes: 5,
        overview: "WebGPU is the next-generation graphics API for the web. It gives JavaScript direct access to the GPU through a modern, low-level, cross-platform interface inspired by Vulkan, Metal, and Direct3D 12.",
        concept: "Unlike WebGL, WebGPU separates resource creation from command submission. You create devices, buffers, textures, pipelines, and bind groups up front, then encode work into command buffers and submit them to a queue. This design makes WebGPU more predictable, more efficient, and easier to profile.",
        demo: {
            instructions: "Open the Preview panel to see a live WebGPU render. Use the Lesson sidebar to move through the course.",
            tip: "WebGPU requires Chrome 113+, Edge 113+, or a recent Safari Technology Preview."
        },
        code: {
            focus: "Every lesson exposes the WGSL code that drives the demo.",
            explanation: "WGSL (WebGPU Shading Language) is the shader language for WebGPU. It is intentionally simple, portable, and has well-defined validation rules."
        },
        exercise: {
            prompt: "No exercise for the introduction. Continue to Chapter 1 when you are ready.",
            starter: "",
            solution: ""
        },
        challenge: {
            prompt: "Explore the command palette with ⌘K and switch between panels.",
            hints: [
                "Try opening the Pipeline Visualizer.",
                "Toggle GPU metrics in the status bar."
            ]
        },
        check: {
            question: "What does WGSL stand for?",
            options: [
                {
                    label: "Web Graphics Shader Language",
                    correct: true
                },
                {
                    label: "WebGL Shader Language",
                    correct: false
                },
                {
                    label: "Web GPU Standard Library",
                    correct: false
                }
            ],
            explanation: "WGSL = WebGPU Shading Language."
        },
        summary: [
            "WebGPU is the modern low-level graphics API for the web.",
            "Work is encoded into command buffers and submitted to a queue.",
            "WGSL is the portable shading language used by WebGPU."
        ]
    },
    "ch1-first-triangle": {
        id: "ch1-first-triangle",
        title: "Drawing Your First Triangle",
        estimatedMinutes: 12,
        overview: "The canonical first program in any graphics API is a colored triangle. In this lesson you will see the smallest complete WebGPU program: a vertex shader that positions three corners and a fragment shader that colors every pixel red.",
        concept: "A render pipeline connects a vertex shader and a fragment shader. The vertex shader runs once per vertex and outputs clip-space positions. The rasterizer turns the triangle into fragments, then the fragment shader runs once per fragment to produce a color. The result is written to the framebuffer and presented on screen.",
        demo: {
            instructions: "The Preview panel shows a single red triangle. The vertex shader positions the corners using a hard-coded array; the fragment shader returns a constant red color.",
            tip: "Try editing the red value in the fragment shader to change the triangle color."
        },
        code: {
            focus: "triangle.vert.wgsl",
            explanation: "The vertex shader uses the built-in `vertex_index` to pick one of three positions from an array. The output position is a `vec4f` where the fourth component is `1.0`, indicating a point in homogeneous coordinates."
        },
        exercise: {
            prompt: "Modify the fragment shader so the triangle is blue instead of red.",
            starter: "return vec4f(1.0, 0.0, 0.0, 1.0);",
            solution: "return vec4f(0.0, 0.0, 1.0, 1.0);"
        },
        challenge: {
            prompt: "Can you make each vertex a different color using a vertex output and fragment input?",
            hints: [
                "Add an `@location(0)` output from the vertex shader.",
                "Add a matching `@location(0)` input to the fragment shader.",
                "Return the interpolated color from the fragment shader."
            ]
        },
        check: {
            question: "How many times does the vertex shader run for one triangle?",
            options: [
                {
                    label: "Once",
                    correct: false
                },
                {
                    label: "Three times",
                    correct: true
                },
                {
                    label: "Once per pixel",
                    correct: false
                }
            ],
            explanation: "A triangle has three vertices, so the vertex shader runs three times."
        },
        summary: [
            "A render pipeline combines a vertex and fragment shader.",
            "Vertex shaders position vertices; fragment shaders color fragments.",
            "Builtins like `vertex_index` and `position` bridge shader stages."
        ]
    },
    "ch2-vertex-buffers": {
        id: "ch2-vertex-buffers",
        title: "Vertex Buffers",
        estimatedMinutes: 15,
        overview: "Hard-coded positions are useful for demos, but real geometry lives in buffers. This lesson introduces GPU vertex buffers and vertex buffer layouts.",
        concept: "A vertex buffer is a region of GPU memory that holds per-vertex data such as positions, colors, or UVs. The pipeline's vertex state describes the stride between vertices and the format and location of each attribute.",
        demo: {
            instructions: "The demo will render a triangle whose positions and colors come from a vertex buffer.",
            tip: "Inspect the GPU Inspector to see the buffer count increase."
        },
        code: {
            focus: "Pipeline vertex state",
            explanation: "`arrayStride` tells WebGPU how many bytes each vertex occupies. Attributes define which shader locations receive which chunks of those bytes."
        },
        exercise: {
            prompt: "Add a second triangle by appending three more vertices to the buffer and changing the draw call count.",
            starter: "pass.draw(3, 1, 0, 0);",
            solution: "pass.draw(6, 1, 0, 0);"
        },
        challenge: {
            prompt: "Interleave position and color in one buffer and color the triangle with a gradient.",
            hints: [
                "Increase arrayStride to include color bytes.",
                "Add a second attribute at `@location(1)`.",
                "Use the color in the fragment shader."
            ]
        },
        check: {
            question: "What does `arrayStride` describe?",
            options: [
                {
                    label: "The number of vertices in the buffer",
                    correct: false
                },
                {
                    label: "The byte distance between consecutive vertices",
                    correct: true
                },
                {
                    label: "The size of one attribute",
                    correct: false
                }
            ],
            explanation: "`arrayStride` is the number of bytes from the start of one vertex to the start of the next."
        },
        summary: [
            "Vertex buffers store per-vertex data on the GPU.",
            "The vertex state describes stride and attribute layout.",
            "Shader locations connect buffer attributes to shader inputs."
        ]
    },
    "ch3-index-buffers": {
        id: "ch3-index-buffers",
        title: "Index Buffers",
        estimatedMinutes: 15,
        overview: "Index buffers let multiple triangles share vertices. They are essential for efficient meshes.",
        concept: "Instead of duplicating vertex data for adjacent triangles, an index buffer stores integer offsets into the vertex buffer. The GPU assembles primitives by reading these indices.",
        demo: {
            instructions: "Render a quad using two triangles and four vertices via an index buffer.",
            tip: "Watch the vertex count drop compared to two independent triangles."
        },
        code: {
            focus: "Index buffer creation",
            explanation: "An index buffer is created with `GPUBufferUsage.INDEX` and bound with `pass.setIndexBuffer`. The `indexFormat` must match the buffer data type, usually `uint16`."
        },
        exercise: {
            prompt: "Create an index buffer that draws a quad from four vertices.",
            starter: "new Uint16Array([0, 1, 2, 0, 2, 3])",
            solution: "new Uint16Array([0, 1, 2, 0, 2, 3])"
        },
        challenge: {
            prompt: "Build an octagon using one vertex buffer and one index buffer.",
            hints: [
                "Place 8 vertices around a circle.",
                "Use a triangle fan or indexed triangles.",
                "Minimize duplicate positions."
            ]
        },
        check: {
            question: "What is the main benefit of index buffers?",
            options: [
                {
                    label: "Faster shaders",
                    correct: false
                },
                {
                    label: "Shared vertices between triangles",
                    correct: true
                },
                {
                    label: "Smaller textures",
                    correct: false
                }
            ],
            explanation: "Index buffers reduce memory and vertex processing by reusing vertices."
        },
        summary: [
            "Index buffers store offsets into a vertex buffer.",
            "They let triangles share vertices for efficient meshes.",
            "Use `setIndexBuffer` and `drawIndexed` to render indexed geometry."
        ]
    },
    "ch4-uniform-buffers": {
        id: "ch4-uniform-buffers",
        title: "Uniform Buffers",
        estimatedMinutes: 18,
        overview: "Uniforms are values that stay constant during a draw call, such as transformation matrices, colors, or time. This lesson covers uniform buffers and bind groups.",
        concept: "A uniform buffer is a small GPU buffer updated from JavaScript each frame. A bind group connects buffers, textures, and samplers to the shader bindings declared in WGSL.",
        demo: {
            instructions: "The triangle changes color or position based on a uniform value.",
            tip: "Open the GPU Inspector to see uniform buffer usage."
        },
        code: {
            focus: "Bind group layout",
            explanation: "`@binding(0) @group(0)` in WGSL matches a bind group entry with binding 0. The bind group layout must agree with the shader declarations."
        },
        exercise: {
            prompt: "Pass a `vec4f` color uniform and tint the triangle green.",
            starter: "struct Params { color: vec4f };",
            solution: "Return `params.color` from the fragment shader."
        },
        challenge: {
            prompt: "Animate the triangle position with a time uniform.",
            hints: [
                "Upload `performance.now()` as a float.",
                "Add an offset in the vertex shader.",
                "Keep the triangle inside clip space."
            ]
        },
        check: {
            question: "What is a uniform buffer used for?",
            options: [
                {
                    label: "Storing per-vertex data",
                    correct: false
                },
                {
                    label: "Per-draw constants like matrices or colors",
                    correct: true
                },
                {
                    label: "Texture pixel data",
                    correct: false
                }
            ],
            explanation: "Uniform buffers hold data that is constant for the duration of a draw call."
        },
        summary: [
            "Uniform buffers hold per-draw constants.",
            "Bind groups link resources to shader bindings.",
            "Layouts must match shader declarations exactly."
        ]
    },
    "ch5-matrices": {
        id: "ch5-matrices",
        title: "Matrices",
        estimatedMinutes: 20,
        overview: "Matrices let you move, rotate, and scale objects in 2D and 3D. This lesson introduces model, view, and projection matrices.",
        concept: "A 4x4 matrix can represent translation, rotation, and scale in homogeneous coordinates. Multiplying model, view, and projection matrices produces a transform that maps object-space vertices into clip space.",
        demo: {
            instructions: "Rotate a triangle in 3D using a model-view-projection matrix.",
            tip: "Use the Geometry Lab later to visualize each matrix."
        },
        code: {
            focus: "Matrix multiplication",
            explanation: "The `wgpu-matrix` library provides common matrix helpers. On the GPU, `mat4x4f` and matrix multiplication are fast and parallel."
        },
        exercise: {
            prompt: "Rotate the triangle 45 degrees around the Z axis.",
            starter: "mat4.rotateZ(model, Math.PI / 4, model);",
            solution: "mat4.rotateZ(model, Math.PI / 4, model);"
        },
        challenge: {
            prompt: "Build a small solar system: a central sun and a moon orbiting a planet.",
            hints: [
                "Use parent-child matrix composition.",
                "Upload each object's final matrix as a uniform.",
                "Draw multiple times with different uniforms."
            ]
        },
        check: {
            question: "What order do you typically multiply M, V, and P?",
            options: [
                {
                    label: "M * V * P",
                    correct: false
                },
                {
                    label: "P * V * M",
                    correct: true
                },
                {
                    label: "V * M * P",
                    correct: false
                }
            ],
            explanation: "Column-major convention multiplies P * V * M to map from model space to clip space."
        },
        summary: [
            "Matrices encode translation, rotation, and scale.",
            "MVP = P * V * M maps objects to clip space.",
            "Matrix math is fast on the GPU."
        ]
    },
    "ch6-coordinate-systems": {
        id: "ch6-coordinate-systems",
        title: "Coordinate Systems",
        estimatedMinutes: 18,
        overview: "Graphics programming uses several coordinate spaces. Understanding when and how to transform between them is essential.",
        concept: "Common spaces: local/model, world, view, clip, NDC, and screen. The vertex shader usually transforms from local to clip. The GPU then converts clip coordinates to normalized device coordinates (NDC) and finally to screen pixels.",
        demo: {
            instructions: "Visualize a grid and axes in world space.",
            tip: "Toggle grid and axis helpers in the viewport toolbar."
        },
        code: {
            focus: "Clip-space output",
            explanation: "A vertex shader's `@builtin(position)` output is in clip space. The GPU performs perspective divide to reach NDC, then viewport mapping to screen pixels."
        },
        exercise: {
            prompt: "Map a triangle from local coordinates (-1..1) to a smaller region in NDC.",
            starter: "output.Position = vec4f(position * 0.5, 1.0);",
            solution: "output.Position = vec4f(position * 0.5, 1.0);"
        },
        challenge: {
            prompt: "Implement a simple orthographic projection matrix by hand.",
            hints: [
                "Scale X and Y by 1 / (right - left).",
                "Translate to center the view.",
                "Ignore perspective divide for orthographic."
            ]
        },
        check: {
            question: "Which space comes after clip space in the GPU pipeline?",
            options: [
                {
                    label: "World space",
                    correct: false
                },
                {
                    label: "Normalized device coordinates",
                    correct: true
                },
                {
                    label: "Local space",
                    correct: false
                }
            ],
            explanation: "The GPU divides clip coordinates by W to produce NDC."
        },
        summary: [
            "Vertices travel through local, world, view, clip, NDC, and screen spaces.",
            "The vertex shader outputs clip-space positions.",
            "Perspective divide converts clip to NDC."
        ]
    },
    "ch7-textures": {
        id: "ch7-textures",
        title: "Textures",
        estimatedMinutes: 25,
        overview: "Textures are images stored on the GPU. Combined with samplers, they let fragment shaders read color data per pixel.",
        concept: "A texture holds texel data. A sampler defines filtering and wrapping behavior. In WGSL you declare them with `@group(0) @binding(...)` and sample with `textureSample`. Bind groups connect the JavaScript texture and sampler objects to the shader.",
        demo: {
            instructions: "The Preview panel shows a textured cube rotating in 3D. The fragment shader multiplies the sampled texture color by the interpolated vertex color.",
            tip: "Try editing the UV coordinates or the sampling call."
        },
        code: {
            focus: "sampleTextureMixColor.frag.wgsl",
            explanation: "`textureSample(myTexture, mySampler, fragUV)` reads the texture at the interpolated UV coordinate. The result is multiplied by `fragPosition` to tint the cube."
        },
        exercise: {
            prompt: "Flip the texture vertically by modifying the UV in the vertex shader.",
            starter: "output.fragUV = uv;",
            solution: "output.fragUV = vec2f(uv.x, 1.0 - uv.y);"
        },
        challenge: {
            prompt: "Create a scrolling texture effect using a time uniform.",
            hints: [
                "Add a time uniform to the bind group.",
                "Offset UV.x by time.",
                "Use fract or wrap sampling."
            ]
        },
        check: {
            question: "What does a sampler control?",
            options: [
                {
                    label: "Pixel color values",
                    correct: false
                },
                {
                    label: "Filtering and wrapping",
                    correct: true
                },
                {
                    label: "Buffer stride",
                    correct: false
                }
            ],
            explanation: "Samplers control how texture coordinates are filtered and wrapped."
        },
        summary: [
            "Textures store image data on the GPU.",
            "Samplers define filtering and wrapping.",
            "`textureSample` reads texture data in fragment shaders."
        ]
    },
    "ch8-lighting": {
        id: "ch8-lighting",
        title: "Lighting",
        estimatedMinutes: 28,
        overview: "Basic lighting gives 3D objects shape. This lesson covers normals and the classic diffuse lighting model.",
        concept: "A normal is a direction perpendicular to a surface. Diffuse lighting depends on the angle between the surface normal and the light direction. The dot product of these vectors determines how bright the surface appears.",
        demo: {
            instructions: "A rotating cube is lit by a directional light. Notice how faces brighten and darken as they turn toward the light.",
            tip: "Toggle normals in the viewport to see per-face directions."
        },
        code: {
            focus: "Normal transformation",
            explanation: "Normals must be transformed by the inverse-transpose of the model matrix to stay correct under non-uniform scale."
        },
        exercise: {
            prompt: "Change the light direction to come from above instead of the side.",
            starter: "let lightDir = vec3f(1.0, 0.0, 0.0);",
            solution: "let lightDir = vec3f(0.0, 1.0, 0.0);"
        },
        challenge: {
            prompt: "Add ambient light so unlit faces are not completely black.",
            hints: [
                "Combine diffuse and ambient terms.",
                "Ambient is a small constant color.",
                "Clamp the final color to valid range."
            ]
        },
        check: {
            question: "What does the dot product of normal and light direction give you?",
            options: [
                {
                    label: "Texture coordinates",
                    correct: false
                },
                {
                    label: "Diffuse intensity",
                    correct: true
                },
                {
                    label: "Specular highlight",
                    correct: false
                }
            ],
            explanation: "Lambert's diffuse term is `max(dot(N, L), 0.0)`."
        },
        summary: [
            "Normals describe surface orientation.",
            "Diffuse lighting uses the dot product of normal and light direction.",
            "Normals must be transformed correctly under scale."
        ]
    },
    "ch9-model-loading": {
        id: "ch9-model-loading",
        title: "Model Loading",
        estimatedMinutes: 30,
        overview: "Real scenes use artist-authored models. This lesson covers parsing simple mesh data and uploading it to the GPU.",
        concept: "Model formats like OBJ and glTF store vertex positions, normals, UVs, and indices. At runtime you parse this data into GPU buffers and bind groups.",
        demo: {
            instructions: "Render a loaded model (Stanford Bunny placeholder) with normals.",
            tip: "Check the GPU Inspector for vertex and triangle counts."
        },
        code: {
            focus: "Vertex attribute layout for loaded models",
            explanation: "Loaded models often have positions, normals, and UVs interleaved. The pipeline must match that exact layout."
        },
        exercise: {
            prompt: "Parse an OBJ file string and extract vertex positions.",
            starter: "lines.filter(line => line.startsWith('v '))",
            solution: "positions = lines.filter(l => l.startsWith('v ')).map(l => l.split(' ').slice(1).map(Number));"
        },
        challenge: {
            prompt: "Load a glTF model and display its material texture.",
            hints: [
                "Use a glTF loader library.",
                "Upload buffer views as GPU buffers.",
                "Handle images as textures."
            ]
        },
        check: {
            question: "Which format stores scenes, materials, and animations?",
            options: [
                {
                    label: "OBJ",
                    correct: false
                },
                {
                    label: "glTF",
                    correct: true
                },
                {
                    label: "PNG",
                    correct: false
                }
            ],
            explanation: "glTF is a modern format designed for runtime 3D assets."
        },
        summary: [
            "Models are parsed into vertex/index buffers.",
            "OBJ is simple but limited; glTF is full-featured.",
            "Pipeline layouts must match model vertex data."
        ]
    },
    "ch10-instancing": {
        id: "ch10-instancing",
        title: "Instancing",
        estimatedMinutes: 22,
        overview: "Instancing draws many copies of the same geometry with one draw call, each with different transformation data.",
        concept: "Instead of issuing thousands of draw calls, instancing uses one draw call with a per-instance attribute or instance index. The vertex shader reads the instance-specific data and applies a transform.",
        demo: {
            instructions: "Render a grid of 100 rotating cubes with a single draw call.",
            tip: "Open the Performance panel to see draw calls stay low."
        },
        code: {
            focus: "Instance attributes",
            explanation: "Per-instance data is stored in a second vertex buffer with `stepMode: 'instance'`. The GPU advances this buffer once per instance, not per vertex."
        },
        exercise: {
            prompt: "Add an instance buffer with 16 transform matrices and draw 16 cubes.",
            starter: "pass.setVertexBuffer(1, instanceBuffer);",
            solution: "pass.draw(cubeVertexCount, 16, 0, 0);"
        },
        challenge: {
            prompt: "Create a particle field using instanced quads and a compute shader for movement.",
            hints: [
                "Store particle state in a storage buffer.",
                "Use `instance_index` in the vertex shader.",
                "Animate with time."
            ]
        },
        check: {
            question: "What is the main performance benefit of instancing?",
            options: [
                {
                    label: "Better texture quality",
                    correct: false
                },
                {
                    label: "Fewer draw calls",
                    correct: true
                },
                {
                    label: "Smaller shaders",
                    correct: false
                }
            ],
            explanation: "Instancing reduces CPU overhead by batching many objects into one draw call."
        },
        summary: [
            "Instancing draws many copies with one call.",
            "Per-instance data is read via instance attributes.",
            "Great for particles, grass, crowds, and repeated geometry."
        ]
    },
    "ch11-shadow-mapping": {
        id: "ch11-shadow-mapping",
        title: "Shadow Mapping",
        estimatedMinutes: 35,
        overview: "Shadow mapping is the standard real-time shadow technique. This lesson explains the two-pass shadow algorithm.",
        concept: "First, render the scene from the light's point of view into a depth texture. Second, render from the camera and compare each pixel's light-space depth to the stored depth to determine if it is shadowed.",
        demo: {
            instructions: "A textured cube casts a simple shadow onto a ground plane.",
            tip: "Switch to the depth debug view to see the shadow map."
        },
        code: {
            focus: "Depth texture render pass",
            explanation: "The shadow pass uses a `depthStencilAttachment` with a `RENDER_ATTACHMENT` texture and no color attachment."
        },
        exercise: {
            prompt: "Create a depth texture sized 1024x1024 for the shadow pass.",
            starter: "device.createTexture({ size: [1024, 1024], format: 'depth24plus', usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING })",
            solution: "Same as starter."
        },
        challenge: {
            prompt: "Add percentage-closer filtering (PCF) for softer shadows.",
            hints: [
                "Sample the depth texture multiple times.",
                "Average the binary shadow tests.",
                "Use a small offset kernel."
            ]
        },
        check: {
            question: "How many render passes does basic shadow mapping require?",
            options: [
                {
                    label: "One",
                    correct: false
                },
                {
                    label: "Two",
                    correct: true
                },
                {
                    label: "Four",
                    correct: false
                }
            ],
            explanation: "One pass from the light to create the shadow map, and one from the camera to render with shadows."
        },
        summary: [
            "Shadow mapping uses a depth pass from the light.",
            "Camera pass compares light-space depth to the shadow map.",
            "PCF softens hard shadow edges."
        ]
    },
    "ch12-post-processing": {
        id: "ch12-post-processing",
        title: "Post Processing",
        estimatedMinutes: 28,
        overview: "Post-processing applies fullscreen effects after the main render. Common examples are bloom, tone mapping, and color grading.",
        concept: "Instead of presenting the scene directly, render it to an intermediate texture. Then draw a fullscreen triangle with a fragment shader that reads that texture and applies effects.",
        demo: {
            instructions: "Apply a simple color inversion or vignette to the rendered scene.",
            tip: "The Pipeline panel will show the extra fullscreen pass."
        },
        code: {
            focus: "Fullscreen triangle pass",
            explanation: "A fullscreen pass uses a triangle large enough to cover clip space (-1..1). The fragment shader samples the scene texture with UVs derived from position."
        },
        exercise: {
            prompt: "Write a fragment shader that inverts the scene colors.",
            starter: "return textureSample(sceneTex, sampler, uv);",
            solution: "return vec4f(1.0 - color.rgb, color.a);"
        },
        challenge: {
            prompt: "Implement a two-pass Gaussian blur.",
            hints: [
                "Render scene to a texture.",
                "Blur horizontally into another texture.",
                "Blur vertically back into the first or to screen."
            ]
        },
        check: {
            question: "What does a fullscreen post-processing pass sample?",
            options: [
                {
                    label: "The backbuffer directly",
                    correct: false
                },
                {
                    label: "A previously rendered scene texture",
                    correct: true
                },
                {
                    label: "The depth buffer only",
                    correct: false
                }
            ],
            explanation: "Post-processing reads from a render target texture produced by the main scene pass."
        },
        summary: [
            "Post-processing runs after the main render.",
            "Render to an intermediate texture first.",
            "Full-screen shaders apply effects like bloom and blur."
        ]
    },
    "ch13-particles": {
        id: "ch13-particles",
        title: "Particles",
        estimatedMinutes: 30,
        overview: "Particles add life to scenes. This lesson covers a simple particle system using compute shaders for movement.",
        concept: "Particle state (position, velocity, life) is stored in GPU buffers. A compute shader updates those buffers each frame. An instanced draw renders thousands of quads using the updated state.",
        demo: {
            instructions: "A fountain of particles rises and falls under simulated gravity.",
            tip: "Toggle the compute stage in the Pipeline panel."
        },
        code: {
            focus: "Compute shader dispatch",
            explanation: "`pass.dispatchWorkgroups(count)` runs the compute shader in workgroup-sized chunks. Storage buffers are read and written in the same pass with proper barriers."
        },
        exercise: {
            prompt: "Add a velocity uniform for gravity and update particle positions.",
            starter: "particle.pos += particle.vel * deltaTime;",
            solution: "particle.vel.y -= gravity * deltaTime; particle.pos += particle.vel * deltaTime;"
        },
        challenge: {
            prompt: "Spawn new particles at the emitter position when old ones die.",
            hints: [
                "Track remaining life per particle.",
                "Reset dead particles with random velocity.",
                "Use a pseudo-random hash in WGSL."
            ]
        },
        check: {
            question: "Which shader stage is best for updating particle positions on the GPU?",
            options: [
                {
                    label: "Vertex shader",
                    correct: false
                },
                {
                    label: "Fragment shader",
                    correct: false
                },
                {
                    label: "Compute shader",
                    correct: true
                }
            ],
            explanation: "Compute shaders are ideal for parallel state updates like particle movement."
        },
        summary: [
            "Particles use GPU buffers for state.",
            "Compute shaders update state in parallel.",
            "Instancing renders many particles efficiently."
        ]
    },
    "ch14-compute-shaders": {
        id: "ch14-compute-shaders",
        title: "Compute Shaders",
        estimatedMinutes: 32,
        overview: "Compute shaders run general-purpose parallel work on the GPU. They are not tied to rendering geometry.",
        concept: "A compute shader is invoked in a grid of workgroups, each containing a set of local invocations. They read from and write to storage buffers and textures.",
        demo: {
            instructions: "A compute shader generates a procedural texture or performs parallel reduction.",
            tip: "Check the Performance panel to see GPU time."
        },
        code: {
            focus: "Storage buffers in WGSL",
            explanation: "`var<storage, read_write>` gives compute shaders random-access read/write access to buffer data."
        },
        exercise: {
            prompt: "Write a compute shader that doubles every value in a storage buffer.",
            starter: "@compute @workgroup_size(64) fn main(@builtin(global_invocation_id) id: vec3u) {",
            solution: "buffer[id.x] *= 2.0;"
        },
        challenge: {
            prompt: "Implement a simple image blur using a compute shader.",
            hints: [
                "Use a storage texture for output.",
                "Sample neighbors from an input texture.",
                "Average the samples."
            ]
        },
        check: {
            question: "What WGSL address space is used for read/write GPU buffers?",
            options: [
                {
                    label: "uniform",
                    correct: false
                },
                {
                    label: "storage",
                    correct: true
                },
                {
                    label: "workgroup",
                    correct: false
                }
            ],
            explanation: "`var<storage, read_write>` declares a storage buffer."
        },
        summary: [
            "Compute shaders run parallel general-purpose work.",
            "They use workgroups and storage buffers.",
            "Common uses include particles, simulation, and image processing."
        ]
    },
    "ch15-optimization": {
        id: "ch15-optimization",
        title: "Optimization",
        estimatedMinutes: 25,
        overview: "Performance is part of the product. This lesson covers the metrics and techniques that make WebGPU applications fast.",
        concept: "Key optimizations: minimize descriptor set changes, batch draw calls, use instancing, upload data efficiently, reduce shader complexity, and avoid CPU/GPU synchronization stalls.",
        demo: {
            instructions: "Compare two rendering approaches in the Performance panel: naive one-draw-per-object versus instanced batched rendering.",
            tip: "Watch draw calls and frame time change."
        },
        code: {
            focus: "Pipeline state reuse",
            explanation: "Changing pipelines or bind groups is expensive. Sort draws by pipeline and material to reduce state changes."
        },
        exercise: {
            prompt: "Group 100 cube draws by material and issue them with one pipeline state.",
            starter: "for (const mat of materials) { pass.setPipeline(mat.pipeline); ... }",
            solution: "Sort objects by pipeline, then bind group, then draw."
        },
        challenge: {
            prompt: "Profile a scene and identify the bottleneck using the Performance panel.",
            hints: [
                "Check if CPU or GPU time is higher.",
                "Look at draw call count.",
                "Use the Pipeline panel to spot redundant state changes."
            ]
        },
        check: {
            question: "Which usually hurts performance more on modern GPUs?",
            options: [
                {
                    label: "Too many draw calls",
                    correct: true
                },
                {
                    label: "Too many triangles in one mesh",
                    correct: false
                },
                {
                    label: "Large textures",
                    correct: false
                }
            ],
            explanation: "CPU overhead from many draw calls is a common bottleneck; modern GPUs handle large meshes well."
        },
        summary: [
            "Batch draws and reuse pipeline state.",
            "Instancing reduces draw call overhead.",
            "Profile CPU vs GPU time to find bottlenecks."
        ]
    }
};
function getLessonContent(id) {
    return lessonContents[id] ?? lessonContents.intro;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/lesson-content-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonContentPanel",
    ()=>LessonContentPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$question$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileQuestion$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-question.js [app-client] (ecmascript) <export default as FileQuestion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/workspace-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/lesson-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/lessons/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const tabs = [
    {
        id: "overview",
        label: "Overview",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        id: "concept",
        label: "Concept",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"]
    },
    {
        id: "demo",
        label: "Demo",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"]
    },
    {
        id: "code",
        label: "Code",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"]
    },
    {
        id: "exercise",
        label: "Exercise",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    {
        id: "challenge",
        label: "Challenge",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"]
    },
    {
        id: "check",
        label: "Check",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$question$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileQuestion$3e$__["FileQuestion"]
    },
    {
        id: "summary",
        label: "Summary",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"]
    }
];
function LessonContentPanel() {
    _s();
    const activeLessonId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "LessonContentPanel.useLessonStore[activeLessonId]": (s)=>s.activeLessonId
    }["LessonContentPanel.useLessonStore[activeLessonId]"]);
    const activeTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"])({
        "LessonContentPanel.useWorkspaceStore[activeTab]": (s)=>s.activeLessonTab
    }["LessonContentPanel.useWorkspaceStore[activeTab]"]);
    const setActiveTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"])({
        "LessonContentPanel.useWorkspaceStore[setActiveTab]": (s)=>s.setActiveLessonTab
    }["LessonContentPanel.useWorkspaceStore[setActiveTab]"]);
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLessonContent"])(activeLessonId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-white/10 px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                                children: "Lesson"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-base font-semibold text-white",
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: [
                                    content.estimatedMinutes,
                                    " min"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompleteButton, {}, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 overflow-x-auto border-b border-white/10 px-2 py-2",
                children: tabs.map((tab)=>{
                    const Icon = tab.icon;
                    const active = activeTab === tab.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-medium transition-colors", active ? "text-white" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"),
                        children: [
                            active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: "lesson-tab-pill",
                                className: "absolute inset-0 rounded-lg bg-white/10",
                                transition: {
                                    type: "spring",
                                    bounce: 0.15,
                                    duration: 0.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 68,
                                columnNumber: 17
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    tab.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LessonTabContent, {
                    tab: activeTab,
                    content: content
                }, void 0, false, {
                    fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(LessonContentPanel, "7b8jftnbgygh15OMr+zU50+13Wk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"]
    ];
});
_c = LessonContentPanel;
function LessonTabContent({ tab, content }) {
    switch(tab){
        case "overview":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed text-slate-300",
                        children: content.overview
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-white/10 bg-white/5 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-[10px] uppercase tracking-wider text-brand-subtle",
                                children: "What you will learn"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-inside list-disc space-y-1 text-sm text-slate-300",
                                children: content.summary.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this);
        case "concept":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed text-slate-300",
                        children: content.concept
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConceptDiagram, {}, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this);
        case "demo":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-white/10 bg-white/5 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1 text-[10px] uppercase tracking-wider text-brand-subtle",
                                children: "Instructions"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed text-slate-300",
                                children: content.demo.instructions
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-brand/20 bg-brand/10 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1 text-[10px] uppercase tracking-wider text-brand",
                                children: "Tip"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed text-slate-200",
                                children: content.demo.tip
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this);
        case "code":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-white/10 bg-white/5 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1 text-[10px] uppercase tracking-wider text-brand-subtle",
                                children: "Focus"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-white",
                                children: content.code.focus
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed text-slate-300",
                        children: content.code.explanation
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this);
        case "exercise":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed text-slate-300",
                        children: content.exercise.prompt
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    content.exercise.starter ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-white/10 bg-slate-950/50 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-[10px] uppercase tracking-wider text-slate-500",
                                children: "Starter code"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "block text-xs text-slate-300",
                                children: content.exercise.starter
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this) : null,
                    content.exercise.solution ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "rounded-xl border border-white/10 bg-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                className: "cursor-pointer px-4 py-2 text-xs font-medium text-slate-300",
                                children: "Show solution"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-white/10 px-4 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "block text-xs text-emerald-300",
                                    children: content.exercise.solution
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExerciseValidation, {
                        content: content
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this);
        case "challenge":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed text-slate-300",
                        children: content.challenge.prompt
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: content.challenge.hints.map((hint, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "rounded-xl border border-white/10 bg-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        className: "cursor-pointer px-4 py-2 text-xs font-medium text-slate-300",
                                        children: [
                                            "Hint ",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-white/10 px-4 py-2 text-xs text-slate-400",
                                        children: hint
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this);
        case "check":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KnowledgeCheck, {
                content: content.check
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 178,
                columnNumber: 14
            }, this);
        case "summary":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed text-slate-300",
                        children: "Great work. Here is a quick recap of what this lesson covered:"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: content.summary.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "mt-0.5 size-4 shrink-0 text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-300",
                                        children: item
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
_c1 = LessonTabContent;
function ExerciseValidation({ content }) {
    _s1();
    const activeLessonId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "ExerciseValidation.useLessonStore[activeLessonId]": (s)=>s.activeLessonId
    }["ExerciseValidation.useLessonStore[activeLessonId]"]);
    const completeLesson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "ExerciseValidation.useLessonStore[completeLesson]": (s)=>s.completeLesson
    }["ExerciseValidation.useLessonStore[completeLesson]"]);
    const codeVertex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"])({
        "ExerciseValidation.useWorkspaceStore[codeVertex]": (s)=>s.codeVertex
    }["ExerciseValidation.useWorkspaceStore[codeVertex]"]);
    const codeFragment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"])({
        "ExerciseValidation.useWorkspaceStore[codeFragment]": (s)=>s.codeFragment
    }["ExerciseValidation.useWorkspaceStore[codeFragment]"]);
    const compileError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"])({
        "ExerciseValidation.useWorkspaceStore[compileError]": (s)=>s.compileError
    }["ExerciseValidation.useWorkspaceStore[compileError]"]);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: "idle",
        message: "Validation checks current WGSL, compile status, and whether the starter code was meaningfully changed."
    });
    const validateExercise = ()=>{
        const combined = `${codeVertex}\n${codeFragment}`;
        const hasShaderEntry = /fn\s+\w+\s*\(/.test(combined);
        const starter = content.exercise.starter.trim();
        const solution = content.exercise.solution.trim();
        const starterStillPresent = starter ? combined.includes(starter) : false;
        const solutionLooksPresent = solution && solution.length < 120 ? combined.includes(solution) : false;
        if (compileError) {
            setResult({
                status: "fail",
                message: "Fix the current shader compile error before completing this exercise."
            });
            return;
        }
        if (!hasShaderEntry) {
            setResult({
                status: "fail",
                message: "The editor does not currently contain a recognizable shader function."
            });
            return;
        }
        if (starter && starterStillPresent && !solutionLooksPresent) {
            setResult({
                status: "fail",
                message: "The starter snippet is still present. Apply your exercise change in the editor, then validate again."
            });
            return;
        }
        completeLesson(activeLessonId);
        setResult({
            status: "pass",
            message: "Exercise validated against the active code. Lesson progress updated and the next step is unlocked."
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] uppercase tracking-wider text-cyan-200",
                                children: "Exercise validator"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs leading-relaxed text-slate-300",
                                children: result.message
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: validateExercise,
                        className: "shrink-0 rounded-lg bg-cyan-400/20 px-3 py-2 text-xs font-semibold text-cyan-100 transition-colors hover:bg-cyan-400/30",
                        children: "Validate code"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            result.status !== "idle" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border px-3 py-2 text-xs", result.status === "pass" ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200" : "border-rose-400/20 bg-rose-400/10 text-rose-200"),
                role: "status",
                children: result.status === "pass" ? "Passed" : "Needs work"
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 273,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
_s1(ExerciseValidation, "EGfiMHQWQ+qdkHnMIgkJ7jDUFKw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"]
    ];
});
_c2 = ExerciseValidation;
function CompleteButton() {
    _s2();
    const activeLessonId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "CompleteButton.useLessonStore[activeLessonId]": (s)=>s.activeLessonId
    }["CompleteButton.useLessonStore[activeLessonId]"]);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "CompleteButton.useLessonStore[progress]": (s)=>s.progress
    }["CompleteButton.useLessonStore[progress]"]);
    const completeLesson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "CompleteButton.useLessonStore[completeLesson]": (s)=>s.completeLesson
    }["CompleteButton.useLessonStore[completeLesson]"]);
    const isCompleted = progress[activeLessonId]?.status === "completed";
    const [justCompleted, setJustCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>{
            if (!isCompleted) {
                completeLesson(activeLessonId);
                setJustCompleted(true);
                setTimeout(()=>setJustCompleted(false), 1500);
            }
        },
        disabled: isCompleted,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors", isCompleted ? "bg-emerald-500/20 text-emerald-300" : justCompleted ? "bg-emerald-500/30 text-emerald-200" : "bg-brand/15 text-brand hover:bg-brand/25"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            isCompleted ? "Completed" : justCompleted ? "Completed!" : "Mark complete"
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
        lineNumber: 297,
        columnNumber: 5
    }, this);
}
_s2(CompleteButton, "h4uQb2MNBI+lvQraYYGhysPu/Fg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"]
    ];
});
_c3 = CompleteButton;
function KnowledgeCheck({ content }) {
    _s3();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showExplanation, setShowExplanation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-white",
                children: content.question
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: content.options.map((option, i)=>{
                    const isSelected = selected === i;
                    const reveal = showExplanation && isSelected;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSelected(i);
                            setShowExplanation(false);
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors", isSelected ? reveal ? option.correct ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-200" : "border-rose-500/40 bg-rose-500/15 text-rose-200" : "border-brand/40 bg-brand/15 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px]",
                                children: String.fromCharCode(65 + i)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                                lineNumber: 354,
                                columnNumber: 15
                            }, this),
                            option.label
                        ]
                    }, i, true, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 337,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowExplanation(true),
                disabled: selected === null,
                className: "rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/15 disabled:opacity-40",
                children: "Check answer"
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            showExplanation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 6
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300",
                children: content.explanation
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 370,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, this);
}
_s3(KnowledgeCheck, "TOEn2bbH1XPtmdf92+X5Bu4i0NY=");
_c4 = KnowledgeCheck;
function ConceptDiagram() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-slate-950/50 p-6",
        children: [
            "CPU / JavaScript",
            "Command Encoder",
            "Vertex Shader",
            "Rasterizer",
            "Fragment Shader",
            "Framebuffer"
        ].map((stage, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-xs text-slate-200",
                        children: stage
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 388,
                        columnNumber: 13
                    }, this),
                    i < arr.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "my-1 text-brand-subtle",
                        children: "↓"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                        lineNumber: 392,
                        columnNumber: 15
                    }, this) : null
                ]
            }, stage, true, {
                fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
                lineNumber: 387,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/lab/panels/lesson-content-panel.tsx",
        lineNumber: 384,
        columnNumber: 5
    }, this);
}
_c5 = ConceptDiagram;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "LessonContentPanel");
__turbopack_context__.k.register(_c1, "LessonTabContent");
__turbopack_context__.k.register(_c2, "ExerciseValidation");
__turbopack_context__.k.register(_c3, "CompleteButton");
__turbopack_context__.k.register(_c4, "KnowledgeCheck");
__turbopack_context__.k.register(_c5, "ConceptDiagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/webgpu/samples/two-cubes/cube.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubeColorOffset",
    ()=>cubeColorOffset,
    "cubePositionOffset",
    ()=>cubePositionOffset,
    "cubeUVOffset",
    ()=>cubeUVOffset,
    "cubeVertexArray",
    ()=>cubeVertexArray,
    "cubeVertexCount",
    ()=>cubeVertexCount,
    "cubeVertexSize",
    ()=>cubeVertexSize
]);
const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.
const cubePositionOffset = 0;
const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.
const cubeUVOffset = 4 * 8;
const cubeVertexCount = 36;
const cubeVertexArray = new Float32Array([
    // float4 position, float4 color, float2 uv,
    1,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    -1,
    -1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    -1,
    -1,
    -1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    -1,
    -1,
    1,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    -1,
    -1,
    -1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    -1,
    -1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    -1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    -1,
    -1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    -1,
    1,
    -1,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    -1,
    -1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    -1,
    1,
    -1,
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    -1,
    -1,
    -1,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    -1,
    -1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    -1,
    1,
    -1,
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    -1,
    -1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    0,
    -1,
    -1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    -1,
    -1,
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    -1,
    -1,
    -1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    -1,
    1,
    -1,
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    -1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    -1,
    -1,
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    -1,
    1,
    -1,
    1,
    0,
    1,
    0,
    1,
    1,
    0
]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/webgpu/samples/two-cubes/shaders/basic.vert.wgsl (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/basic.vert.aa63694c.wgsl");}),
"[project]/lib/webgpu/samples/two-cubes/shaders/vertexPositionColor.frag.wgsl (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/vertexPositionColor.frag.c1d50fab.wgsl");}),
"[project]/lib/webgpu/samples/two-cubes/main.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTwoCubesDemo",
    ()=>createTwoCubesDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__ = __turbopack_context__.i("[project]/node_modules/gl-matrix/esm/mat4.js [app-client] (ecmascript) <export * as mat4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/samples/two-cubes/cube.ts [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("lib/webgpu/samples/two-cubes/main.ts")}`;
    }
};
;
;
const vertexShaderUrl = new __turbopack_context__.U(__turbopack_context__.r("[project]/lib/webgpu/samples/two-cubes/shaders/basic.vert.wgsl (static in ecmascript)"));
const fragmentShaderUrl = new __turbopack_context__.U(__turbopack_context__.r("[project]/lib/webgpu/samples/two-cubes/shaders/vertexPositionColor.frag.wgsl (static in ecmascript)"));
let shaderCache = null;
async function loadShaders() {
    if (!shaderCache) {
        shaderCache = Promise.all([
            fetch(vertexShaderUrl).then((res)=>res.text()),
            fetch(fragmentShaderUrl).then((res)=>res.text())
        ]).then(([vertex, fragment])=>({
                vertex,
                fragment
            }));
    }
    return shaderCache;
}
async function createTwoCubesDemo(device, format, overrides) {
    const cache = await loadShaders();
    const vertex = overrides?.vertexShader || cache.vertex;
    const fragment = overrides?.fragmentShader || cache.fragment;
    const pipeline = device.createRenderPipeline({
        layout: "auto",
        vertex: {
            module: device.createShaderModule({
                code: vertex
            }),
            entryPoint: "main",
            buffers: [
                {
                    arrayStride: 10 * 4,
                    attributes: [
                        {
                            shaderLocation: 0,
                            offset: 0,
                            format: "float32x4"
                        },
                        {
                            shaderLocation: 1,
                            offset: 8 * 4,
                            format: "float32x2"
                        }
                    ]
                }
            ]
        },
        fragment: {
            module: device.createShaderModule({
                code: fragment
            }),
            entryPoint: "main",
            targets: [
                {
                    format
                }
            ]
        },
        primitive: {
            topology: "triangle-list",
            cullMode: "back"
        },
        depthStencil: {
            format: "depth24plus",
            depthWriteEnabled: true,
            depthCompare: "less"
        }
    });
    const vertexBuffer = device.createBuffer({
        size: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexArray"].byteLength,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    device.queue.writeBuffer(vertexBuffer, 0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexArray"].buffer, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexArray"].byteOffset, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexArray"].byteLength);
    const uniformStride = 256;
    const uniformBuffer = device.createBuffer({
        size: uniformStride * 2,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });
    const bindGroupLayout = pipeline.getBindGroupLayout(0);
    const bindGroup0 = device.createBindGroup({
        layout: bindGroupLayout,
        entries: [
            {
                binding: 0,
                resource: {
                    buffer: uniformBuffer,
                    offset: 0,
                    size: 64
                }
            }
        ]
    });
    const bindGroup1 = device.createBindGroup({
        layout: bindGroupLayout,
        entries: [
            {
                binding: 0,
                resource: {
                    buffer: uniformBuffer,
                    offset: uniformStride,
                    size: 64
                }
            }
        ]
    });
    const viewMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].lookAt(viewMatrix, [
        0,
        2.5,
        6
    ], [
        0,
        0,
        0
    ], [
        0,
        1,
        0
    ]);
    const projectionMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create();
    const viewProjectionMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create();
    const modelMatrixLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create();
    const modelMatrixRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create();
    const mvpLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create();
    const mvpRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create();
    const uniformDataLeft = new Float32Array(16);
    const uniformDataRight = new Float32Array(16);
    let aspect = 1;
    const updateViewProjection = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].perspective(projectionMatrix, 45 * Math.PI / 180, aspect, 0.1, 100.0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);
    };
    updateViewProjection();
    return {
        clearColor: {
            r: 0.04,
            g: 0.05,
            b: 0.12,
            a: 1
        },
        requiresDepth: true,
        resize: (width, height)=>{
            if (height === 0) return;
            aspect = width / height;
            updateViewProjection();
        },
        update: (timestamp)=>{
            const rotation = timestamp / 1000;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].identity(modelMatrixLeft);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].translate(modelMatrixLeft, modelMatrixLeft, [
                -1.8,
                0,
                0
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].rotate(modelMatrixLeft, modelMatrixLeft, rotation * 0.7, [
                0,
                1,
                0
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].rotate(modelMatrixLeft, modelMatrixLeft, rotation * 0.4, [
                1,
                0,
                0
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].multiply(mvpLeft, viewProjectionMatrix, modelMatrixLeft);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].identity(modelMatrixRight);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].translate(modelMatrixRight, modelMatrixRight, [
                1.8,
                0,
                0
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].rotate(modelMatrixRight, modelMatrixRight, rotation, [
                0,
                1,
                0
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].rotate(modelMatrixRight, modelMatrixRight, rotation * 0.6, [
                0,
                0,
                1
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].multiply(mvpRight, viewProjectionMatrix, modelMatrixRight);
            uniformDataLeft.set(mvpLeft);
            uniformDataRight.set(mvpRight);
            device.queue.writeBuffer(uniformBuffer, 0, uniformDataLeft);
            device.queue.writeBuffer(uniformBuffer, uniformStride, uniformDataRight);
        },
        render: (pass)=>{
            pass.setPipeline(pipeline);
            pass.setVertexBuffer(0, vertexBuffer);
            pass.setBindGroup(0, bindGroup0);
            pass.draw(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexCount"], 1, 0, 0);
            pass.setBindGroup(0, bindGroup1);
            pass.draw(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexCount"], 1, 0, 0);
        },
        getStats: ()=>({
                drawCalls: 2,
                vertices: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexCount"] * 2,
                triangles: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexCount"] * 2 / 3
            }),
        dispose: ()=>{
            vertexBuffer.destroy();
            uniformBuffer.destroy();
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/webgpu/samples/hello-triangle/shaders.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "redFragmentWgsl",
    ()=>redFragmentWgsl,
    "triangleVertexWgsl",
    ()=>triangleVertexWgsl
]);
const triangleVertexWgsl = `// Adapted from the official WebGPU Samples "Hello Triangle".
@vertex
fn main(@builtin(vertex_index) vertex_index : u32) -> @builtin(position) vec4<f32> {
  var positions = array<vec2<f32>, 3>(
    vec2<f32>(0.0, 0.5),
    vec2<f32>(-0.5, -0.5),
    vec2<f32>(0.5, -0.5)
  );

  return vec4<f32>(positions[vertex_index], 0.0, 1.0);
}
`;
const redFragmentWgsl = `// Adapted from the official WebGPU Samples "Hello Triangle".
@fragment
fn main() -> @location(0) vec4<f32> {
  return vec4<f32>(1.0, 0.0, 0.0, 1.0);
}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/webgpu/samples/hello-triangle/main.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHelloTriangleDemo",
    ()=>createHelloTriangleDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$hello$2d$triangle$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/samples/hello-triangle/shaders.ts [app-client] (ecmascript)");
;
async function createHelloTriangleDemo(device, format, options = {}) {
    const vertex = options.vertexShader ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$hello$2d$triangle$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triangleVertexWgsl"];
    const fragment = options.fragmentShader ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$hello$2d$triangle$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redFragmentWgsl"];
    const pipeline = device.createRenderPipeline({
        layout: "auto",
        vertex: {
            module: device.createShaderModule({
                code: vertex
            }),
            entryPoint: "main"
        },
        fragment: {
            module: device.createShaderModule({
                code: fragment
            }),
            entryPoint: "main",
            targets: [
                {
                    format
                }
            ]
        },
        primitive: {
            topology: "triangle-list"
        }
    });
    return {
        clearColor: {
            r: 0.1,
            g: 0.3,
            b: 0.35,
            a: 1
        },
        requiresDepth: false,
        resize: ()=>undefined,
        update: ()=>undefined,
        render: (pass)=>{
            pass.setPipeline(pipeline);
            pass.draw(3, 1, 0, 0);
        },
        getStats: ()=>({
                drawCalls: 1,
                vertices: 3,
                triangles: 1
            }),
        dispose: ()=>{
        // GPUShaderModule resources are GC-managed.
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/webgpu/samples/textured-cube/shaders.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "basicVertexWgsl",
    ()=>basicVertexWgsl,
    "texturedFragmentWgsl",
    ()=>texturedFragmentWgsl
]);
const basicVertexWgsl = `struct Uniforms {
  modelViewProjectionMatrix : mat4x4f,
}
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct VertexOutput {
  @builtin(position) Position : vec4f,
  @location(0) fragUV : vec2f,
  @location(1) fragPosition: vec4f,
}

@vertex
fn main(
  @location(0) position : vec4f,
  @location(1) uv : vec2f
) -> VertexOutput {
  var output : VertexOutput;
  output.Position = uniforms.modelViewProjectionMatrix * position;
  output.fragUV = uv;
  output.fragPosition = 0.5 * (position + vec4(1.0, 1.0, 1.0, 1.0));
  return output;
}
`;
const texturedFragmentWgsl = `@group(0) @binding(1) var mySampler: sampler;
@group(0) @binding(2) var myTexture: texture_2d<f32>;

@fragment
fn main(
  @location(0) fragUV: vec2f,
  @location(1) fragPosition: vec4f
) -> @location(0) vec4f {
  return textureSample(myTexture, mySampler, fragUV) * fragPosition;
}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/webgpu/samples/textured-cube/textures/Di-3d.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Di-3d.271d54df.png");}),
"[project]/lib/webgpu/samples/textured-cube/main.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTexturedCubeDemo",
    ()=>createTexturedCubeDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wgpu$2d$matrix$2f$dist$2f$3$2e$x$2f$wgpu$2d$matrix$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$textured$2d$cube$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/samples/textured-cube/shaders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/samples/two-cubes/cube.ts [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("lib/webgpu/samples/textured-cube/main.ts")}`;
    }
};
;
;
;
const textureUrl = new __turbopack_context__.U(__turbopack_context__.r("[project]/lib/webgpu/samples/textured-cube/textures/Di-3d.png (static in ecmascript)"));
async function loadCubeTexture(device) {
    try {
        const response = await fetch(textureUrl);
        if (!response.ok) {
            throw new Error(`Failed to load texture: ${response.status}`);
        }
        const blob = await response.blob();
        const imageBitmap = await createImageBitmap(blob);
        const texture = device.createTexture({
            size: [
                imageBitmap.width,
                imageBitmap.height,
                1
            ],
            format: "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
        });
        device.queue.copyExternalImageToTexture({
            source: imageBitmap
        }, {
            texture
        }, [
            imageBitmap.width,
            imageBitmap.height
        ]);
        const sampler = device.createSampler({
            magFilter: "linear",
            minFilter: "linear"
        });
        return {
            texture,
            sampler
        };
    } catch (error) {
        console.warn("Falling back to generated checker texture", error);
        const imageData = new ImageData(new Uint8ClampedArray([
            255,
            64,
            64,
            255,
            64,
            64,
            255,
            255,
            64,
            64,
            255,
            255,
            255,
            255,
            64,
            255
        ]), 2, 2);
        const bitmap = await createImageBitmap(imageData);
        const texture = device.createTexture({
            size: [
                bitmap.width,
                bitmap.height,
                1
            ],
            format: "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
        });
        device.queue.copyExternalImageToTexture({
            source: bitmap
        }, {
            texture
        }, [
            bitmap.width,
            bitmap.height
        ]);
        const sampler = device.createSampler({
            magFilter: "linear",
            minFilter: "linear"
        });
        return {
            texture,
            sampler
        };
    }
}
async function createTexturedCubeDemo(device, format, options = {}) {
    const vertex = options.vertexShader ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$textured$2d$cube$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basicVertexWgsl"];
    const fragment = options.fragmentShader ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$textured$2d$cube$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texturedFragmentWgsl"];
    const textureAssets = await loadCubeTexture(device);
    const pipeline = device.createRenderPipeline({
        layout: "auto",
        vertex: {
            module: device.createShaderModule({
                code: vertex
            }),
            entryPoint: "main",
            buffers: [
                {
                    arrayStride: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexSize"],
                    attributes: [
                        {
                            shaderLocation: 0,
                            offset: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubePositionOffset"],
                            format: "float32x4"
                        },
                        {
                            shaderLocation: 1,
                            offset: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeUVOffset"],
                            format: "float32x2"
                        }
                    ]
                }
            ]
        },
        fragment: {
            module: device.createShaderModule({
                code: fragment
            }),
            entryPoint: "main",
            targets: [
                {
                    format
                }
            ]
        },
        primitive: {
            topology: "triangle-list",
            cullMode: "back"
        },
        depthStencil: {
            format: "depth24plus",
            depthWriteEnabled: true,
            depthCompare: "less"
        }
    });
    const vertexBuffer = device.createBuffer({
        size: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexArray"].byteLength,
        usage: GPUBufferUsage.VERTEX,
        mappedAtCreation: true
    });
    new Float32Array(vertexBuffer.getMappedRange()).set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexArray"]);
    vertexBuffer.unmap();
    const uniformBuffer = device.createBuffer({
        size: 64,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });
    const bindGroup = device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [
            {
                binding: 0,
                resource: {
                    buffer: uniformBuffer
                }
            },
            {
                binding: 1,
                resource: textureAssets.sampler
            },
            {
                binding: 2,
                resource: textureAssets.texture.createView()
            }
        ]
    });
    let aspect = 1;
    let projectionMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wgpu$2d$matrix$2f$dist$2f$3$2e$x$2f$wgpu$2d$matrix$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mat4"].perspective(2 * Math.PI / 5, aspect, 1, 100);
    const uniformData = new Float32Array(16);
    const getTransformationMatrix = (timestamp)=>{
        const viewMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wgpu$2d$matrix$2f$dist$2f$3$2e$x$2f$wgpu$2d$matrix$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mat4"].identity();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wgpu$2d$matrix$2f$dist$2f$3$2e$x$2f$wgpu$2d$matrix$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mat4"].translate(viewMatrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wgpu$2d$matrix$2f$dist$2f$3$2e$x$2f$wgpu$2d$matrix$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec3"].fromValues(0, 0, -4), viewMatrix);
        const now = timestamp / 1000;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wgpu$2d$matrix$2f$dist$2f$3$2e$x$2f$wgpu$2d$matrix$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mat4"].rotate(viewMatrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wgpu$2d$matrix$2f$dist$2f$3$2e$x$2f$wgpu$2d$matrix$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec3"].fromValues(Math.sin(now), Math.cos(now), 0), 1, viewMatrix);
        const modelViewProjectionMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wgpu$2d$matrix$2f$dist$2f$3$2e$x$2f$wgpu$2d$matrix$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mat4"].create();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wgpu$2d$matrix$2f$dist$2f$3$2e$x$2f$wgpu$2d$matrix$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mat4"].multiply(projectionMatrix, viewMatrix, modelViewProjectionMatrix);
        return modelViewProjectionMatrix;
    };
    return {
        clearColor: {
            r: 0.5,
            g: 0.5,
            b: 0.5,
            a: 1
        },
        requiresDepth: true,
        resize: (width, height)=>{
            if (height === 0) return;
            aspect = width / height;
            projectionMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wgpu$2d$matrix$2f$dist$2f$3$2e$x$2f$wgpu$2d$matrix$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mat4"].perspective(2 * Math.PI / 5, aspect, 1, 100);
        },
        update: (timestamp)=>{
            const transformationMatrix = getTransformationMatrix(timestamp);
            uniformData.set(transformationMatrix);
            device.queue.writeBuffer(uniformBuffer, 0, uniformData);
        },
        render: (pass)=>{
            pass.setPipeline(pipeline);
            pass.setVertexBuffer(0, vertexBuffer);
            pass.setBindGroup(0, bindGroup);
            pass.draw(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexCount"], 1, 0, 0);
        },
        getStats: ()=>({
                drawCalls: 1,
                vertices: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexCount"],
                triangles: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$cube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubeVertexCount"] / 3
            }),
        dispose: ()=>{
            vertexBuffer.destroy();
            uniformBuffer.destroy();
            textureAssets.texture.destroy();
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/stores/metrics-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMetricsStore",
    ()=>useMetricsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useMetricsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        metrics: {
            fps: 0,
            frameTime: 0,
            cpuTime: 0,
            gpuTime: 0,
            drawCalls: 0,
            memoryMB: 0,
            vertices: 0,
            triangles: 0,
            buffers: 0,
            textures: 0,
            framePulse: 0
        },
        updateMetrics: (patch)=>set((state)=>({
                    metrics: {
                        ...state.metrics,
                        ...patch
                    }
                })),
        pulseFrame: ()=>set((state)=>({
                    metrics: {
                        ...state.metrics,
                        framePulse: state.metrics.framePulse + 1
                    }
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/webgpu/triangle-demo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "availableShapes",
    ()=>availableShapes,
    "initTriangleDemo",
    ()=>initTriangleDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/samples/two-cubes/main.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$hello$2d$triangle$2f$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/samples/hello-triangle/main.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$textured$2d$cube$2f$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/samples/textured-cube/main.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/metrics-store.ts [app-client] (ecmascript)");
;
;
;
;
const availableShapes = [
    {
        id: "hello-triangle",
        label: "Hello Triangle",
        description: "Baseline WebGPU pipeline inspired by the official Hello Triangle sample. Demonstrates vertex buffers, shaders, and render loop fundamentals (see samples/hello-triangle/main.ts).",
        localPath: "samples/hello-triangle/main.ts",
        source: {
            title: "WebGPU Samples — Hello Triangle",
            url: "https://webgpu.github.io/webgpu-samples/?sample=helloTriangle"
        }
    },
    {
        id: "two-cubes",
        label: "Two Cubes",
        description: "Port of the WebGPU twoCubes sample. Demonstrates multiple draw calls and distinct uniform buffers per object.",
        localPath: "samples/two-cubes/main.ts",
        source: {
            title: "WebGPU Samples — Two Cubes",
            url: "https://webgpu.github.io/webgpu-samples/?sample=twoCubes"
        }
    },
    {
        id: "textured-cube",
        label: "Textured Cube",
        description: "Port of the WebGPU texturedCube sample. Demonstrates textured geometry, rotating model matrices, and uniform updates each frame (see samples/textured-cube/main.ts).",
        localPath: "samples/textured-cube/main.ts",
        source: {
            title: "WebGPU Samples — Textured Cube",
            url: "https://webgpu.github.io/webgpu-samples/?sample=texturedCube"
        }
    }
];
async function initTriangleDemo(canvas, titleElement) {
    try {
        if (typeof navigator === "undefined" || !("gpu" in navigator)) {
            const message = "WebGPU is not supported in this browser.";
            updateTitle(titleElement, message);
            return {
                status: "unsupported",
                message
            };
        }
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) {
            const message = "No adapter is available for WebGPU.";
            updateTitle(titleElement, message);
            return {
                status: "unsupported",
                message
            };
        }
        const device = await adapter.requestDevice();
        const context = canvas.getContext("webgpu");
        if (!context) {
            const message = "Unable to initialize WebGPU context.";
            updateTitle(titleElement, message);
            return {
                status: "error",
                message
            };
        }
        const format = navigator.gpu.getPreferredCanvasFormat();
        const configureContext = ()=>configureCanvasContext({
                canvas,
                context,
                device,
                format
            });
        let { width: canvasWidth, height: canvasHeight } = configureContext();
        let depthTexture = null;
        let depthView = null;
        let animationFrame;
        let currentDemo = null;
        let currentShape = availableShapes[0];
        let requestedShape = currentShape.id;
        let loadingShape = null;
        const ensureDepthResources = ()=>{
            depthTexture?.destroy();
            depthTexture = device.createTexture({
                size: {
                    width: canvasWidth,
                    height: canvasHeight
                },
                format: "depth24plus",
                usage: GPUTextureUsage.RENDER_ATTACHMENT
            });
            depthView = depthTexture.createView();
        };
        const observer = new ResizeObserver(()=>{
            const size = configureContext();
            canvasWidth = size.width;
            canvasHeight = size.height;
            currentDemo?.resize(size.width, size.height);
            if (currentDemo?.requiresDepth) {
                ensureDepthResources();
            }
        });
        observer.observe(canvas);
        let currentShaders = {};
        const setShape = (shapeId, shaders = {})=>{
            requestedShape = shapeId;
            currentShaders = shaders;
            const load = (async ()=>{
                const nextShape = availableShapes.find((shape)=>shape.id === shapeId) ?? availableShapes[0];
                const newDemo = await createDemoInstance(nextShape.id, device, format, shaders);
                if (requestedShape !== shapeId) {
                    newDemo.dispose();
                    return;
                }
                currentDemo?.dispose();
                currentDemo = newDemo;
                currentShape = nextShape;
                currentDemo.resize(canvasWidth, canvasHeight);
                if (currentDemo.requiresDepth) {
                    ensureDepthResources();
                } else {
                    depthTexture?.destroy();
                    depthTexture = null;
                    depthView = null;
                }
                updateTitle(titleElement, `WebGPU Demo — ${nextShape.label}`);
            })().catch((error)=>{
                console.error("Failed to load WebGPU shape", error);
                if (requestedShape === shapeId) {
                    updateTitle(titleElement, error instanceof Error ? error.message : "Failed to load WebGPU shape.");
                }
            });
            loadingShape = load.finally(()=>{
                if (loadingShape === load) {
                    loadingShape = null;
                }
            });
            return load;
        };
        const setShaders = (shapeId, shaders)=>{
            return setShape(shapeId, shaders);
        };
        let frameStats = {
            drawCalls: 0,
            vertices: 0,
            triangles: 0
        };
        let frameCount = 0;
        const frame = (timestamp)=>{
            const demo = currentDemo;
            if (!demo) {
                animationFrame = requestAnimationFrame(frame);
                return;
            }
            const encoder = device.createCommandEncoder();
            const textureView = context.getCurrentTexture().createView();
            demo.update(timestamp);
            const passDescriptor = {
                colorAttachments: [
                    {
                        view: textureView,
                        clearValue: demo.clearColor,
                        loadOp: "clear",
                        storeOp: "store"
                    }
                ]
            };
            if (demo.requiresDepth && depthView) {
                passDescriptor.depthStencilAttachment = {
                    view: depthView,
                    depthClearValue: 1,
                    depthLoadOp: "clear",
                    depthStoreOp: "store"
                };
            }
            const pass = encoder.beginRenderPass(passDescriptor);
            demo.render(pass);
            pass.end();
            frameStats = demo.getStats();
            device.queue.submit([
                encoder.finish()
            ]);
            if (frameCount % 2 === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"].getState().updateMetrics({
                    drawCalls: frameStats.drawCalls,
                    vertices: frameStats.vertices,
                    triangles: frameStats.triangles
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"].getState().pulseFrame();
            }
            frameCount += 1;
            animationFrame = requestAnimationFrame(frame);
        };
        setShape(currentShape.id);
        animationFrame = requestAnimationFrame(frame);
        const cleanup = ()=>{
            if (animationFrame) cancelAnimationFrame(animationFrame);
            observer.disconnect();
            depthTexture?.destroy();
            currentDemo?.dispose();
        };
        return {
            status: "ready",
            cleanup,
            setShape,
            setShaders,
            getStats: ()=>frameStats,
            getShape: ()=>currentShape
        };
    } catch (error) {
        console.error("WebGPU demo failed to initialise", error);
        const message = error instanceof Error ? error.message : "Unexpected WebGPU initialisation error.";
        updateTitle(titleElement, message);
        return {
            status: "error",
            message,
            cause: error
        };
    }
}
function updateTitle(titleElement, message) {
    if (titleElement) {
        titleElement.textContent = message;
    }
}
function configureCanvasContext({ canvas, context, device, format }) {
    const dpr = ("TURBOPACK compile-time truthy", 1) ? window.devicePixelRatio || 1 : "TURBOPACK unreachable";
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width * dpr));
    const height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    context.configure({
        device,
        format,
        alphaMode: "opaque",
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC
    });
    return {
        width,
        height
    };
}
async function createDemoInstance(id, device, format, shaders = {}) {
    switch(id){
        case "two-cubes":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$two$2d$cubes$2f$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTwoCubesDemo"])(device, format, shaders);
        case "textured-cube":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$textured$2d$cube$2f$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTexturedCubeDemo"])(device, format, shaders);
        case "hello-triangle":
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$hello$2d$triangle$2f$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHelloTriangleDemo"])(device, format, shaders);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/webgpu/use-webgpu-demo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWebGpuDemo",
    ()=>useWebGpuDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$triangle$2d$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/triangle-demo.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useWebGpuDemo(shapeId, shaders) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: "initial"
    });
    const setShapeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setShadersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getStatsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shaderKey = shaders ? `${shaders.vertexShader ?? ""}::${shaders.fragmentShader ?? ""}` : "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWebGpuDemo.useEffect": ()=>{
            let cancelled = false;
            const run = {
                "useWebGpuDemo.useEffect.run": async ()=>{
                    if (!canvasRef.current) return;
                    setState({
                        status: "loading"
                    });
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$triangle$2d$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initTriangleDemo"])(canvasRef.current, titleRef.current);
                    if (cancelled) {
                        if (result.status === "ready") result.cleanup();
                        return;
                    }
                    if (result.status === "ready") {
                        cleanupRef.current = result.cleanup;
                        setShapeRef.current = result.setShape;
                        setShadersRef.current = result.setShaders;
                        getStatsRef.current = result.getStats;
                        void result.setShape(shapeId, shaders);
                        setState({
                            status: "ready"
                        });
                    } else {
                        setState({
                            status: result.status,
                            message: result.message
                        });
                    }
                }
            }["useWebGpuDemo.useEffect.run"];
            void run();
            return ({
                "useWebGpuDemo.useEffect": ()=>{
                    cancelled = true;
                    cleanupRef.current?.();
                    cleanupRef.current = null;
                    setShapeRef.current = null;
                    setShadersRef.current = null;
                    getStatsRef.current = null;
                }
            })["useWebGpuDemo.useEffect"];
        // Run once on mount; shape and shader updates are handled below.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useWebGpuDemo.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWebGpuDemo.useEffect": ()=>{
            void setShapeRef.current?.(shapeId, shaders);
            if (shaders) {
                void setShadersRef.current?.(shapeId, shaders);
            }
        // Shader identity is tracked via shaderKey; full object identity would over-trigger re-runs.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useWebGpuDemo.useEffect"], [
        shapeId,
        shaderKey
    ]);
    const applyShaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebGpuDemo.useCallback[applyShaders]": (overrides)=>{
            void setShadersRef.current?.(shapeId, overrides);
        }
    }["useWebGpuDemo.useCallback[applyShaders]"], [
        shapeId
    ]);
    return {
        canvasRef,
        titleRef,
        state,
        applyShaders,
        getStats: ()=>getStatsRef.current?.() ?? {
                drawCalls: 0,
                vertices: 0,
                triangles: 0
            }
    };
}
_s(useWebGpuDemo, "8ufm5mzfL2u5uDkmviJElM31x4U=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/use-gpu-metrics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGpuMetrics",
    ()=>useGpuMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useGpuMetrics(enabled) {
    _s();
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fps: 0,
        frameTime: 0,
        drawCalls: 0,
        triangles: 0,
        vertices: 0
    });
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGpuMetrics.useEffect": ()=>{
            if (!enabled) return;
            let animationFrame;
            lastRef.current = performance.now();
            const tick = {
                "useGpuMetrics.useEffect.tick": ()=>{
                    const now = performance.now();
                    const delta = now - lastRef.current;
                    frameRef.current += 1;
                    if (delta >= 500) {
                        const frameCount = Math.max(frameRef.current, 1);
                        const fps = Math.round(frameCount * 1000 / delta);
                        const frameTime = Number((delta / frameCount).toFixed(2));
                        setMetrics({
                            "useGpuMetrics.useEffect.tick": (prev)=>({
                                    ...prev,
                                    fps,
                                    frameTime: Number.isFinite(frameTime) ? frameTime : 0
                                })
                        }["useGpuMetrics.useEffect.tick"]);
                        frameRef.current = 0;
                        lastRef.current = now;
                    }
                    animationFrame = requestAnimationFrame(tick);
                }
            }["useGpuMetrics.useEffect.tick"];
            animationFrame = requestAnimationFrame(tick);
            return ({
                "useGpuMetrics.useEffect": ()=>cancelAnimationFrame(animationFrame)
            })["useGpuMetrics.useEffect"];
        }
    }["useGpuMetrics.useEffect"], [
        enabled
    ]);
    const updateDrawStats = (drawCalls, vertices, triangles)=>{
        setMetrics((prev)=>({
                ...prev,
                drawCalls,
                vertices,
                triangles
            }));
    };
    return {
        metrics,
        updateDrawStats
    };
}
_s(useGpuMetrics, "RA1JmW2U9QdM4/QTfZiG6/5x/fQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/live-preview-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LivePreviewPanel",
    ()=>LivePreviewPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$axis$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Axis3D$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/axis-3d.js [app-client] (ecmascript) <export default as Axis3D>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$expand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Expand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/expand.js [app-client] (ecmascript) <export default as Expand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rotate3D$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-3d.js [app-client] (ecmascript) <export default as Rotate3D>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$use$2d$webgpu$2d$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/use-webgpu-demo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$use$2d$gpu$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/use-gpu-metrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/ui-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const toolbarActions = [
    {
        id: "grid",
        label: "Grid",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"]
    },
    {
        id: "axis",
        label: "Axis",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$axis$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Axis3D$3e$__["Axis3D"]
    },
    {
        id: "wireframe",
        label: "Wireframe",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"]
    },
    {
        id: "normals",
        label: "Normals",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rotate3D$3e$__["Rotate3D"]
    }
];
const additionalActions = [
    {
        id: "bounding",
        label: "Bounding boxes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"]
    },
    {
        id: "vertices",
        label: "Vertices",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"]
    },
    {
        id: "tangents",
        label: "Tangents",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$axis$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Axis3D$3e$__["Axis3D"]
    },
    {
        id: "uv",
        label: "UV",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"]
    },
    {
        id: "depth",
        label: "Depth",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
    },
    {
        id: "lighting",
        label: "Lighting only",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"]
    },
    {
        id: "overdraw",
        label: "Overdraw",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
    },
    {
        id: "collision",
        label: "Collision",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"]
    },
    {
        id: "vertexIds",
        label: "Vertex IDs",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"]
    },
    {
        id: "fragmentIds",
        label: "Fragment IDs",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"]
    }
];
function LivePreviewPanel({ shapeId, shaderOverrides }) {
    _s();
    const { canvasRef, titleRef, state, getStats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$use$2d$webgpu$2d$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebGpuDemo"])(shapeId, shaderOverrides);
    const { showGpuMetrics } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const { metrics, updateDrawStats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$use$2d$gpu$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGpuMetrics"])(showGpuMetrics);
    const [activeToggles, setActiveToggles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [screenshotState, setScreenshotState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LivePreviewPanel.useEffect": ()=>{
            if (!showGpuMetrics) return;
            let raf;
            const tick = {
                "LivePreviewPanel.useEffect.tick": ()=>{
                    updateDrawStats(getStats().drawCalls, getStats().vertices, getStats().triangles);
                    raf = requestAnimationFrame(tick);
                }
            }["LivePreviewPanel.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            return ({
                "LivePreviewPanel.useEffect": ()=>cancelAnimationFrame(raf)
            })["LivePreviewPanel.useEffect"];
        }
    }["LivePreviewPanel.useEffect"], [
        showGpuMetrics,
        getStats,
        updateDrawStats
    ]);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LivePreviewPanel.useCallback[toggle]": (id)=>{
            setActiveToggles({
                "LivePreviewPanel.useCallback[toggle]": (prev)=>({
                        ...prev,
                        [id]: !prev[id]
                    })
            }["LivePreviewPanel.useCallback[toggle]"]);
        }
    }["LivePreviewPanel.useCallback[toggle]"], []);
    const takeScreenshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LivePreviewPanel.useCallback[takeScreenshot]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            setScreenshotState("processing");
            try {
                const link = document.createElement("a");
                link.download = `webgpu-lab-${shapeId}-${Date.now()}.png`;
                link.href = canvas.toDataURL("image/png");
                link.click();
                setScreenshotState("saved");
                setTimeout({
                    "LivePreviewPanel.useCallback[takeScreenshot]": ()=>setScreenshotState("idle")
                }["LivePreviewPanel.useCallback[takeScreenshot]"], 1200);
            } catch  {
                setScreenshotState("idle");
            }
        }
    }["LivePreviewPanel.useCallback[takeScreenshot]"], [
        canvasRef,
        shapeId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-card", isFullscreen ? "fixed inset-4 z-[100]" : "h-full lg:h-auto"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-ring"
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                                children: "WebGPU Viewport"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                ref: titleRef,
                                className: "font-display text-sm font-semibold text-white",
                                children: "Initializing…"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            toolbarActions.map((action)=>{
                                const Icon = action.icon;
                                const active = !!activeToggles[action.id];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggle(action.id),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-lg p-1.5 transition-colors", active ? "text-brand" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"),
                                    "aria-label": action.label,
                                    title: action.label,
                                    children: [
                                        active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "preview-action-pill",
                                            className: "absolute inset-0 rounded-lg bg-brand/15",
                                            transition: {
                                                type: "spring",
                                                bounce: 0.15,
                                                duration: 0.5
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "relative z-10 size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, action.id, true, {
                                    fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-1 h-4 w-px bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center gap-1 xl:flex",
                                children: additionalActions.map((action)=>{
                                    const Icon = action.icon;
                                    const active = !!activeToggles[action.id];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggle(action.id),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg p-1.5 transition-colors", active ? "bg-cyan-400/15 text-cyan-300" : "text-slate-500 hover:bg-white/5 hover:text-slate-200"),
                                        "aria-label": action.label,
                                        "aria-pressed": active,
                                        title: action.label,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this)
                                    }, action.id, false, {
                                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-1 hidden h-4 w-px bg-white/10 xl:block"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: takeScreenshot,
                                disabled: screenshotState !== "idle",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 disabled:opacity-50", screenshotState === "saved" && "text-emerald-400"),
                                "aria-label": "Screenshot",
                                title: screenshotState === "saved" ? "Saved" : "Screenshot",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsFullscreen((v)=>!v),
                                className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200",
                                "aria-label": "Toggle fullscreen",
                                title: "Toggle fullscreen",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$expand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Expand$3e$__["Expand"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex-1 overflow-hidden p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            className: "h-full w-full rounded-xl bg-slate-950"
                        }, void 0, false, {
                            fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: state.status !== "ready" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/80 backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "size-8 animate-spin rounded-full border-2 border-brand/30 border-t-brand"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400",
                                        children: state.status === "loading" || state.status === "initial" ? "Negotiating WebGPU device…" : state.message
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            showGpuMetrics ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/10 px-4 py-2 text-[11px] text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                className: "size-3.5 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this),
                            metrics.fps,
                            " FPS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            Number.isFinite(metrics.frameTime) ? metrics.frameTime : 0,
                            " ms frame"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            metrics.drawCalls,
                            " draw calls"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            metrics.vertices.toLocaleString(),
                            " vertices"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            metrics.triangles.toLocaleString(),
                            " triangles"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    Object.entries(activeToggles).filter(([, active])=>active).map(([id])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded bg-brand/20 px-1.5 py-0.5 text-[10px] text-brand-subtle",
                            children: id
                        }, id, false, {
                            fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                            lineNumber: 232,
                            columnNumber: 15
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            "Auto"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/live-preview-panel.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(LivePreviewPanel, "gIenUHewFEZyXmEc0sja8piWzdY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$use$2d$webgpu$2d$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebGpuDemo"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$use$2d$gpu$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGpuMetrics"]
    ];
});
_c = LivePreviewPanel;
var _c;
__turbopack_context__.k.register(_c, "LivePreviewPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/lessons/shader-source.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLessonShaderSource",
    ()=>getLessonShaderSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$hello$2d$triangle$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/samples/hello-triangle/shaders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$textured$2d$cube$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/webgpu/samples/textured-cube/shaders.ts [app-client] (ecmascript)");
;
;
const defaultSource = {
    vertexFile: "triangle.vert.wgsl",
    fragmentFile: "red.frag.wgsl",
    vertex: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$hello$2d$triangle$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triangleVertexWgsl"],
    fragment: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$hello$2d$triangle$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redFragmentWgsl"]
};
const sources = {
    "ch1-first-triangle": defaultSource,
    "ch2-vertex-buffers": defaultSource,
    "ch3-index-buffers": defaultSource,
    "ch4-uniform-buffers": defaultSource,
    "ch5-matrices": defaultSource,
    "ch6-coordinate-systems": defaultSource,
    "ch7-textures": {
        vertexFile: "basic.vert.wgsl",
        fragmentFile: "sampleTextureMixColor.frag.wgsl",
        vertex: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$textured$2d$cube$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basicVertexWgsl"],
        fragment: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$textured$2d$cube$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texturedFragmentWgsl"]
    },
    "ch8-lighting": {
        vertexFile: "basic.vert.wgsl",
        fragmentFile: "sampleTextureMixColor.frag.wgsl",
        vertex: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$textured$2d$cube$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basicVertexWgsl"],
        fragment: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$webgpu$2f$samples$2f$textured$2d$cube$2f$shaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texturedFragmentWgsl"]
    }
};
function getLessonShaderSource(id) {
    return sources[id] ?? defaultSource;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/use-wgsl-validator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWgslValidator",
    ()=>useWgslValidator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useWgslValidator() {
    _s();
    const validate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWgslValidator.useCallback[validate]": async (code)=>{
            if (!code.trim()) {
                return {
                    valid: false,
                    message: "Shader code is empty."
                };
            }
            if (typeof navigator === "undefined" || !("gpu" in navigator)) {
                return {
                    valid: false,
                    message: "WebGPU is not available to validate WGSL."
                };
            }
            try {
                const adapter = await navigator.gpu.requestAdapter();
                if (!adapter) {
                    return {
                        valid: false,
                        message: "No WebGPU adapter available."
                    };
                }
                const device = await adapter.requestDevice();
                const shaderModule = device.createShaderModule({
                    code
                });
                const info = await shaderModule.getCompilationInfo();
                if (info.messages.length > 0) {
                    const errors = info.messages.filter({
                        "useWgslValidator.useCallback[validate].errors": (m)=>m.type === "error"
                    }["useWgslValidator.useCallback[validate].errors"]);
                    if (errors.length > 0) {
                        const first = errors[0];
                        return {
                            valid: false,
                            message: `${first.message} (line ${first.lineNum}, col ${first.linePos})`
                        };
                    }
                    const warnings = info.messages.filter({
                        "useWgslValidator.useCallback[validate].warnings": (m)=>m.type === "warning"
                    }["useWgslValidator.useCallback[validate].warnings"]);
                    if (warnings.length > 0) {
                        return {
                            valid: true,
                            message: `${warnings.length} warning(s) found.`
                        };
                    }
                }
                return {
                    valid: true
                };
            } catch (error) {
                const message = error instanceof Error ? error.message : "Unknown validation error.";
                return {
                    valid: false,
                    message
                };
            }
        }
    }["useWgslValidator.useCallback[validate]"], []);
    return {
        validate
    };
}
_s(useWgslValidator, "LFZADIFIYziBCEJrN51afpy2Rqo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/code-editor-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeEditorPanel",
    ()=>CodeEditorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-client] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/columns-2.js [app-client] (ecmascript) <export default as Columns2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code-2.js [app-client] (ecmascript) <export default as FileCode2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/workspace-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/lesson-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/ui-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$shader$2d$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/lessons/shader-source.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$use$2d$wgsl$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/use-wgsl-validator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const Editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Editor;
function CodeEditorPanel() {
    _s();
    const { activeCodeFile, setActiveCodeFile, codeVertex, codeFragment, setCodeVertex, setCodeFragment, compileError, setCompileError, isRunning, setIsRunning, versionHistory, saveVersion, restoreVersion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"])();
    const activeLessonId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "CodeEditorPanel.useLessonStore[activeLessonId]": (s)=>s.activeLessonId
    }["CodeEditorPanel.useLessonStore[activeLessonId]"]);
    const minimap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "CodeEditorPanel.useUiStore[minimap]": (s)=>s.minimap
    }["CodeEditorPanel.useUiStore[minimap]"]);
    const { validate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$use$2d$wgsl$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWgslValidator"])();
    const [validating, setValidating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [replaceTerm, setReplaceTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [splitEditor, setSplitEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [historyOpen, setHistoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lessonSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$shader$2d$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLessonShaderSource"])(activeLessonId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditorPanel.useEffect": ()=>{
            // Defer state updates to avoid cascading renders
            const timer = setTimeout({
                "CodeEditorPanel.useEffect.timer": ()=>{
                    setCodeVertex(lessonSource.vertex);
                    setCodeFragment(lessonSource.fragment);
                    setCompileError(null);
                    setIsRunning(true);
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"].getState().applyShaders({});
                }
            }["CodeEditorPanel.useEffect.timer"], 0);
            return ({
                "CodeEditorPanel.useEffect": ()=>clearTimeout(timer)
            })["CodeEditorPanel.useEffect"];
        }
    }["CodeEditorPanel.useEffect"], [
        activeLessonId,
        lessonSource.vertex,
        lessonSource.fragment,
        setCodeVertex,
        setCodeFragment,
        setCompileError,
        setIsRunning
    ]);
    const activeCode = activeCodeFile === "vertex" ? codeVertex : codeFragment;
    const activeFileName = activeCodeFile === "vertex" ? lessonSource.vertexFile : lessonSource.fragmentFile;
    const matchCount = searchTerm ? activeCode.toLowerCase().split(searchTerm.toLowerCase()).length - 1 : 0;
    const updateCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[updateCode]": (value)=>{
            const code = value ?? "";
            if (activeCodeFile === "vertex") {
                setCodeVertex(code);
            } else {
                setCodeFragment(code);
            }
        }
    }["CodeEditorPanel.useCallback[updateCode]"], [
        activeCodeFile,
        setCodeVertex,
        setCodeFragment
    ]);
    const saveCurrentVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[saveCurrentVersion]": (label)=>{
            saveVersion({
                file: activeCodeFile,
                code: activeCode,
                label
            });
        }
    }["CodeEditorPanel.useCallback[saveCurrentVersion]"], [
        activeCode,
        activeCodeFile,
        saveVersion
    ]);
    const handleRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[handleRun]": async ()=>{
            setIsRunning(true);
            setValidating(true);
            setCompileError(null);
            const vertexResult = await validate(codeVertex);
            const fragmentResult = await validate(codeFragment);
            setValidating(false);
            if (!vertexResult.valid) {
                setCompileError(`Vertex: ${vertexResult.message}`);
                setIsRunning(false);
                return;
            }
            if (!fragmentResult.valid) {
                setCompileError(`Fragment: ${fragmentResult.message}`);
                setIsRunning(false);
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"].getState().applyShaders({
                vertexShader: codeVertex,
                fragmentShader: codeFragment
            });
            saveVersion({
                file: activeCodeFile,
                code: activeCode,
                label: "Applied shader"
            });
        }
    }["CodeEditorPanel.useCallback[handleRun]"], [
        codeVertex,
        codeFragment,
        validate,
        setCompileError,
        setIsRunning,
        saveVersion,
        activeCodeFile,
        activeCode
    ]);
    const handleReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[handleReset]": ()=>{
            setCodeVertex(lessonSource.vertex);
            setCodeFragment(lessonSource.fragment);
            setCompileError(null);
            setIsRunning(true);
        }
    }["CodeEditorPanel.useCallback[handleReset]"], [
        lessonSource,
        setCodeVertex,
        setCodeFragment,
        setCompileError,
        setIsRunning
    ]);
    const handleCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[handleCopy]": ()=>{
            void navigator.clipboard.writeText(activeCode);
        }
    }["CodeEditorPanel.useCallback[handleCopy]"], [
        activeCode
    ]);
    const handleDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[handleDownload]": ()=>{
            const blob = new Blob([
                activeCode
            ], {
                type: "text/plain"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = activeFileName;
            a.click();
            URL.revokeObjectURL(url);
        }
    }["CodeEditorPanel.useCallback[handleDownload]"], [
        activeCode,
        activeFileName
    ]);
    const handleFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[handleFormat]": ()=>{
            const formatted = activeCode.split("\n").map({
                "CodeEditorPanel.useCallback[handleFormat].formatted": (line)=>line.trim()
            }["CodeEditorPanel.useCallback[handleFormat].formatted"]).join("\n");
            if (activeCodeFile === "vertex") {
                setCodeVertex(formatted);
            } else {
                setCodeFragment(formatted);
            }
        }
    }["CodeEditorPanel.useCallback[handleFormat]"], [
        activeCode,
        activeCodeFile,
        setCodeVertex,
        setCodeFragment
    ]);
    const handleShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[handleShare]": ()=>{
            const payload = JSON.stringify({
                lessonId: activeLessonId,
                file: activeCodeFile,
                code: activeCode
            }, null, 2);
            void navigator.clipboard.writeText(payload);
        }
    }["CodeEditorPanel.useCallback[handleShare]"], [
        activeCode,
        activeCodeFile,
        activeLessonId
    ]);
    const handleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[handleSave]": ()=>{
            saveCurrentVersion("Manual snapshot");
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"].getState().addBookmark({
                id: `shader-${activeLessonId}-${activeCodeFile}-${Date.now()}`,
                title: `${activeFileName} snapshot`,
                type: "shader"
            });
        }
    }["CodeEditorPanel.useCallback[handleSave]"], [
        activeFileName,
        activeCodeFile,
        activeLessonId,
        saveCurrentVersion
    ]);
    const replaceFirst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[replaceFirst]": ()=>{
            if (!searchTerm) return;
            const next = activeCode.replace(searchTerm, replaceTerm);
            updateCode(next);
        }
    }["CodeEditorPanel.useCallback[replaceFirst]"], [
        activeCode,
        replaceTerm,
        searchTerm,
        updateCode
    ]);
    const replaceAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeEditorPanel.useCallback[replaceAll]": ()=>{
            if (!searchTerm) return;
            const next = activeCode.split(searchTerm).join(replaceTerm);
            updateCode(next);
        }
    }["CodeEditorPanel.useCallback[replaceAll]"], [
        activeCode,
        replaceTerm,
        searchTerm,
        updateCode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                                children: "WGSL Editor"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileTab, {
                                        active: activeCodeFile === "vertex",
                                        label: lessonSource.vertexFile,
                                        onClick: ()=>setActiveCodeFile("vertex")
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileTab, {
                                        active: activeCodeFile === "fragment",
                                        label: lessonSource.fragmentFile,
                                        onClick: ()=>setActiveCodeFile("fragment")
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"],
                                label: "Run",
                                onClick: handleRun,
                                active: isRunning,
                                loading: validating
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
                                label: "Reset",
                                onClick: handleReset
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
                                label: "Search and replace",
                                onClick: ()=>setSearchOpen((v)=>!v),
                                active: searchOpen
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns2$3e$__["Columns2"],
                                label: "Split editor",
                                onClick: ()=>setSplitEditor((v)=>!v),
                                active: splitEditor
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"],
                                label: "Format",
                                onClick: handleFormat
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"],
                                label: "Copy",
                                onClick: handleCopy
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
                                label: "Download",
                                onClick: handleDownload
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
                                label: "Share",
                                onClick: handleShare
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"],
                                label: "Save",
                                onClick: handleSave
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"],
                                label: "Version history",
                                onClick: ()=>setHistoryOpen((v)=>!v),
                                active: historyOpen
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            searchOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-[180px] flex-1 items-center gap-2 rounded-lg border border-white/10 bg-slate-950/60 px-2 py-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "size-3.5 text-slate-500"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: searchTerm,
                                onChange: (event)=>setSearchTerm(event.target.value),
                                placeholder: "Find in current file",
                                className: "min-w-0 flex-1 bg-transparent text-slate-200 placeholder:text-slate-600 focus:outline-none",
                                "aria-label": "Find in current shader file"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: replaceTerm,
                        onChange: (event)=>setReplaceTerm(event.target.value),
                        placeholder: "Replace with",
                        className: "min-w-[150px] rounded-lg border border-white/10 bg-slate-950/60 px-2 py-1.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80",
                        "aria-label": "Replace with"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-400",
                        children: [
                            matchCount,
                            " matches"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: replaceFirst,
                        disabled: !searchTerm || matchCount === 0,
                        className: "rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold text-slate-200 hover:bg-white/10 disabled:opacity-40",
                        children: "Replace"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: replaceAll,
                        disabled: !searchTerm || matchCount === 0,
                        className: "rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold text-slate-200 hover:bg-white/10 disabled:opacity-40",
                        children: "Replace all"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSearchOpen(false),
                        className: "rounded-lg p-1 text-slate-500 hover:bg-white/5 hover:text-slate-200",
                        "aria-label": "Close search",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "size-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this) : null,
            compileError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    height: 0,
                    opacity: 0
                },
                animate: {
                    height: "auto",
                    opacity: 1
                },
                className: "flex items-start gap-2 border-b border-rose-500/20 bg-rose-500/10 px-4 py-2 text-xs text-rose-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "mt-0.5 size-4 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "font-semibold",
                                children: "Shader compilation failed"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-rose-300/80",
                                children: compileError
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                lineNumber: 277,
                columnNumber: 9
            }, this) : isRunning && !validating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    height: 0,
                    opacity: 0
                },
                animate: {
                    height: "auto",
                    opacity: 1
                },
                className: "flex items-center gap-2 border-b border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: "Shader compiled successfully"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 overflow-hidden",
                children: [
                    splitEditor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid h-full grid-cols-1 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorPane, {
                                label: lessonSource.vertexFile,
                                value: codeVertex,
                                onChange: (value)=>setCodeVertex(value ?? ""),
                                minimap: minimap
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorPane, {
                                label: lessonSource.fragmentFile,
                                value: codeFragment,
                                onChange: (value)=>setCodeFragment(value ?? ""),
                                minimap: minimap,
                                className: "border-t border-white/10 md:border-l md:border-t-0"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorPane, {
                        label: activeFileName,
                        value: activeCode,
                        onChange: updateCode,
                        minimap: minimap
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this),
                    historyOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "absolute inset-y-0 right-0 z-20 w-full max-w-xs border-l border-white/10 bg-[#090B13]/95 p-3 shadow-2xl backdrop-blur-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] uppercase tracking-[0.25em] text-brand-subtle",
                                                children: "History"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-sm font-semibold text-white",
                                                children: "Shader Snapshots"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setHistoryOpen(false),
                                        className: "rounded-lg p-1 text-slate-500 hover:bg-white/5 hover:text-slate-200",
                                        "aria-label": "Close version history",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>saveCurrentVersion("Named checkpoint"),
                                className: "mb-3 flex w-full items-center justify-center gap-2 rounded-lg border border-brand/30 bg-brand/10 px-3 py-2 text-xs font-semibold text-brand-subtle hover:bg-brand/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this),
                                    "Save checkpoint"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 overflow-y-auto",
                                children: versionHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-400",
                                    children: "No snapshots yet. Run, save, or create a checkpoint to capture the current shader."
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                    lineNumber: 349,
                                    columnNumber: 17
                                }, this) : versionHistory.map((version)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>restoreVersion(version),
                                        className: "w-full rounded-xl border border-white/10 bg-white/5 p-3 text-left transition-colors hover:border-brand/30 hover:bg-brand/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-slate-200",
                                                        children: version.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-400",
                                                        children: version.file
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                                lineNumber: 359,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-[10px] text-slate-500",
                                                children: new Date(version.createdAt).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                                lineNumber: 363,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "mt-2 block truncate text-[10px] text-cyan-200/80",
                                                children: version.code.split("\n").find(Boolean) ?? "empty shader"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                                lineNumber: 366,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, version.id, true, {
                                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                        lineNumber: 354,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s(CodeEditorPanel, "ceNHS44F8eoR9my3+vQMck6i5KQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$use$2d$wgsl$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWgslValidator"]
    ];
});
_c1 = CodeEditorPanel;
function EditorPane({ label, value, onChange, minimap, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full min-h-[260px] flex-col", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-white/10 bg-slate-950/50 px-3 py-1.5 text-[10px] text-slate-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "WGSL"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-0 flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Editor, {
                    theme: "vs-dark",
                    defaultLanguage: "wgsl",
                    value: value,
                    onChange: onChange,
                    options: {
                        minimap: {
                            enabled: minimap,
                            scale: 1
                        },
                        fontSize: 13,
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        lineNumbers: "on",
                        folding: true,
                        wordWrap: "on",
                        automaticLayout: true,
                        scrollBeyondLastLine: false,
                        renderWhitespace: "selection",
                        padding: {
                            top: 16
                        }
                    },
                    className: "h-full w-full",
                    loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full items-center justify-center text-xs text-slate-500",
                        children: "Loading Monaco editor..."
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                        lineNumber: 419,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
        lineNumber: 394,
        columnNumber: 5
    }, this);
}
_c2 = EditorPane;
function FileTab({ active, label, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors", active ? "bg-brand/20 text-brand" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__["FileCode2"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
        lineNumber: 439,
        columnNumber: 5
    }, this);
}
_c3 = FileTab;
function ToolbarButton({ icon: Icon, label, active, loading, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: loading,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 disabled:opacity-50", active && "text-brand"),
        "aria-label": label,
        title: label,
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "block size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        }, void 0, false, {
            fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
            lineNumber: 479,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
            lineNumber: 481,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/lab/panels/code-editor-panel.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
_c4 = ToolbarButton;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Editor");
__turbopack_context__.k.register(_c1, "CodeEditorPanel");
__turbopack_context__.k.register(_c2, "EditorPane");
__turbopack_context__.k.register(_c3, "FileTab");
__turbopack_context__.k.register(_c4, "ToolbarButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/pipeline-visualizer-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PipelineVisualizerPanel",
    ()=>PipelineVisualizerPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/metrics-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/lesson-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const pipelineStages = [
    {
        id: "cpu",
        label: "CPU",
        summary: "JavaScript prepares the frame, updates uniforms, and schedules commands.",
        detail: "The CPU runs application logic: animation updates, input handling, and render scheduling. It writes to JavaScript-visible buffers and textures before any GPU work begins."
    },
    {
        id: "js",
        label: "JavaScript",
        summary: "Application logic builds render bundles and vertex data.",
        detail: "JS creates command encoders, sets bind groups, writes vertex/index data, and chooses pipelines. Most WebGPU overhead is determined here by how few state changes are made."
    },
    {
        id: "encoder",
        label: "Command Encoder",
        summary: "Records GPU commands into a command buffer.",
        detail: "A GPUCommandEncoder captures render passes, compute dispatches, copy operations, and debug markers. Encoders are cheap to create and can be batched."
    },
    {
        id: "buffer",
        label: "Command Buffer",
        summary: "Serialized GPU work ready for submission.",
        detail: "The finished encoder produces a GPUCommandBuffer containing all commands for one submission. Buffers can be reused, but they are single-use once submitted."
    },
    {
        id: "queue",
        label: "GPU Queue",
        summary: "The queue serially executes command buffers.",
        detail: "GPUQueue.submit takes one or more command buffers and passes them to the driver. Submissions within a single queue execute in order."
    },
    {
        id: "vertex",
        label: "Vertex Shader",
        summary: "Processes each vertex and outputs clip-space positions.",
        detail: "The vertex shader runs once per vertex. It reads attributes, uniform buffers, and textures, then writes to @builtin(position) and user-defined outputs."
    },
    {
        id: "assembly",
        label: "Primitive Assembly",
        summary: "Vertices are grouped into triangles.",
        detail: "After vertex shading, primitives are assembled based on the pipeline topology (triangle-list, strip, line-list, point-list, etc.). Index buffers are read here."
    },
    {
        id: "rasterizer",
        label: "Rasterizer",
        summary: "Triangles are converted into fragments.",
        detail: "The rasterizer clips, culls, and interpolates per-vertex values across the screen. Each fragment receives interpolated attributes for the fragment shader."
    },
    {
        id: "fragment",
        label: "Fragment Shader",
        summary: "Determines the color of each fragment.",
        detail: "The fragment shader runs once per rasterized fragment. It returns @location(0) color values and can sample textures or run discard for alpha cutouts."
    },
    {
        id: "depth",
        label: "Depth Buffer",
        summary: "Z-testing discards hidden fragments.",
        detail: "Depth/stencil testing compares fragment depth against the depth texture. Fragments that fail are discarded before blending and framebuffer writes."
    },
    {
        id: "framebuffer",
        label: "Framebuffer",
        summary: "Final color pixels are written.",
        detail: "Surviving fragments are blended into color attachments. Multi-sampled attachments are resolved here before presentation."
    },
    {
        id: "present",
        label: "Presentation",
        summary: "The swap chain displays the image on screen.",
        detail: "The swap chain presents the completed frame. The browser compositor schedules the image for the next vblank."
    }
];
const pipelineStageCycle = pipelineStages.map((s)=>s.id);
const lessonEmphasis = {
    intro: [
        "cpu",
        "js",
        "encoder"
    ],
    "ch1-first-triangle": [
        "vertex",
        "fragment",
        "framebuffer",
        "present"
    ],
    "ch2-vertex-buffers": [
        "vertex",
        "assembly"
    ],
    "ch3-index-buffers": [
        "assembly",
        "vertex"
    ],
    "ch4-uniform-buffers": [
        "js",
        "vertex",
        "fragment"
    ],
    "ch5-matrices": [
        "vertex"
    ],
    "ch6-coordinate-systems": [
        "vertex",
        "rasterizer"
    ],
    "ch7-textures": [
        "fragment"
    ],
    "ch8-lighting": [
        "vertex",
        "fragment"
    ],
    "ch9-model-loading": [
        "js",
        "vertex",
        "assembly"
    ],
    "ch10-instancing": [
        "vertex",
        "assembly"
    ],
    "ch11-shadow-mapping": [
        "fragment",
        "depth"
    ],
    "ch12-post-processing": [
        "fragment",
        "framebuffer",
        "present"
    ],
    "ch13-particles": [
        "cpu",
        "queue",
        "vertex"
    ],
    "ch14-compute-shaders": [
        "queue",
        "vertex"
    ],
    "ch15-optimization": [
        "cpu",
        "queue",
        "fragment"
    ]
};
function PipelineVisualizerPanel() {
    _s();
    const [activeStage, setActiveStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pulseStage, setPulseStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const framePulse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"])({
        "PipelineVisualizerPanel.useMetricsStore[framePulse]": (s)=>s.metrics.framePulse
    }["PipelineVisualizerPanel.useMetricsStore[framePulse]"]);
    const activeLessonId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "PipelineVisualizerPanel.useLessonStore[activeLessonId]": (s)=>s.activeLessonId
    }["PipelineVisualizerPanel.useLessonStore[activeLessonId]"]);
    const emphasized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipelineVisualizerPanel.useMemo[emphasized]": ()=>new Set(lessonEmphasis[activeLessonId] ?? [])
    }["PipelineVisualizerPanel.useMemo[emphasized]"], [
        activeLessonId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipelineVisualizerPanel.useEffect": ()=>{
            let step = 0;
            const interval = setInterval({
                "PipelineVisualizerPanel.useEffect.interval": ()=>{
                    setPulseStage(pipelineStageCycle[step]);
                    step = (step + 1) % pipelineStageCycle.length;
                }
            }["PipelineVisualizerPanel.useEffect.interval"], 160);
            return ({
                "PipelineVisualizerPanel.useEffect": ()=>clearInterval(interval)
            })["PipelineVisualizerPanel.useEffect"];
        }
    }["PipelineVisualizerPanel.useEffect"], [
        framePulse
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                                children: "GPU Pipeline"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-1 font-display text-lg font-semibold text-white",
                                children: "Graphics Pipeline Visualizer"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400",
                                children: "Hover or click a stage for details. Packets show live data flow."
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                className: "inline-block size-3 align-text-bottom"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            " ",
                            activeLessonId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-1 flex-col items-center gap-3 overflow-y-auto py-2",
                children: pipelineStages.map((stage, i)=>{
                    const isEmphasized = emphasized.has(stage.id);
                    const isLast = i === pipelineStages.length - 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StageNode, {
                        stage: stage,
                        index: i,
                        isActive: activeStage === stage.id,
                        isPulsing: pulseStage === stage.id,
                        isEmphasized: isEmphasized,
                        onHover: ()=>setActiveStage(stage.id),
                        onLeave: ()=>setActiveStage(null),
                        onClick: ()=>setActiveStage(stage.id),
                        children: !isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Packet, {
                            active: pulseStage === stage.id,
                            emphasized: isEmphasized || emphasized.has(pipelineStages[i + 1].id),
                            index: i
                        }, void 0, false, {
                            fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                            lineNumber: 169,
                            columnNumber: 17
                        }, this) : null
                    }, stage.id, false, {
                        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                        lineNumber: 157,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: activeStage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    className: "border-t border-white/10 pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StageDetail, {
                        stage: pipelineStages.find((s)=>s.id === activeStage),
                        emphasized: emphasized.has(activeStage),
                        onClose: ()=>setActiveStage(null)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                        lineNumber: 188,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(PipelineVisualizerPanel, "ACVYLKweKX8VKX2AndcwL7JtiiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"]
    ];
});
_c = PipelineVisualizerPanel;
function StageNode({ stage, index, isActive, isPulsing, isEmphasized, onHover, onLeave, onClick, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: -20
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            delay: index * 0.04
        },
        onMouseEnter: onHover,
        onMouseLeave: onLeave,
        onClick: onClick,
        role: "button",
        tabIndex: 0,
        "aria-label": `${stage.label} pipeline stage. ${stage.summary}`,
        onKeyDown: (e)=>{
            if (e.key === "Enter" || e.key === " ") onClick();
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative w-full max-w-md cursor-pointer rounded-xl border px-4 py-3 text-center outline-none transition-all focus-visible:ring-2 focus-visible:ring-brand/60", isActive || isPulsing ? "border-brand/50 bg-brand/15 text-white shadow-[0_0_30px_rgba(108,140,255,0.2)]" : isEmphasized ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-100" : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono text-brand-subtle",
                        children: String(index + 1).padStart(2, "0")
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold",
                        children: stage.label
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    isEmphasized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-cyan-400/20 px-1.5 py-0.5 text-[9px] font-medium text-cyan-300",
                        children: "lesson"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    height: 0,
                    opacity: 0
                },
                animate: {
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0
                },
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-[11px] leading-relaxed text-slate-300",
                    children: stage.summary
                }, void 0, false, {
                    fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            children,
            isPulsing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layoutId: "pipeline-pulse",
                className: "pointer-events-none absolute inset-0 rounded-xl border-2 border-brand/40",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: [
                        0,
                        1,
                        0
                    ]
                },
                transition: {
                    duration: 0.8,
                    repeat: Infinity
                }
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_c1 = StageNode;
function Packet({ active, emphasized, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute left-1/2 top-full z-10 -translate-x-1/2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: active ? {
                y: [
                    0,
                    10
                ],
                opacity: [
                    0.2,
                    1,
                    0.2
                ],
                scale: [
                    0.8,
                    1.2,
                    0.8
                ]
            } : {
                y: [
                    0,
                    6,
                    0
                ],
                opacity: [
                    0.25,
                    0.5,
                    0.25
                ]
            },
            transition: {
                duration: active ? 0.9 : 1.6,
                repeat: Infinity,
                delay: index * 0.06
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-2 rounded-full shadow-[0_0_8px_currentColor]", active ? emphasized ? "bg-cyan-400 text-cyan-400" : "bg-brand text-brand" : "bg-white/30 text-white/30")
        }, void 0, false, {
            fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
            lineNumber: 280,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_c2 = Packet;
function StageDetail({ stage, emphasized, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-white/10 bg-white/5 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "size-4 text-brand-subtle"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-white",
                                children: stage.label
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            emphasized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-cyan-400/20 px-2 py-0.5 text-[10px] text-cyan-300",
                                children: "emphasized by lesson"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "flex items-center gap-1 text-[10px] text-slate-400 hover:text-slate-200",
                        "aria-label": "Close stage detail",
                        children: [
                            "Close ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "size-3 rotate-90"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                                lineNumber: 320,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] leading-relaxed text-slate-300",
                children: stage.detail
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/pipeline-visualizer-panel.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, this);
}
_c3 = StageDetail;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PipelineVisualizerPanel");
__turbopack_context__.k.register(_c1, "StageNode");
__turbopack_context__.k.register(_c2, "Packet");
__turbopack_context__.k.register(_c3, "StageDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/lab/shader-gallery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getShaderExample",
    ()=>getShaderExample,
    "shaderExamples",
    ()=>shaderExamples
]);
const fullscreenVertex = `@vertex
fn main(@builtin(vertex_index) idx: u32) -> @builtin(position) vec4f {
  let x = f32(idx / 2u) * 2.0 - 1.0;
  let y = f32(idx % 2u) * 2.0 - 1.0;
  return vec4f(x, y, 0.0, 1.0);
}
`;
const shaderExamples = [
    {
        id: "gradient",
        name: "Gradient",
        tags: [
            "2D",
            "color",
            "beginner"
        ],
        description: "A smooth linear gradient across the screen using UV coordinates.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / vec2f(800.0, 600.0);
  return vec4f(uv.x, uv.y, 0.5, 1.0);
}
`
    },
    {
        id: "rainbow",
        name: "Rainbow",
        tags: [
            "2D",
            "color",
            "hsv"
        ],
        description: "A hue cycle computed from the screen angle using an HSV-like conversion.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = (pos.xy / vec2f(400.0)) - 1.0;
  let angle = atan2(uv.y, uv.x) / 6.28318530718;
  let hue = fract(angle + 0.5);
  let c = vec3f(1.0) - abs(fract(vec3f(hue, hue, hue) + vec3f(0.0, 0.3333, 0.6666)) * 2.0 - 1.0);
  return vec4f(c, 1.0);
}
`
    },
    {
        id: "glass",
        name: "Glass",
        tags: [
            "2D",
            "refraction",
            "effect"
        ],
        description: "A frosted glass distortion using high-frequency noise offsets.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let n = fract(sin(dot(pos.xy, vec2f(12.9898, 78.233))) * 43758.5453);
  let fog = 0.85 + n * 0.15;
  return vec4f(vec3f(fog), 0.55);
}
`
    },
    {
        id: "fire",
        name: "Fire",
        tags: [
            "2D",
            "noise",
            "effect"
        ],
        description: "A procedural scrolling fire using layered noise and a warm palette.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / vec2f(800.0, 600.0);
  let noise = fract(sin(dot(uv * 20.0, vec2f(12.9898, 78.233))) * 43758.5453);
  let heat = smoothstep(0.2, 1.0, uv.y + noise * 0.15);
  let color = mix(vec3f(1.0, 0.2, 0.0), vec3f(1.0, 0.8, 0.1), heat);
  return vec4f(color * heat, 1.0);
}
`
    },
    {
        id: "water",
        name: "Water",
        tags: [
            "2D",
            "ripple",
            "effect"
        ],
        description: "Sine-based ripples that simulate moving water lines.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / vec2f(800.0, 600.0);
  let wave = sin(uv.x * 40.0 + uv.y * 30.0) * 0.5 + 0.5;
  let color = mix(vec3f(0.0, 0.2, 0.5), vec3f(0.0, 0.6, 0.9), wave);
  return vec4f(color, 1.0);
}
`
    },
    {
        id: "noise",
        name: "Noise",
        tags: [
            "2D",
            "procedural",
            "beginner"
        ],
        description: "Simple value noise based on screen-space hash. Useful for dithering and grain.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let n = fract(sin(dot(pos.xy, vec2f(12.9898, 78.233) * 2.0)) * 43758.5453);
  return vec4f(vec3f(n), 1.0);
}
`
    },
    {
        id: "aurora",
        name: "Aurora",
        tags: [
            "2D",
            "effect",
            "color"
        ],
        description: "Layered sine waves producing an aurora-like glowing band.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / vec2f(800.0, 600.0);
  let band = sin(uv.x * 10.0 + uv.y * 4.0) * 0.5 + 0.5;
  let glow = pow(band, 3.0);
  let color = mix(vec3f(0.05, 0.1, 0.2), vec3f(0.2, 0.9, 0.6), glow);
  return vec4f(color, 1.0);
}
`
    },
    {
        id: "crt",
        name: "CRT",
        tags: [
            "2D",
            "retro",
            "post-process"
        ],
        description: "Scanlines and a slight barrel tint typical of CRT displays.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let scan = step(0.5, fract(pos.y * 0.25));
  let tint = vec3f(0.1, 0.9, 0.2) * scan;
  return vec4f(tint, 1.0);
}
`
    },
    {
        id: "pixelate",
        name: "Pixelation",
        tags: [
            "2D",
            "effect",
            "post-process"
        ],
        description: "A blocky pixelation effect achieved by snapping UVs to a grid.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let pixel = 32.0;
  let snapped = floor(pos.xy / pixel) * pixel;
  let uv = snapped / vec2f(800.0, 600.0);
  return vec4f(uv.x, uv.y, 0.4, 1.0);
}
`
    },
    {
        id: "bloom",
        name: "Bloom",
        tags: [
            "2D",
            "glow",
            "post-process"
        ],
        description: "A bright core with radial falloff demonstrating a glow pass.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = (pos.xy / vec2f(400.0)) - 1.0;
  let glow = 1.0 - length(uv);
  glow = pow(max(glow, 0.0), 3.0);
  return vec4f(vec3f(glow * 1.2, glow * 0.7, glow * 0.3), 1.0);
}
`
    },
    {
        id: "outline",
        name: "Outline",
        tags: [
            "2D",
            "edge",
            "effect"
        ],
        description: "An inverted-corner outline mask using distance fields.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / vec2f(400.0) - 1.0;
  let d = abs(length(uv) - 0.7);
  let edge = smoothstep(0.05, 0.0, d);
  return vec4f(vec3f(edge), 1.0);
}
`
    },
    {
        id: "toon",
        name: "Toon",
        tags: [
            "3D",
            "cel",
            "lighting"
        ],
        description: "A stepped cel-shading ramp useful for toon rendering.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / vec2f(800.0, 600.0);
  let band = floor(uv.x * 6.0) / 6.0;
  return vec4f(vec3f(band), 1.0);
}
`
    },
    {
        id: "hologram",
        name: "Hologram",
        tags: [
            "3D",
            "effect",
            "sci-fi"
        ],
        description: "A flickering cyan hologram with scanline bands and alpha falloff.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let band = sin(pos.y * 0.5 + pos.x * 0.2) * 0.5 + 0.5;
  let alpha = 0.35 + band * 0.35;
  return vec4f(0.2, 0.9, 1.0, alpha);
}
`
    },
    {
        id: "metal",
        name: "Metal",
        tags: [
            "3D",
            "material",
            "lighting"
        ],
        description: "A brushed-metal specular highlight approximation.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / vec2f(800.0, 600.0);
  let shine = pow(max(1.0 - length(uv - 0.5) * 2.0, 0.0), 4.0);
  let base = vec3f(0.45, 0.5, 0.55);
  return vec4f(base + shine, 1.0);
}
`
    },
    {
        id: "pbr",
        name: "PBR",
        tags: [
            "3D",
            "material",
            "lighting"
        ],
        description: "A simplified metallic-roughness sphere with a Fresnel rim.",
        vertex: fullscreenVertex,
        fragment: `@fragment
fn main(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / vec2f(400.0) - 1.0;
  let rim = 1.0 - length(uv);
  let metal = vec3f(0.56, 0.57, 0.58);
  let color = metal + rim * 0.4;
  return vec4f(color, 1.0);
}
`
    }
];
function getShaderExample(id) {
    return shaderExamples.find((s)=>s.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/shader-playground-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShaderPlaygroundPanel",
    ()=>ShaderPlaygroundPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lab$2f$shader$2d$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/lab/shader-gallery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/workspace-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/lesson-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const initialId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lab$2f$shader$2d$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shaderExamples"][0].id;
function ShaderPlaygroundPanel() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialId);
    const [savedIds, setSavedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCode, setShowCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeShader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lab$2f$shader$2d$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShaderExample"])(activeId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lab$2f$shader$2d$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shaderExamples"][0];
    const setAppliedShaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"])({
        "ShaderPlaygroundPanel.useWorkspaceStore[setAppliedShaders]": (s)=>s.applyShaders
    }["ShaderPlaygroundPanel.useWorkspaceStore[setAppliedShaders]"]);
    const addBookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "ShaderPlaygroundPanel.useLessonStore[addBookmark]": (s)=>s.addBookmark
    }["ShaderPlaygroundPanel.useLessonStore[addBookmark]"]);
    const handlePreview = ()=>{
        setAppliedShaders({
            vertexShader: activeShader.vertex,
            fragmentShader: activeShader.fragment
        });
    };
    const handleSave = ()=>{
        if (!savedIds.includes(activeId)) {
            setSavedIds((prev)=>[
                    ...prev,
                    activeId
                ]);
        }
        addBookmark({
            id: `shader-${activeId}-${Date.now()}`,
            title: activeShader.name,
            type: "shader"
        });
    };
    const handleDownload = ()=>{
        const blob = new Blob([
            JSON.stringify(activeShader, null, 2)
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${activeShader.id}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                        children: "Shader Playground"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 font-display text-lg font-semibold text-white",
                        children: "Shader Gallery"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400",
                        children: "Preview, edit, save, and download 15 WGSL shader examples."
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
                        label: "Preview in viewport",
                        onClick: handlePreview
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"],
                        label: "Toggle code",
                        onClick: ()=>setShowCode((s)=>!s),
                        active: showCode
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"],
                        label: "Save",
                        onClick: handleSave
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
                        label: "Download",
                        onClick: handleDownload
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            showCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex-1 overflow-hidden rounded-xl border border-white/10 bg-slate-950/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "h-full overflow-auto p-4 text-[10px] leading-relaxed text-slate-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: activeShader.fragment
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid flex-1 grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3 lg:grid-cols-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lab$2f$shader$2d$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shaderExamples"].map((shader)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShaderCard, {
                        shader: shader,
                        active: activeId === shader.id,
                        saved: savedIds.includes(shader.id),
                        onClick: ()=>setActiveId(shader.id)
                    }, shader.id, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            savedIds.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 border-t border-white/10 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-[10px] uppercase tracking-wider text-brand-subtle",
                        children: "Saved"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: savedIds.map((id)=>{
                            const shader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lab$2f$shader$2d$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShaderExample"])(id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveId(id),
                                className: "flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-300 hover:bg-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "size-3 text-brand"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, this),
                                    shader.name
                                ]
                            }, id, true, {
                                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(ShaderPlaygroundPanel, "uXdBskBi9cpKTf5ZBG+N70XSgHA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"]
    ];
});
_c = ShaderPlaygroundPanel;
function ShaderCard({ shader, active, saved, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: onClick,
        whileHover: {
            scale: 1.02
        },
        whileTap: {
            scale: 0.98
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex flex-col overflow-hidden rounded-xl border text-left outline-none transition-all focus-visible:ring-2 focus-visible:ring-brand/60", active ? "border-brand/50" : "border-white/10 hover:border-white/20"),
        "aria-label": `${shader.name} shader example. ${shader.description}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-20 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShaderPreview, {
                        tone: shaderTone(shader.id)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-2 top-2 rounded-full bg-brand/20 p-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "size-3 text-brand"
                        }, void 0, false, {
                            fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this) : null,
                    saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-2 top-2 rounded-full bg-emerald-500/20 p-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                            className: "size-3 text-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col justify-between p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-white",
                                children: shader.name
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 line-clamp-2 text-[10px] leading-relaxed text-slate-400",
                                children: shader.description
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-wrap items-center gap-1",
                        children: shader.tags.slice(0, 2).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 rounded-md bg-white/5 px-1.5 py-0.5 text-[9px] text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        className: "size-2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    tag
                                ]
                            }, tag, true, {
                                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c1 = ShaderCard;
function ActionButton({ icon: Icon, label, onClick, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[11px] font-medium transition-colors hover:bg-white/10", active ? "bg-brand/20 text-brand" : "bg-white/5 text-slate-300"),
        "aria-label": label,
        title: label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_c2 = ActionButton;
function ShaderPreview({ tone }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 opacity-80 transition-opacity group-hover:opacity-100", tone)
    }, void 0, false, {
        fileName: "[project]/components/lab/panels/shader-playground-panel.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_c3 = ShaderPreview;
function shaderTone(id) {
    switch(id){
        case "gradient":
            return "bg-gradient-to-br from-cyan-400 to-blue-500";
        case "rainbow":
            return "bg-gradient-to-br from-rose-400 via-amber-400 to-emerald-400";
        case "glass":
            return "bg-gradient-to-br from-slate-200/40 to-slate-400/40";
        case "fire":
            return "bg-gradient-to-br from-orange-500 to-red-600";
        case "water":
            return "bg-gradient-to-br from-cyan-500 to-blue-700";
        case "noise":
            return "bg-gradient-to-br from-slate-500 to-slate-700";
        case "aurora":
            return "bg-gradient-to-br from-emerald-400 via-cyan-500 to-purple-500";
        case "crt":
            return "bg-gradient-to-br from-green-400 to-green-600";
        case "pixelate":
            return "bg-gradient-to-br from-indigo-400 to-purple-600";
        case "bloom":
            return "bg-gradient-to-br from-yellow-300 to-orange-400";
        case "outline":
            return "bg-gradient-to-br from-white to-slate-300";
        case "toon":
            return "bg-gradient-to-br from-pink-400 to-rose-500";
        case "hologram":
            return "bg-gradient-to-br from-cyan-300/50 to-purple-400/50";
        case "metal":
            return "bg-gradient-to-br from-slate-300 to-slate-500";
        case "pbr":
            return "bg-gradient-to-br from-amber-300 to-orange-500";
        default:
            return "bg-gradient-to-br from-brand/40 to-brand-accent/40";
    }
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ShaderPlaygroundPanel");
__turbopack_context__.k.register(_c1, "ShaderCard");
__turbopack_context__.k.register(_c2, "ActionButton");
__turbopack_context__.k.register(_c3, "ShaderPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/geometry-lab-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeometryLabPanel",
    ()=>GeometryLabPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cone.js [app-client] (ecmascript) <export default as Cone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cuboid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cuboid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cuboid.js [app-client] (ecmascript) <export default as Cuboid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cylinder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cylinder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cylinder.js [app-client] (ecmascript) <export default as Cylinder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hexagon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hexagon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hexagon.js [app-client] (ecmascript) <export default as Hexagon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rabbit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rabbit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rabbit.js [app-client] (ecmascript) <export default as Rabbit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.js [app-client] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scaling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scaling$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scaling.js [app-client] (ecmascript) <export default as Scaling>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle.js [app-client] (ecmascript) <export default as Triangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/metrics-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const shapes = [
    {
        id: "triangle",
        name: "Triangle",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"],
        vertices: 3,
        triangles: 1,
        indices: 3,
        description: "The simplest polygon: three vertices and one face."
    },
    {
        id: "quad",
        name: "Quad",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"],
        vertices: 4,
        triangles: 2,
        indices: 6,
        description: "A four-vertex plane split into two triangles."
    },
    {
        id: "cube",
        name: "Cube",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cuboid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cuboid$3e$__["Cuboid"],
        vertices: 24,
        triangles: 12,
        indices: 36,
        description: "Six faces, each a quad made of two triangles."
    },
    {
        id: "sphere",
        name: "Sphere",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"],
        vertices: 642,
        triangles: 1280,
        indices: 1920,
        description: "A UV sphere generated with 16 rings and segments."
    },
    {
        id: "plane",
        name: "Plane",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"],
        vertices: 4,
        triangles: 2,
        indices: 6,
        description: "A flat ground plane useful for shadows and grids."
    },
    {
        id: "cylinder",
        name: "Cylinder",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cylinder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cylinder$3e$__["Cylinder"],
        vertices: 132,
        triangles: 248,
        indices: 372,
        description: "A capped cylinder with radial topology."
    },
    {
        id: "cone",
        name: "Cone",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cone$3e$__["Cone"],
        vertices: 66,
        triangles: 124,
        indices: 186,
        description: "A tapered cone with a circular base."
    },
    {
        id: "torus",
        name: "Torus",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hexagon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hexagon$3e$__["Hexagon"],
        vertices: 576,
        triangles: 1152,
        indices: 1728,
        description: "A donut shape formed by revolving a circle."
    },
    {
        id: "monkey",
        name: "Monkey",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"],
        vertices: 786,
        triangles: 1492,
        indices: 2238,
        description: "Blender Suzanne: a recognizable test head."
    },
    {
        id: "bunny",
        name: "Stanford Bunny",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rabbit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rabbit$3e$__["Rabbit"],
        vertices: 34834,
        triangles: 69451,
        indices: 104073,
        description: "Classic scanned model for mesh LOD experiments."
    }
];
const transformPresets = [
    {
        id: "rotate",
        name: "Rotate",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"],
        type: "transform"
    },
    {
        id: "translate",
        name: "Translate",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
        type: "transform"
    },
    {
        id: "scale",
        name: "Scale",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scaling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scaling$3e$__["Scaling"],
        type: "transform"
    },
    {
        id: "subdivide",
        name: "Subdivide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"],
        type: "transform"
    }
];
const viewToggles = [
    {
        id: "wireframe",
        name: "Wireframe",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"]
    },
    {
        id: "normals",
        name: "Normals",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"]
    }
];
function GeometryLabPanel() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("triangle");
    const [activeTransform, setActiveTransform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toggles, setToggles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        wireframe: false,
        normals: false
    });
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        subdivisions: 0
    });
    const activeShape = shapes.find((s)=>s.id === active) ?? shapes[0];
    const updateMetrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"])({
        "GeometryLabPanel.useMetricsStore[updateMetrics]": (s)=>s.updateMetrics
    }["GeometryLabPanel.useMetricsStore[updateMetrics]"]);
    const handleShapeClick = (id)=>{
        const nextShape = shapes.find((s)=>s.id === id) ?? shapes[0];
        setActive(id);
        updateMetrics({
            vertices: nextShape.vertices,
            triangles: nextShape.triangles,
            buffers: 2
        });
    };
    const handleExport = ()=>{
        const payload = JSON.stringify({
            shape: activeShape.id,
            vertices: activeShape.vertices,
            triangles: activeShape.triangles,
            transform: activeTransform,
            viewToggles: toggles,
            values
        }, null, 2);
        const blob = new Blob([
            payload
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${activeShape.id}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                        children: "Geometry Lab"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 font-display text-lg font-semibold text-white",
                        children: "Interactive Geometry"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400",
                        children: "Select a shape, apply transforms, and inspect topology."
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 grid grid-cols-5 gap-2 sm:grid-cols-5",
                children: shapes.map((shape)=>{
                    const Icon = shape.icon;
                    const isActive = active === shape.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleShapeClick(shape.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1.5 rounded-xl border p-2 text-[10px] transition-all focus-visible:ring-2 focus-visible:ring-brand/60", isActive ? "border-brand/50 bg-brand/15 text-white" : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"),
                        "aria-label": `Select ${shape.name}`,
                        title: shape.name,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate max-w-full",
                                children: shape.name
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this)
                        ]
                    }, shape.id, true, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex flex-wrap items-center gap-2",
                children: [
                    transformPresets.map((t)=>{
                        const Icon = t.icon;
                        const isActive = activeTransform === t.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTransform(isActive ? null : t.id),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors", isActive ? "border-brand/40 bg-brand/15 text-brand" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),
                            "aria-label": t.name,
                            title: t.name,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "size-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                t.name
                            ]
                        }, t.id, true, {
                            fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-1 h-4 w-px bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    viewToggles.map((t)=>{
                        const Icon = t.icon;
                        const isActive = toggles[t.id];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setToggles((prev)=>({
                                        ...prev,
                                        [t.id]: !prev[t.id]
                                    })),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors", isActive ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-300" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),
                            "aria-label": t.name,
                            "aria-pressed": isActive,
                            title: t.name,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "size-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this),
                                t.name
                            ]
                        }, t.id, true, {
                            fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleExport,
                        className: "ml-auto flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10",
                        "aria-label": "Export shape JSON",
                        title: "Export shape JSON",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            "Export"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            activeTransform ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 rounded-xl border border-white/10 bg-white/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-[10px] uppercase tracking-wider text-brand-subtle",
                        children: activeTransform
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
                        children: activeTransform === "subdivide" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex flex-col gap-1 text-[10px] text-slate-400",
                            children: [
                                "Levels",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: 0,
                                    max: 3,
                                    step: 1,
                                    value: values.subdivisions,
                                    onChange: (e)=>setValues((v)=>({
                                                ...v,
                                                subdivisions: Number(e.target.value)
                                            })),
                                    className: "accent-brand"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                            lineNumber: 204,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: activeTransform === "scale" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-1 text-[10px] text-slate-400",
                                children: [
                                    "Scale",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 0.5,
                                        max: 2,
                                        step: 0.1,
                                        value: values.scale,
                                        onChange: (e)=>setValues((v)=>({
                                                    ...v,
                                                    scale: Number(e.target.value)
                                                })),
                                        className: "accent-brand"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                        lineNumber: 221,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                lineNumber: 219,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex flex-col gap-1 text-[10px] text-slate-400",
                                        children: [
                                            "X",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: -1,
                                                max: 1,
                                                step: 0.1,
                                                value: values.x,
                                                onChange: (e)=>setValues((v)=>({
                                                            ...v,
                                                            x: Number(e.target.value)
                                                        })),
                                                className: "accent-brand"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                                lineNumber: 235,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                        lineNumber: 233,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex flex-col gap-1 text-[10px] text-slate-400",
                                        children: [
                                            "Y",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: -1,
                                                max: 1,
                                                step: 0.1,
                                                value: values.y,
                                                onChange: (e)=>setValues((v)=>({
                                                            ...v,
                                                            y: Number(e.target.value)
                                                        })),
                                                className: "accent-brand"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                                lineNumber: 247,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                        lineNumber: 245,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex flex-col gap-1 text-[10px] text-slate-400",
                                        children: [
                                            "Z",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: -1,
                                                max: 1,
                                                step: 0.1,
                                                value: values.z,
                                                onChange: (e)=>setValues((v)=>({
                                                            ...v,
                                                            z: Number(e.target.value)
                                                        })),
                                                className: "accent-brand"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                                lineNumber: 259,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                        lineNumber: 257,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "flex flex-1 flex-col rounded-xl border border-white/10 bg-slate-950/50 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-white",
                                children: activeShape.name
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-slate-500",
                                children: activeShape.id
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-[11px] leading-relaxed text-slate-400",
                        children: activeShape.description
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 rounded-lg border border-dashed border-white/10 bg-white/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-3 top-3 flex flex-wrap gap-1.5",
                            children: [
                                toggles.wireframe ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded bg-cyan-400/20 px-1.5 py-0.5 text-[9px] text-cyan-300",
                                    children: "wireframe"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this) : null,
                                toggles.normals ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded bg-cyan-400/20 px-1.5 py-0.5 text-[9px] text-cyan-300",
                                    children: "normals"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: activeShape.vertices.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Vertices"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: activeShape.triangles.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Triangles"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: activeShape.indices.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Indices"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, active, true, {
                fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/geometry-lab-panel.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(GeometryLabPanel, "AS0JPIpc4VxdWURwVz/Ypn1OqWs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"]
    ];
});
_c = GeometryLabPanel;
var _c;
__turbopack_context__.k.register(_c, "GeometryLabPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/matrix-lab-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatrixLabPanel",
    ()=>MatrixLabPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move3D$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-3d.js [app-client] (ecmascript) <export default as Move3D>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale3D$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale-3d.js [app-client] (ecmascript) <export default as Scale3D>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const matrices = [
    {
        id: "model",
        name: "Model",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"],
        description: "Transforms local vertices into world space.",
        rows: 4,
        cols: 4
    },
    {
        id: "world",
        name: "World",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move3D$3e$__["Move3D"],
        description: "Combines translation, rotation, and scale for an object.",
        rows: 4,
        cols: 4
    },
    {
        id: "view",
        name: "View",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
        description: "Transforms world coordinates into camera space.",
        rows: 4,
        cols: 4
    },
    {
        id: "projection",
        name: "Projection",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"],
        description: "Maps view-space into clip-space.",
        rows: 4,
        cols: 4
    },
    {
        id: "perspective",
        name: "Perspective",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"],
        description: "Frustum projection with field of view.",
        rows: 4,
        cols: 4
    },
    {
        id: "orthographic",
        name: "Orthographic",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale3D$3e$__["Scale3D"],
        description: "Parallel projection without perspective.",
        rows: 4,
        cols: 4
    }
];
function MatrixLabPanel() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("world");
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "translate",
        "rotate",
        "scale"
    ]);
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tx: 0,
        ty: 0,
        tz: 0,
        rx: 0,
        ry: 0,
        rz: 0,
        sx: 1,
        sy: 1,
        sz: 1,
        fov: 45,
        near: 0.1,
        far: 100,
        aspect: 16 / 9,
        left: -1,
        right: 1,
        bottom: -1,
        top: 1
    });
    const [emphasize, setEmphasize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeMatrix = matrices.find((m)=>m.id === active) ?? matrices[0];
    const matrix = computeMatrix(active, params);
    const handleCopy = ()=>{
        void navigator.clipboard.writeText(formatMatrix(matrix));
    };
    const handleDownload = ()=>{
        const payload = JSON.stringify({
            matrix: active,
            order,
            params,
            values: matrix
        }, null, 2);
        const blob = new Blob([
            payload
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${active}-matrix.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const moveOrder = (index, direction)=>{
        const next = [
            ...order
        ];
        const target = index + direction;
        if (target < 0 || target >= next.length) return;
        [next[index], next[target]] = [
            next[target],
            next[index]
        ];
        setOrder(next);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                        children: "Matrix Lab"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 font-display text-lg font-semibold text-white",
                        children: "Matrix Visualizer"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400",
                        children: "Inspect transformation order and live 4×4 matrices."
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 grid grid-cols-3 gap-2 sm:grid-cols-6",
                children: matrices.map((m)=>{
                    const Icon = m.icon;
                    const isActive = active === m.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive(m.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1 rounded-xl border p-2 text-[10px] transition-all focus-visible:ring-2 focus-visible:ring-brand/60", isActive ? "border-brand/50 bg-brand/15 text-white" : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"),
                        "aria-label": `Select ${m.name} matrix`,
                        title: m.name,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate max-w-full",
                                children: m.name
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        ]
                    }, m.id, true, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 rounded-xl border border-white/10 bg-white/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-wider text-brand-subtle",
                                children: "Transformation order"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-slate-500",
                                children: [
                                    "Order matters: ",
                                    order.join(" → ")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: order.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 rounded-lg border border-white/10 bg-slate-950/50 px-2 py-1 text-[11px] text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>moveOrder(i, -1),
                                                disabled: i === 0,
                                                className: "text-slate-500 hover:text-slate-200 disabled:opacity-30",
                                                "aria-label": `Move ${step} left`,
                                                children: "←"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "capitalize",
                                                children: step
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>moveOrder(i, 1),
                                                disabled: i === order.length - 1,
                                                className: "text-slate-500 hover:text-slate-200 disabled:opacity-30",
                                                "aria-label": `Move ${step} right`,
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    i < order.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-600",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                        lineNumber: 117,
                                        columnNumber: 39
                                    }, this) : null
                                ]
                            }, `${step}-${i}`, true, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            active === "world" || active === "model" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 grid grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamGroup, {
                        label: "Translate",
                        values: [
                            "tx",
                            "ty",
                            "tz"
                        ],
                        params: params,
                        min: -2,
                        max: 2,
                        step: 0.1,
                        onChange: (k, v)=>setParams((p)=>({
                                    ...p,
                                    [k]: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamGroup, {
                        label: "Rotate (deg)",
                        values: [
                            "rx",
                            "ry",
                            "rz"
                        ],
                        params: params,
                        min: -180,
                        max: 180,
                        step: 1,
                        onChange: (k, v)=>setParams((p)=>({
                                    ...p,
                                    [k]: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamGroup, {
                        label: "Scale",
                        values: [
                            "sx",
                            "sy",
                            "sz"
                        ],
                        params: params,
                        min: 0.1,
                        max: 3,
                        step: 0.1,
                        onChange: (k, v)=>setParams((p)=>({
                                    ...p,
                                    [k]: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this) : active === "view" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 grid grid-cols-1 gap-3 sm:grid-cols-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamGroup, {
                    label: "Camera position",
                    values: [
                        "tx",
                        "ty",
                        "tz"
                    ],
                    params: params,
                    min: -10,
                    max: 10,
                    step: 0.5,
                    onChange: (k, v)=>setParams((p)=>({
                                ...p,
                                [k]: v
                            }))
                }, void 0, false, {
                    fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this) : active === "perspective" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 grid grid-cols-1 gap-3 sm:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamKnob, {
                        label: "FOV",
                        value: params.fov,
                        min: 10,
                        max: 120,
                        step: 1,
                        onChange: (v)=>setParams((p)=>({
                                    ...p,
                                    fov: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamKnob, {
                        label: "Aspect",
                        value: params.aspect,
                        min: 0.5,
                        max: 3,
                        step: 0.1,
                        onChange: (v)=>setParams((p)=>({
                                    ...p,
                                    aspect: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamKnob, {
                        label: "Near",
                        value: params.near,
                        min: 0.01,
                        max: 10,
                        step: 0.01,
                        onChange: (v)=>setParams((p)=>({
                                    ...p,
                                    near: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamKnob, {
                        label: "Far",
                        value: params.far,
                        min: 1,
                        max: 200,
                        step: 1,
                        onChange: (v)=>setParams((p)=>({
                                    ...p,
                                    far: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this) : active === "orthographic" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 grid grid-cols-1 gap-3 sm:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamKnob, {
                        label: "Left",
                        value: params.left,
                        min: -5,
                        max: 5,
                        step: 0.1,
                        onChange: (v)=>setParams((p)=>({
                                    ...p,
                                    left: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamKnob, {
                        label: "Right",
                        value: params.right,
                        min: -5,
                        max: 5,
                        step: 0.1,
                        onChange: (v)=>setParams((p)=>({
                                    ...p,
                                    right: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamKnob, {
                        label: "Bottom",
                        value: params.bottom,
                        min: -5,
                        max: 5,
                        step: 0.1,
                        onChange: (v)=>setParams((p)=>({
                                    ...p,
                                    bottom: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParamKnob, {
                        label: "Top",
                        value: params.top,
                        min: -5,
                        max: 5,
                        step: 0.1,
                        onChange: (v)=>setParams((p)=>({
                                    ...p,
                                    top: v
                                }))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "flex flex-1 flex-col rounded-xl border border-white/10 bg-slate-950/50 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold text-white",
                                        children: [
                                            activeMatrix.name,
                                            " Matrix"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-md text-[11px] text-slate-400",
                                        children: activeMatrix.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCopy,
                                        className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200",
                                        "aria-label": "Copy matrix",
                                        title: "Copy matrix",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDownload,
                                        className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200",
                                        "aria-label": "Download matrix JSON",
                                        title: "Download matrix JSON",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto rounded-lg border border-white/10 bg-[#05070f] p-3 font-mono text-[11px] leading-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-1",
                            children: matrix.map((value, i)=>{
                                const row = Math.floor(i / 4);
                                const col = i % 4;
                                const isIdentity = row === col ? value === 1 : value === 0;
                                const isEmphasized = emphasize === `${row},${col}`;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onMouseEnter: ()=>setEmphasize(`${row},${col}`),
                                    onMouseLeave: ()=>setEmphasize(null),
                                    onClick: ()=>setEmphasize(`${row},${col}`),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded px-2 py-1 text-center transition-colors focus-visible:ring-1 focus-visible:ring-brand/60", isEmphasized ? "bg-brand/25 text-white" : isIdentity ? "text-slate-600" : "text-brand-subtle hover:bg-white/5"),
                                    "aria-label": `Row ${row + 1} column ${col + 1}`,
                                    children: formatNumber(value)
                                }, i, false, {
                                    fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: "4×4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Dimensions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: activeMatrix.id
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Kind"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, active, true, {
                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(MatrixLabPanel, "OYRTWITnC9VX4G3UqABsPwvXM4U=");
_c = MatrixLabPanel;
function ParamGroup({ label, values, params, min, max, step, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-white/10 bg-white/5 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 text-[10px] uppercase tracking-wider text-brand-subtle",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: values.map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-[10px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-4",
                                children: String(k).slice(-1).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: min,
                                max: max,
                                step: step,
                                value: params[k],
                                onChange: (e)=>onChange(k, Number(e.target.value)),
                                className: "flex-1 accent-brand"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-8 text-right font-mono text-white",
                                children: formatNumber(Number(params[k]))
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        ]
                    }, k, true, {
                        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
_c1 = ParamGroup;
function ParamKnob({ label, value, min, max, step, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-white/10 bg-white/5 p-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col gap-1 text-[10px] text-slate-400",
            children: [
                label,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: min,
                    max: max,
                    step: step,
                    value: value,
                    onChange: (e)=>onChange(Number(e.target.value)),
                    className: "accent-brand"
                }, void 0, false, {
                    fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-white",
                    children: formatNumber(value)
                }, void 0, false, {
                    fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
            lineNumber: 279,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/lab/panels/matrix-lab-panel.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
_c2 = ParamKnob;
function computeMatrix(id, params) {
    switch(id){
        case "model":
        case "world":
            {
                const order = [
                    "translate",
                    "rotate",
                    "scale"
                ];
                let m = identity();
                for (const step of order){
                    if (step === "translate") m = multiply(m, translation(params.tx, params.ty, params.tz));
                    if (step === "rotate") m = multiply(m, rotation(params.rx, params.ry, params.rz));
                    if (step === "scale") m = multiply(m, scaling(params.sx, params.sy, params.sz));
                }
                return m;
            }
        case "view":
            return translation(-params.tx, -params.ty, -params.tz);
        case "projection":
            return perspective(params.fov, params.aspect, params.near, params.far);
        case "perspective":
            return perspective(params.fov, params.aspect, params.near, params.far);
        case "orthographic":
            return orthographic(params.left, params.right, params.bottom, params.top, params.near, params.far);
        default:
            return identity();
    }
}
function identity() {
    return [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ];
}
function translation(x, y, z) {
    return [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        x,
        y,
        z,
        1
    ];
}
function scaling(x, y, z) {
    return [
        x,
        0,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        0,
        z,
        0,
        0,
        0,
        0,
        1
    ];
}
function rotation(rx, ry, rz) {
    const a = rx * Math.PI / 180;
    const b = ry * Math.PI / 180;
    const c = rz * Math.PI / 180;
    const cx = Math.cos(a), sx = Math.sin(a);
    const cy = Math.cos(b), sy = Math.sin(b);
    const cz = Math.cos(c), sz = Math.sin(c);
    return [
        cy * cz,
        -cy * sz,
        sy,
        0,
        cx * sz + sx * sy * cz,
        cx * cz - sx * sy * sz,
        -sx * cy,
        0,
        sx * sz - cx * sy * cz,
        sx * cz + cx * sy * sz,
        cx * cy,
        0,
        0,
        0,
        0,
        1
    ];
}
function perspective(fov, aspect, near, far) {
    const f = 1 / Math.tan(fov * Math.PI / 360);
    const nf = 1 / (near - far);
    return [
        f / aspect,
        0,
        0,
        0,
        0,
        f,
        0,
        0,
        0,
        0,
        (far + near) * nf,
        -1,
        0,
        0,
        2 * far * near * nf,
        0
    ];
}
function orthographic(left, right, bottom, top, near, far) {
    const lr = 1 / (left - right);
    const bt = 1 / (bottom - top);
    const nf = 1 / (near - far);
    return [
        -2 * lr,
        0,
        0,
        0,
        0,
        -2 * bt,
        0,
        0,
        0,
        0,
        2 * nf,
        0,
        (left + right) * lr,
        (top + bottom) * bt,
        (near + far) * nf,
        1
    ];
}
function multiply(a, b) {
    const out = new Array(16).fill(0);
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            for(let k = 0; k < 4; k++){
                out[i * 4 + j] += a[i * 4 + k] * b[k * 4 + j];
            }
        }
    }
    return out;
}
function formatNumber(n) {
    const rounded = Math.round(n * 1000) / 1000;
    return rounded.toFixed(rounded % 1 === 0 ? 0 : 2);
}
function formatMatrix(m) {
    const lines = [];
    for(let i = 0; i < 4; i++){
        lines.push(m.slice(i * 4, i * 4 + 4).map(formatNumber).join(" "));
    }
    return lines.join("\n");
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MatrixLabPanel");
__turbopack_context__.k.register(_c1, "ParamGroup");
__turbopack_context__.k.register(_c2, "ParamKnob");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/lighting-lab-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightingLabPanel",
    ()=>LightingLabPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const initialLights = [
    {
        id: "ambient",
        type: "ambient",
        name: "Ambient",
        intensity: 0.2,
        color: "#ffffff",
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        direction: {
            x: 0,
            y: 0,
            z: 0
        },
        enabled: true
    },
    {
        id: "directional",
        type: "directional",
        name: "Directional",
        intensity: 0.8,
        color: "#ffffff",
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        direction: {
            x: 0.5,
            y: -1,
            z: 0.5
        },
        enabled: true
    },
    {
        id: "point",
        type: "point",
        name: "Point",
        intensity: 1.0,
        color: "#ffaa44",
        position: {
            x: 2,
            y: 2,
            z: 2
        },
        direction: {
            x: 0,
            y: 0,
            z: 0
        },
        enabled: false
    }
];
function LightingLabPanel() {
    _s();
    const [lights, setLights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLights);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("directional");
    const [showNormals, setShowNormals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lightingOnly, setLightingOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeLight = lights.find((l)=>l.id === activeId) ?? lights[0];
    const updateLight = (id, patch)=>{
        setLights((prev)=>prev.map((l)=>l.id === id ? {
                    ...l,
                    ...patch
                } : l));
    };
    const updateVector = (id, key, axis, value)=>{
        setLights((prev)=>prev.map((l)=>l.id === id ? {
                    ...l,
                    [key]: {
                        ...l[key],
                        [axis]: value
                    }
                } : l));
    };
    const handleExport = ()=>{
        const payload = JSON.stringify({
            lights,
            showNormals,
            lightingOnly
        }, null, 2);
        const blob = new Blob([
            payload
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `lighting-scene-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const handleCopyWGSL = ()=>{
        const wgsl = generateLightingWGSL(lights);
        void navigator.clipboard.writeText(wgsl);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                        children: "Lighting Lab"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 font-display text-lg font-semibold text-white",
                        children: "Lighting Module"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400",
                        children: "Configure ambient, directional, and point lights; preview normals and lighting-only state."
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 grid grid-cols-3 gap-2",
                children: lights.map((light)=>{
                    const Icon = light.type === "ambient" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"] : light.type === "directional" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"];
                    const isActive = activeId === light.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveId(light.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1 rounded-xl border p-2 text-[10px] transition-all focus-visible:ring-2 focus-visible:ring-brand/60", isActive ? "border-brand/50 bg-brand/15 text-white" : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"),
                        "aria-label": `Select ${light.name} light`,
                        title: light.name,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate max-w-full",
                                children: light.name
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            !light.enabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-slate-700 px-1 py-0.5 text-[8px] text-slate-400",
                                children: "off"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 97,
                                columnNumber: 33
                            }, this) : null
                        ]
                    }, light.id, true, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>updateLight(activeLight.id, {
                                enabled: !activeLight.enabled
                            }),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors", activeLight.enabled ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-300" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),
                        "aria-pressed": activeLight.enabled,
                        children: [
                            activeLight.enabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 114,
                                columnNumber: 34
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 114,
                                columnNumber: 65
                            }, this),
                            activeLight.enabled ? "Enabled" : "Disabled"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowNormals((v)=>!v),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors", showNormals ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-300" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),
                        "aria-pressed": showNormals,
                        children: [
                            showNormals ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 127,
                                columnNumber: 26
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 127,
                                columnNumber: 57
                            }, this),
                            "Normals"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setLightingOnly((v)=>!v),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors", lightingOnly ? "border-brand/40 bg-brand/15 text-brand" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),
                        "aria-pressed": lightingOnly,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            "Lighting only"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCopyWGSL,
                        className: "ml-auto flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10",
                        "aria-label": "Copy lighting WGSL",
                        title: "Copy lighting WGSL",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            "Copy WGSL"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleExport,
                        className: "flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10",
                        "aria-label": "Export lighting JSON",
                        title: "Export lighting JSON",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            "Export"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "mb-3 rounded-xl border border-white/10 bg-white/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-[10px] uppercase tracking-wider text-brand-subtle",
                        children: [
                            activeLight.name,
                            " settings"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-1 text-[10px] text-slate-400",
                                children: [
                                    "Intensity",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 0,
                                        max: 2,
                                        step: 0.05,
                                        value: activeLight.intensity,
                                        onChange: (e)=>updateLight(activeLight.id, {
                                                intensity: Number(e.target.value)
                                            }),
                                        className: "accent-brand"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-white",
                                        children: activeLight.intensity.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-1 text-[10px] text-slate-400",
                                children: [
                                    "Color",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: activeLight.color,
                                                onChange: (e)=>updateLight(activeLight.id, {
                                                        color: e.target.value
                                                    }),
                                                className: "size-7 rounded border border-white/10 bg-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-white",
                                                children: activeLight.color
                                            }, void 0, false, {
                                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    activeLight.type !== "ambient" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3",
                        children: activeLight.type === "point" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorSlider, {
                                    label: "Position X",
                                    value: activeLight.position.x,
                                    min: -5,
                                    max: 5,
                                    step: 0.1,
                                    onChange: (v)=>updateVector(activeLight.id, "position", "x", v)
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                    lineNumber: 202,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorSlider, {
                                    label: "Position Y",
                                    value: activeLight.position.y,
                                    min: -5,
                                    max: 5,
                                    step: 0.1,
                                    onChange: (v)=>updateVector(activeLight.id, "position", "y", v)
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorSlider, {
                                    label: "Position Z",
                                    value: activeLight.position.z,
                                    min: -5,
                                    max: 5,
                                    step: 0.1,
                                    onChange: (v)=>updateVector(activeLight.id, "position", "z", v)
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorSlider, {
                                    label: "Direction X",
                                    value: activeLight.direction.x,
                                    min: -1,
                                    max: 1,
                                    step: 0.05,
                                    onChange: (v)=>updateVector(activeLight.id, "direction", "x", v)
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorSlider, {
                                    label: "Direction Y",
                                    value: activeLight.direction.y,
                                    min: -1,
                                    max: 1,
                                    step: 0.05,
                                    onChange: (v)=>updateVector(activeLight.id, "direction", "y", v)
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                    lineNumber: 209,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorSlider, {
                                    label: "Direction Z",
                                    value: activeLight.direction.z,
                                    min: -1,
                                    max: 1,
                                    step: 0.05,
                                    onChange: (v)=>updateVector(activeLight.id, "direction", "z", v)
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this) : null
                ]
            }, activeId, true, {
                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "flex flex-1 flex-col rounded-xl border border-white/10 bg-slate-950/50 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-semibold text-white",
                                    children: "Scene preview"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-md text-[11px] text-slate-400",
                                    children: [
                                        "Active lights: ",
                                        lights.filter((l)=>l.enabled).length,
                                        " / ",
                                        lights.length,
                                        " · Normals ",
                                        showNormals ? "on" : "off",
                                        " · Lighting only ",
                                        lightingOnly ? "on" : "off"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 rounded-lg border border-dashed border-white/10 bg-white/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-3 top-3 flex flex-wrap gap-1.5",
                            children: [
                                showNormals ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded bg-cyan-400/20 px-1.5 py-0.5 text-[9px] text-cyan-300",
                                    children: "normals"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                    lineNumber: 233,
                                    columnNumber: 28
                                }, this) : null,
                                lightingOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded bg-brand/20 px-1.5 py-0.5 text-[9px] text-brand-subtle",
                                    children: "lighting only"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                    lineNumber: 234,
                                    columnNumber: 29
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: lights.filter((l)=>l.enabled).length
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Active lights"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: activeLight.type
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Selected type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: activeLight.intensity.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Intensity"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, `${showNormals}-${lightingOnly}`, true, {
                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(LightingLabPanel, "0ePewnNtCKSc8+B8+EqvB1CpfJU=");
_c = LightingLabPanel;
function VectorSlider({ label, value, min, max, step, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex flex-col gap-1 text-[10px] text-slate-400",
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: min,
                max: max,
                step: step,
                value: value,
                onChange: (e)=>onChange(Number(e.target.value)),
                className: "accent-brand"
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-white",
                children: value.toFixed(2)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/lighting-lab-panel.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, this);
}
_c1 = VectorSlider;
function generateLightingWGSL(lights) {
    const active = lights.filter((l)=>l.enabled);
    let code = "// Auto-generated lighting configuration\n";
    code += "struct SceneLights {\n";
    code += `  count: u32,\n`;
    code += "}\n\n";
    active.forEach((l, i)=>{
        code += `// ${l.name} (${l.type})\n`;
        code += `const ${l.id}Intensity = ${l.intensity.toFixed(2)};\n`;
        code += `const ${l.id}Color = vec3f(${hexToRGB(l.color).join(", ")});\n`;
        if (l.type === "directional") {
            code += `const ${l.id}Direction = normalize(vec3f(${l.direction.x.toFixed(2)}, ${l.direction.y.toFixed(2)}, ${l.direction.z.toFixed(2)}));\n`;
        } else if (l.type === "point") {
            code += `const ${l.id}Position = vec3f(${l.position.x.toFixed(2)}, ${l.position.y.toFixed(2)}, ${l.position.z.toFixed(2)});\n`;
        }
        code += "\n";
    });
    return code;
}
function hexToRGB(hex) {
    const sanitized = hex.replace("#", "");
    const r = parseInt(sanitized.substring(0, 2), 16) / 255;
    const g = parseInt(sanitized.substring(2, 4), 16) / 255;
    const b = parseInt(sanitized.substring(4, 6), 16) / 255;
    return [
        Math.round(r * 100) / 100,
        Math.round(g * 100) / 100,
        Math.round(b * 100) / 100
    ];
}
var _c, _c1;
__turbopack_context__.k.register(_c, "LightingLabPanel");
__turbopack_context__.k.register(_c1, "VectorSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/textures-lab-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TexturesLabPanel",
    ()=>TexturesLabPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const sampleCards = [
    {
        id: "color",
        name: "Color texture",
        description: "Standard RGBA8 UNORM texture sampled by the fragment shader.",
        valid: true,
        width: 512,
        height: 512,
        format: "rgba8unorm",
        usage: [
            "TEXTURE_BINDING",
            "COPY_DST"
        ]
    },
    {
        id: "normal",
        name: "Normal map",
        description: "Stores per-pixel normal vectors in tangent space.",
        valid: true,
        width: 512,
        height: 512,
        format: "rgba8unorm",
        usage: [
            "TEXTURE_BINDING"
        ]
    },
    {
        id: "depth",
        name: "Depth texture",
        description: "Depth24plus format used for shadow maps and z-testing.",
        valid: true,
        width: 1024,
        height: 1024,
        format: "depth24plus",
        usage: [
            "RENDER_ATTACHMENT",
            "TEXTURE_BINDING"
        ]
    },
    {
        id: "mismatched",
        name: "Mismatched sampler",
        description: "Sampler expects repeating wrap mode but texture dimensions are not power-of-two.",
        error: "Non-power-of-two textures cannot use 'repeat' addressMode.",
        valid: false,
        width: 500,
        height: 500,
        format: "rgba8unorm",
        usage: [
            "TEXTURE_BINDING"
        ]
    }
];
const samplerPresets = [
    {
        id: "nearest",
        label: "Nearest",
        magFilter: "nearest",
        minFilter: "nearest",
        addressModeU: "clamp-to-edge",
        addressModeV: "clamp-to-edge"
    },
    {
        id: "linear",
        label: "Linear",
        magFilter: "linear",
        minFilter: "linear",
        addressModeU: "clamp-to-edge",
        addressModeV: "clamp-to-edge"
    },
    {
        id: "repeat",
        label: "Repeat",
        magFilter: "linear",
        minFilter: "linear",
        addressModeU: "repeat",
        addressModeV: "repeat"
    },
    {
        id: "mirrored",
        label: "Mirrored",
        magFilter: "linear",
        minFilter: "linear",
        addressModeU: "mirror-repeat",
        addressModeV: "mirror-repeat"
    }
];
function TexturesLabPanel() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("color");
    const [sampler, setSampler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(samplerPresets[1]);
    const [uvScale, setUvScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [uvOffset, setUvOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        u: 0,
        v: 0
    });
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeCard = sampleCards.find((c)=>c.id === active) ?? sampleCards[0];
    const handleCopyWGSL = ()=>{
        const code = generateSamplerWGSL(sampler, uvScale, uvOffset);
        void navigator.clipboard.writeText(code);
    };
    const handleExport = ()=>{
        const payload = JSON.stringify({
            activeTexture: activeCard.id,
            sampler,
            uv: {
                scale: uvScale,
                offset: uvOffset
            }
        }, null, 2);
        const blob = new Blob([
            payload
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `texture-config-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                        children: "Textures Lab"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 font-display text-lg font-semibold text-white",
                        children: "Texture & UV Module"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400",
                        children: "Preview sampler settings, UV transforms, texture cards, and common errors."
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4",
                children: sampleCards.map((card)=>{
                    const isActive = active === card.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive(card.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1 rounded-xl border p-2 text-left text-[10px] transition-all focus-visible:ring-2 focus-visible:ring-brand/60", isActive ? "border-brand/50 bg-brand/15 text-white" : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"),
                        "aria-label": `Select ${card.name}`,
                        title: card.name,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 font-medium text-white",
                                children: [
                                    card.valid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "size-3 text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 125,
                                        columnNumber: 31
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "size-3 text-rose-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 125,
                                        columnNumber: 86
                                    }, this),
                                    card.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "line-clamp-2 text-slate-500",
                                children: card.format
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this)
                        ]
                    }, card.id, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex flex-wrap items-center gap-2",
                children: [
                    samplerPresets.map((preset)=>{
                        const isActive = sampler.id === preset.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSampler(preset),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors", isActive ? "border-brand/40 bg-brand/15 text-brand" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),
                            "aria-pressed": isActive,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                    className: "size-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                preset.label
                            ]
                        }, preset.id, true, {
                            fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowGrid((v)=>!v),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors", showGrid ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-300" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),
                        "aria-pressed": showGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            "UV grid"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCopyWGSL,
                        className: "ml-auto flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10",
                        "aria-label": "Copy sampler WGSL",
                        title: "Copy sampler WGSL",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            "Copy WGSL"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleExport,
                        className: "flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10",
                        "aria-label": "Export texture JSON",
                        title: "Export texture JSON",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            "Export"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "mb-3 rounded-xl border border-white/10 bg-white/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-wider text-brand-subtle",
                                children: activeCard.name
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-slate-500",
                                children: [
                                    activeCard.width,
                                    "×",
                                    activeCard.height
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-[11px] text-slate-400",
                        children: activeCard.description
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    activeCard.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2 rounded-lg border border-rose-500/20 bg-rose-500/10 p-2 text-[11px] text-rose-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "mt-0.5 size-3.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: activeCard.error
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: activeCard.usage.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] text-emerald-300",
                                children: u
                            }, u, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                ]
            }, active, true, {
                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 grid grid-cols-1 gap-3 sm:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-col gap-1 text-[10px] text-slate-400",
                        children: [
                            "UV scale",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 0.1,
                                max: 4,
                                step: 0.1,
                                value: uvScale,
                                onChange: (e)=>setUvScale(Number(e.target.value)),
                                className: "accent-brand"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-white",
                                children: uvScale.toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-col gap-1 text-[10px] text-slate-400",
                        children: [
                            "U offset",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: -1,
                                max: 1,
                                step: 0.05,
                                value: uvOffset.u,
                                onChange: (e)=>setUvOffset((v)=>({
                                            ...v,
                                            u: Number(e.target.value)
                                        })),
                                className: "accent-brand"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-white",
                                children: uvOffset.u.toFixed(2)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-col gap-1 text-[10px] text-slate-400",
                        children: [
                            "V offset",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: -1,
                                max: 1,
                                step: 0.05,
                                value: uvOffset.v,
                                onChange: (e)=>setUvOffset((v)=>({
                                            ...v,
                                            v: Number(e.target.value)
                                        })),
                                className: "accent-brand"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-white",
                                children: uvOffset.v.toFixed(2)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "flex flex-1 flex-col rounded-xl border border-white/10 bg-slate-950/50 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold text-white",
                                        children: "UV preview"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400",
                                        children: [
                                            "Sampler: ",
                                            sampler.label,
                                            " · UV: ",
                                            uvScale.toFixed(1),
                                            "× + (",
                                            uvOffset.u.toFixed(2),
                                            ", ",
                                            uvOffset.v.toFixed(2),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                className: "size-4 text-slate-500"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 rounded-lg border border-dashed border-white/10 bg-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-3 top-3 flex flex-wrap gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded bg-brand/20 px-1.5 py-0.5 text-[9px] text-brand-subtle",
                                        children: activeCard.format
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    showGrid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded bg-cyan-400/20 px-1.5 py-0.5 text-[9px] text-cyan-300",
                                        children: "grid"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 270,
                                        columnNumber: 25
                                    }, this) : null,
                                    !activeCard.valid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded bg-rose-500/20 px-1.5 py-0.5 text-[9px] text-rose-300",
                                        children: "error"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 271,
                                        columnNumber: 34
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-lg border border-white/10",
                                    style: {
                                        width: 128,
                                        height: 128,
                                        background: `repeating-conic-gradient(#1e293b 0% 25%, #334155 0% 50%) 50% / ${16 / uvScale}px ${16 / uvScale}px`,
                                        backgroundPosition: `${uvOffset.u * 32}px ${uvOffset.v * 32}px`
                                    },
                                    children: showGrid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 opacity-50",
                                        style: {
                                            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                                            backgroundSize: `${32 * uvScale}px ${32 * uvScale}px`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this) : null
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: sampler.magFilter
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Mag filter"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: sampler.addressModeU
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Wrap U"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white/5 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-sm text-white",
                                        children: activeCard.usage.length
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Usages"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, `${active}-${sampler.id}-${uvScale}-${uvOffset.u}-${uvOffset.v}-${showGrid}`, true, {
                fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/textures-lab-panel.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(TexturesLabPanel, "Gpih+hOWSTEfq3sGxf4BYzI6ZqU=");
_c = TexturesLabPanel;
function generateSamplerWGSL(sampler, uvScale, uvOffset) {
    return `// Auto-generated sampler configuration
var mySampler: sampler = sampler(
  magFilter: ${sampler.magFilter},
  minFilter: ${sampler.minFilter},
  addressModeU: ${sampler.addressModeU},
  addressModeV: ${sampler.addressModeV}
);

fn sampleScaled(uv: vec2f) -> vec2f {
  return uv * ${uvScale.toFixed(1)} + vec2f(${uvOffset.u.toFixed(2)}, ${uvOffset.v.toFixed(2)});
}
`;
}
var _c;
__turbopack_context__.k.register(_c, "TexturesLabPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/examples-lab-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExamplesLabPanel",
    ()=>ExamplesLabPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/ui-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/lesson-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/lessons/catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lab$2f$shader$2d$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/lab/shader-gallery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ExamplesLabPanel() {
    _s();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { setActivePanel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const { setActiveLesson } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])();
    const items = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonCatalog"].filter((item)=>item.type === "lesson" && item.id).map((item)=>({
                id: `lesson-${item.id}`,
                category: "lessons",
                title: item.title,
                description: item.description ?? "Open this lesson.",
                action: ()=>{
                    setActiveLesson(item.id);
                    setActivePanel("lessons");
                },
                meta: item.demo?.type === "webgpu" ? item.demo.shape : "lesson"
            })),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lab$2f$shader$2d$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shaderExamples"].map((shader)=>({
                id: `shader-${shader.id}`,
                category: "shaders",
                title: shader.name,
                description: shader.description,
                action: ()=>setActivePanel("shaders"),
                meta: shader.tags.slice(0, 2).join(", ")
            })),
        {
            id: "geo-triangle",
            category: "geometry",
            title: "Triangle",
            description: "Start with the simplest polygon and inspect its topology.",
            action: ()=>setActivePanel("geometry"),
            meta: "3 vertices"
        },
        {
            id: "geo-cube",
            category: "geometry",
            title: "Cube",
            description: "A classic six-face mesh for testing transforms and normals.",
            action: ()=>setActivePanel("geometry"),
            meta: "24 vertices"
        },
        {
            id: "light-directional",
            category: "lighting",
            title: "Directional light",
            description: "Classic sun-like light with direction and intensity controls.",
            action: ()=>setActivePanel("lighting"),
            meta: "directional"
        },
        {
            id: "tex-repeat",
            category: "textures",
            title: "Repeat sampler",
            description: "See how UV wrapping and sampler address modes interact.",
            action: ()=>setActivePanel("textures"),
            meta: "addressMode"
        },
        {
            id: "pipe-vertex",
            category: "pipeline",
            title: "Vertex shader stage",
            description: "Open the pipeline visualizer focused on vertex processing.",
            action: ()=>setActivePanel("pipeline"),
            meta: "stage 6"
        },
        {
            id: "docs-wgsl",
            category: "docs",
            title: "WGSL Reference",
            description: "Built-in reference for WebGPU Shading Language syntax.",
            action: ()=>setActivePanel("documentation"),
            meta: "reference"
        }
    ];
    const categories = [
        {
            id: "lessons",
            label: "Lessons",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
        },
        {
            id: "shaders",
            label: "Shaders",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
        },
        {
            id: "geometry",
            label: "Geometry",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"]
        },
        {
            id: "lighting",
            label: "Lighting",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
        },
        {
            id: "textures",
            label: "Textures",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"]
        },
        {
            id: "pipeline",
            label: "Pipeline",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
        },
        {
            id: "docs",
            label: "Docs",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"]
        }
    ];
    const visibleItems = category ? items.filter((i)=>i.category === category) : [];
    const handleExport = ()=>{
        const payload = JSON.stringify(items.map((i)=>({
                id: i.id,
                category: i.category,
                title: i.title
            })), null, 2);
        const blob = new Blob([
            payload
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `examples-index-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                        children: "Examples Lab"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 font-display text-lg font-semibold text-white",
                        children: "Examples & Quick Links"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400",
                        children: "Jump between lessons, shaders, geometry, lighting, textures, and docs."
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: category ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: 20
                    },
                    className: "flex flex-1 flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCategory(null),
                                    className: "flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-300 transition-colors hover:bg-white/10",
                                    "aria-label": "Back to categories",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        "Back"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold text-white",
                                    children: category
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleExport,
                                    className: "ml-auto flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10",
                                    "aria-label": "Export examples index",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        "Export"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid flex-1 grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2",
                            children: visibleItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: item.action,
                                    className: "flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex w-full items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold text-white",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded bg-brand/15 px-1.5 py-0.5 text-[9px] text-brand-subtle",
                                                    children: item.meta
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] leading-relaxed text-slate-400",
                                            children: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-auto flex items-center gap-1 text-[10px] text-brand-subtle",
                                            children: [
                                                "Open ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "size-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                            lineNumber: 189,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                    lineNumber: 179,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    ]
                }, category, true, {
                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                    lineNumber: 150,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "grid flex-1 grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3 lg:grid-cols-4",
                    children: categories.map((cat)=>{
                        const Icon = cat.icon;
                        const count = items.filter((i)=>i.category === cat.id).length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCategory(cat.id),
                            className: "flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand/60",
                            "aria-label": `Open ${cat.label} examples`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "size-5 text-brand-subtle"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                    lineNumber: 214,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-white",
                                    children: cat.label
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                    lineNumber: 215,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-slate-500",
                                    children: [
                                        count,
                                        " example",
                                        count === 1 ? "" : "s"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                                    lineNumber: 216,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, cat.id, true, {
                            fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                            lineNumber: 208,
                            columnNumber: 17
                        }, this);
                    })
                }, "grid", false, {
                    fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/examples-lab-panel.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(ExamplesLabPanel, "GMUA8CKIh6e/w4brH6lazPnsbbY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"]
    ];
});
_c = ExamplesLabPanel;
var _c;
__turbopack_context__.k.register(_c, "ExamplesLabPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/performance-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PerformancePanel",
    ()=>PerformancePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$memory$2d$stick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MemoryStick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/memory-stick.js [app-client] (ecmascript) <export default as MemoryStick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle.js [app-client] (ecmascript) <export default as Triangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/metrics-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const budgetLines = [
    {
        label: "60 FPS",
        value: 16.7
    },
    {
        label: "30 FPS",
        value: 33.3
    }
];
const timelineEvents = [
    {
        label: "Acquire swap chain texture",
        duration: 0.3,
        color: "bg-cyan-400"
    },
    {
        label: "Update uniforms",
        duration: 0.5,
        color: "bg-brand"
    },
    {
        label: "Encode render pass",
        duration: 1.1,
        color: "bg-violet-400"
    },
    {
        label: "Vertex + raster",
        duration: 0.9,
        color: "bg-emerald-400"
    },
    {
        label: "Fragment shading",
        duration: 1.4,
        color: "bg-fuchsia-400"
    },
    {
        label: "Present frame",
        duration: 0.4,
        color: "bg-sky-400"
    }
];
function PerformancePanel() {
    _s();
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"])({
        "PerformancePanel.useMetricsStore[metrics]": (s)=>s.metrics
    }["PerformancePanel.useMetricsStore[metrics]"]);
    const updateMetrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"])({
        "PerformancePanel.useMetricsStore[updateMetrics]": (s)=>s.updateMetrics
    }["PerformancePanel.useMetricsStore[updateMetrics]"]);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(40).fill(16));
    const [recording, setRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedEvent, setSelectedEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(timelineEvents[2]);
    const [sampleWindow, setSampleWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("40");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerformancePanel.useEffect": ()=>{
            let raf = 0;
            let last = performance.now();
            const tick = {
                "PerformancePanel.useEffect.tick": (now)=>{
                    const delta = now - last;
                    last = now;
                    if (recording) {
                        const nextValue = Math.min(Math.max(delta, 8), 48);
                        const currentMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"].getState().metrics;
                        setData({
                            "PerformancePanel.useEffect.tick": (prev)=>{
                                const windowSize = sampleWindow === "40" ? 40 : 80;
                                return [
                                    ...prev.slice(-(windowSize - 1)),
                                    nextValue
                                ];
                            }
                        }["PerformancePanel.useEffect.tick"]);
                        updateMetrics({
                            fps: Math.round(1000 / nextValue),
                            frameTime: nextValue,
                            cpuTime: Number((nextValue * 0.32).toFixed(2)),
                            gpuTime: Number((nextValue * 0.46).toFixed(2)),
                            drawCalls: Math.max(currentMetrics.drawCalls, 1),
                            memoryMB: Math.max(currentMetrics.memoryMB, 18.4),
                            buffers: Math.max(currentMetrics.buffers, 3),
                            textures: Math.max(currentMetrics.textures, 2)
                        });
                    }
                    raf = requestAnimationFrame(tick);
                }
            }["PerformancePanel.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            return ({
                "PerformancePanel.useEffect": ()=>cancelAnimationFrame(raf)
            })["PerformancePanel.useEffect"];
        }
    }["PerformancePanel.useEffect"], [
        recording,
        sampleWindow,
        updateMetrics
    ]);
    const avg = data.reduce((a, b)=>a + b, 0) / data.length;
    const fps = avg > 0 ? Math.round(1000 / avg) : 0;
    const worst = Math.max(...data);
    const best = Math.min(...data);
    const totalTimeline = timelineEvents.reduce((sum, event)=>sum + event.duration, 0);
    const health = avg <= 16.7 ? {
        label: "Within 60 FPS budget",
        tone: "text-emerald-300",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/25"
    } : avg <= 33.3 ? {
        label: "Playable, optimize soon",
        tone: "text-amber-300",
        bg: "bg-amber-400/10",
        border: "border-amber-400/25"
    } : {
        label: "Frame budget exceeded",
        tone: "text-rose-300",
        bg: "bg-rose-400/10",
        border: "border-rose-400/25"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-wrap items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                                children: "Performance"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-1 font-display text-lg font-semibold text-white",
                                children: "Live Analytics"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400",
                                children: "Frame budget, CPU/GPU timing, draw pressure, memory, resources, and event timeline."
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setRecording((value)=>!value),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors", recording ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),
                                "aria-pressed": recording,
                                children: [
                                    recording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 107,
                                        columnNumber: 26
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 107,
                                        columnNumber: 59
                                    }, this),
                                    recording ? "Sampling" : "Paused"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSampleWindow((value)=>value === "40" ? "80" : "40"),
                                className: "rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10",
                                children: [
                                    sampleWindow,
                                    " frames"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-4 rounded-xl border p-3", health.bg, health.border),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-semibold", health.tone),
                                    children: health.label
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-[11px] text-slate-400",
                                    children: [
                                        "Average ",
                                        avg.toFixed(1),
                                        " ms · best ",
                                        best.toFixed(1),
                                        " ms · worst ",
                                        worst.toFixed(1),
                                        " ms"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lab/panels/performance-panel.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-display text-lg font-semibold text-white",
                                    children: fps
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] uppercase tracking-wider text-slate-500",
                                    children: "estimated FPS"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lab/panels/performance-panel.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/lab/panels/performance-panel.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 sm:grid-cols-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
                        label: "FPS",
                        value: fps.toString()
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"],
                        label: "Frame Time",
                        value: `${avg.toFixed(1)} ms`
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
                        label: "CPU Time",
                        value: `${metrics.cpuTime.toFixed(1)} ms`
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                        label: "GPU Time",
                        value: `${metrics.gpuTime.toFixed(1)} ms`
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                        label: "Draw Calls",
                        value: metrics.drawCalls.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$memory$2d$stick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MemoryStick$3e$__["MemoryStick"],
                        label: "Memory",
                        value: `${metrics.memoryMB.toFixed(1)} MB`
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"],
                        label: "Vertices",
                        value: metrics.vertices.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"],
                        label: "Triangles",
                        value: metrics.triangles.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
                        label: "Buffers",
                        value: metrics.buffers.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                        label: "Textures",
                        value: metrics.textures.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid min-h-0 flex-1 gap-4 xl:grid-cols-[1.35fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-white/10 bg-slate-950/50 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] uppercase tracking-wider text-slate-500",
                                        children: "Frame time chart"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-[10px] text-slate-500",
                                        children: budgetLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    line.label,
                                                    ": ",
                                                    line.value,
                                                    "ms"
                                                ]
                                            }, line.label, true, {
                                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex h-[220px] items-end gap-px overflow-hidden rounded-lg border border-white/5 bg-black/20 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-x-2 top-[35%] border-t border-emerald-400/30"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-x-2 top-[70%] border-t border-amber-400/30"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    data.map((value, i)=>{
                                        const isOverBudget = value > 16.7;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                height: 0
                                            },
                                            animate: {
                                                height: `${value / 48 * 100}%`
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 rounded-[2px] opacity-85", isOverBudget ? "bg-gradient-to-t from-amber-500 to-rose-400" : "bg-gradient-to-t from-brand to-cyan-300"),
                                            title: `${value.toFixed(1)} ms`
                                        }, `${i}-${sampleWindow}`, false, {
                                            fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-0 flex-col rounded-xl border border-white/10 bg-slate-950/50 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] uppercase tracking-wider text-slate-500",
                                        children: "GPU frame timeline"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-[11px] text-slate-400",
                                        children: "Simulated pass breakdown for the current lesson render."
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex h-8 overflow-hidden rounded-lg border border-white/10 bg-black/20",
                                children: timelineEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedEvent(event),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full transition-opacity hover:opacity-80", event.color),
                                        style: {
                                            width: `${event.duration / totalTimeline * 100}%`
                                        },
                                        title: `${event.label}: ${event.duration.toFixed(1)} ms`,
                                        "aria-label": `Inspect ${event.label}`
                                    }, event.label, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 rounded-lg border border-white/10 bg-white/5 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-white",
                                        children: selectedEvent.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-[11px] text-slate-400",
                                        children: [
                                            selectedEvent.duration.toFixed(1),
                                            " ms · ",
                                            Math.round(selectedEvent.duration / totalTimeline * 100),
                                            "% of measured GPU pass."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2 text-[11px] text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineRow, {
                                        label: "CPU submit",
                                        value: metrics.cpuTime,
                                        max: 8
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineRow, {
                                        label: "GPU execution",
                                        value: metrics.gpuTime,
                                        max: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineRow, {
                                        label: "Memory pressure",
                                        value: metrics.memoryMB,
                                        max: 128,
                                        suffix: " MB"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/performance-panel.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(PerformancePanel, "gNtdpxxsM5vFJuiswmmXWsggTU4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$metrics$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetricsStore"]
    ];
});
_c = PerformancePanel;
function MetricCard({ icon: Icon, label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-white/20 hover:bg-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "size-3.5"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-display text-base font-semibold text-white",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/performance-panel.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_c1 = MetricCard;
function TimelineRow({ label, value, max, suffix = " ms" }) {
    const width = Math.min(value / max * 100, 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-white",
                        children: [
                            value.toFixed(1),
                            suffix
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/performance-panel.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 overflow-hidden rounded-full bg-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: `${width}%`
                    },
                    className: "h-full rounded-full bg-gradient-to-r from-brand to-cyan-300"
                }, void 0, false, {
                    fileName: "[project]/components/lab/panels/performance-panel.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/performance-panel.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/performance-panel.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_c2 = TimelineRow;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PerformancePanel");
__turbopack_context__.k.register(_c1, "MetricCard");
__turbopack_context__.k.register(_c2, "TimelineRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/panels/documentation-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentationPanel",
    ()=>DocumentationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript) <export default as ScrollText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const docs = [
    {
        id: "wgsl",
        title: "WGSL Reference",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        desc: "Types, builtins, and syntax for WebGPU Shading Language.",
        content: [
            {
                heading: "Basic scalar types",
                body: "WGSL provides f32, i32, u32, bool, and f16 if enabled. Vectors use vec2f, vec3f, vec4f.",
                code: "let color: vec4f = vec4f(1.0, 0.0, 0.0, 1.0);"
            },
            {
                heading: "Vertex entry point",
                body: "A vertex shader returns @builtin(position) and may output user-defined locations.",
                code: "@vertex\nfn main(@builtin(vertex_index) idx: u32) -> @builtin(position) vec4f {\n  return vec4f(0.0, 0.0, 0.0, 1.0);\n}"
            },
            {
                heading: "Fragment entry point",
                body: "A fragment shader writes color to @location(0).",
                code: "@fragment\nfn main() -> @location(0) vec4f {\n  return vec4f(1.0, 0.0, 0.0, 1.0);\n}"
            }
        ]
    },
    {
        id: "webgpu-api",
        title: "WebGPU API",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"],
        desc: "Device, queue, command encoders, and render passes.",
        content: [
            {
                heading: "Request adapter and device",
                body: "Start by requesting a GPU adapter, then a device and preferred canvas format.",
                code: "const adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\nconst format = navigator.gpu.getPreferredCanvasFormat();"
            },
            {
                heading: "Command encoder",
                body: "Record all GPU work into a command encoder and submit the finished buffer.",
                code: "const encoder = device.createCommandEncoder();\nconst pass = encoder.beginRenderPass(descriptor);\npass.end();\ndevice.queue.submit([encoder.finish()]);"
            }
        ]
    },
    {
        id: "examples",
        title: "Examples",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        desc: "Minimal, runnable snippets covering common techniques.",
        content: [
            {
                heading: "Clear screen",
                body: "The smallest render pass clears the canvas to a solid color.",
                code: "const pass = encoder.beginRenderPass({\n  colorAttachments: [{\n    view,\n    clearValue: { r: 0, g: 0, b: 0, a: 1 },\n    loadOp: 'clear',\n    storeOp: 'store'\n  }]\n});\npass.end();"
            },
            {
                heading: "Set pipeline",
                body: "Use setPipeline and draw to execute a render pipeline.",
                code: "pass.setPipeline(pipeline);\npass.setVertexBuffer(0, vertexBuffer);\npass.draw(3, 1, 0, 0);"
            }
        ]
    },
    {
        id: "best-practices",
        title: "Best Practices",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        desc: "Memory barriers, buffer uploads, and pipeline layouts.",
        content: [
            {
                heading: "Batch uploads",
                body: "Upload all uniform data for a frame in one buffer write when possible."
            },
            {
                heading: "Reuse pipelines",
                body: "Creating and switching pipelines is expensive. Group draws by pipeline and bind group."
            }
        ]
    },
    {
        id: "performance",
        title: "Performance Tips",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        desc: "Minimize CPU/GPU overhead and reduce descriptor churn.",
        content: [
            {
                heading: "Reduce draw calls",
                body: "Use instancing or geometry merging to reduce the number of draw calls per frame."
            },
            {
                heading: "Avoid CPU/GPU sync",
                body: "Reading back data from the GPU causes stalls. Use async readback when necessary."
            }
        ]
    },
    {
        id: "errors",
        title: "Common Errors",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"],
        desc: "Compilation messages and runtime validation failures.",
        content: [
            {
                heading: "Bind group mismatch",
                body: "Shader bindings must match the bind group layout exactly."
            },
            {
                heading: "Pipeline layout mismatch",
                body: "If you provide a pipeline layout, it must be compatible with the shader."
            },
            {
                heading: "Invalid color attachment",
                body: "Color attachment formats must match the render pass descriptor."
            }
        ]
    }
];
function DocumentationPanel() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeDoc = docs.find((d)=>d.id === activeId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-[0.3em] text-brand-subtle",
                        children: "Documentation"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 font-display text-lg font-semibold text-white",
                        children: "Integrated Docs"
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400",
                        children: "Reference materials built into the lab."
                    }, void 0, false, {
                        fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: activeDoc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: 20
                    },
                    className: "flex flex-col flex-1 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveId(null),
                            className: "mb-3 flex items-center gap-1 self-start rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-300 transition-colors hover:bg-white/10",
                            "aria-label": "Back to docs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "size-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                "Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DocDetail, {
                            doc: activeDoc
                        }, void 0, false, {
                            fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    ]
                }, activeDoc.id, true, {
                    fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "grid flex-1 grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2",
                    children: docs.map((doc)=>{
                        const Icon = doc.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveId(doc.id),
                            className: "flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand/60",
                            "aria-label": `Open ${doc.title}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-brand-subtle",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                            lineNumber: 189,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-white",
                                            children: doc.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                            lineNumber: 190,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                    lineNumber: 188,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] leading-relaxed text-slate-400",
                                    children: doc.desc
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                    lineNumber: 192,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, doc.id, true, {
                            fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                            lineNumber: 182,
                            columnNumber: 17
                        }, this);
                    })
                }, "grid", false, {
                    fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                    lineNumber: 172,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/documentation-panel.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(DocumentationPanel, "rNhBSDzMaHbVUX4Eik4A5qiLMlg=");
_c = DocumentationPanel;
function DocDetail({ doc }) {
    const handleCopy = (text)=>{
        void navigator.clipboard.writeText(text);
    };
    const handleDownload = ()=>{
        const blob = new Blob([
            JSON.stringify(doc, null, 2)
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${doc.id}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-1 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(doc.icon, {
                                className: "size-4 text-brand-subtle"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-white",
                                children: doc.title
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCopy(JSON.stringify(doc, null, 2)),
                                className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200",
                                "aria-label": "Copy doc JSON",
                                title: "Copy doc JSON",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "size-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownload,
                                className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200",
                                "aria-label": "Download doc JSON",
                                title: "Download doc JSON",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "size-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-3 overflow-y-auto pr-1",
                children: doc.content.map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-white/10 bg-white/5 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-1 text-xs font-semibold text-white",
                                children: section.heading
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 text-[11px] leading-relaxed text-slate-400",
                                children: section.body
                            }, void 0, false, {
                                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this),
                            section.code ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-lg bg-slate-950/50 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "overflow-auto text-[10px] leading-relaxed text-slate-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: section.code
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleCopy(section.code),
                                        className: "absolute right-2 top-2 rounded-md bg-white/10 p-1 text-slate-400 hover:bg-white/15 hover:text-slate-200",
                                        "aria-label": "Copy snippet",
                                        title: "Copy snippet",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "size-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, i, true, {
                        fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/lab/panels/documentation-panel.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/panels/documentation-panel.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_c1 = DocDetail;
var _c, _c1;
__turbopack_context__.k.register(_c, "DocumentationPanel");
__turbopack_context__.k.register(_c1, "DocDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/status-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBar",
    ()=>StatusBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/ui-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/lesson-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/lessons/catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function StatusBar() {
    _s();
    const { showGpuMetrics, toggleGpuMetrics, activePanel, setActivePanel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const activeLessonId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "StatusBar.useLessonStore[activeLessonId]": (s)=>s.activeLessonId
    }["StatusBar.useLessonStore[activeLessonId]"]);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "StatusBar.useLessonStore[progress]": (s)=>s.progress
    }["StatusBar.useLessonStore[progress]"]);
    const lessons = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonCatalog"].filter((item)=>item.type === "lesson");
    const lessonIndex = lessons.findIndex((item)=>item.id === activeLessonId);
    const lessonNumber = lessonIndex >= 0 ? lessonIndex + 1 : 1;
    const totalLessons = lessons.length;
    const completedCount = lessons.filter((item)=>item.id && progress[item.id]?.status === "completed").length;
    const progressPercent = totalLessons > 0 ? Math.round(completedCount / totalLessons * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "flex h-8 items-center justify-between border-t border-white/10 bg-[#0B0C15]/90 px-3 text-[11px] text-slate-400 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 text-emerald-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/status-bar.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            "WebGPU Ready"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/status-bar.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden items-center gap-1.5 sm:inline-flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/status-bar.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            "Device active"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/status-bar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden items-center gap-1.5 md:inline-flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/status-bar.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            "GPU Queue"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/status-bar.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/status-bar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleGpuMetrics,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1.5 transition-colors hover:text-slate-200", showGpuMetrics ? "text-brand" : "text-slate-500"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/status-bar.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            "Metrics ",
                            showGpuMetrics ? "on" : "off"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/status-bar.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActivePanel(activePanel === "documentation" ? "editor" : "documentation"),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hidden items-center gap-1.5 transition-colors hover:text-slate-200 sm:inline-flex", activePanel === "documentation" ? "text-brand" : "text-slate-500"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/status-bar.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            "Docs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/status-bar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden items-center gap-1.5 sm:inline-flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/status-bar.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            "Lesson ",
                            lessonNumber,
                            " of ",
                            totalLessons
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/status-bar.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden items-center gap-1.5 sm:inline-flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/status-bar.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            progressPercent,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/status-bar.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "rounded border border-white/10 bg-white/5 px-1 py-0.5 text-[10px]",
                            children: "⌘K"
                        }, void 0, false, {
                            fileName: "[project]/components/lab/status-bar.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lab/status-bar.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/status-bar.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lab/status-bar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(StatusBar, "m2lu3iXlKhC+suVZG5xX8E8JmS0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"]
    ];
});
_c = StatusBar;
var _c;
__turbopack_context__.k.register(_c, "StatusBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lab/command-palette.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandPalette",
    ()=>CommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/ui-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/lesson-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function CommandPalette() {
    _s();
    const { commandPaletteOpen, closeCommandPalette, setActivePanel, setSidebarMode, sidebarOpen, toggleSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const { setActiveLesson, getEffectiveCatalog } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const previousFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openSidebarMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommandPalette.useCallback[openSidebarMode]": (mode)=>{
            setSidebarMode(mode);
            if (!sidebarOpen) toggleSidebar();
        }
    }["CommandPalette.useCallback[openSidebarMode]"], [
        setSidebarMode,
        sidebarOpen,
        toggleSidebar
    ]);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CommandPalette.useMemo[items]": ()=>{
            const catalog = getEffectiveCatalog();
            const navItems = [
                {
                    id: "open-lessons",
                    label: "Open Lessons",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("lessons")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-editor",
                    label: "Open Editor",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("editor")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-pipeline",
                    label: "Open Pipeline Visualizer",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("pipeline")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-shaders",
                    label: "Open Shader Playground",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("shaders")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-geometry",
                    label: "Open Geometry Lab",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("geometry")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-lighting",
                    label: "Open Lighting",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("lighting")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-textures",
                    label: "Open Textures",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("textures")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-performance",
                    label: "Open Performance Panel",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("performance")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-playground",
                    label: "Open Shader Playground",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("playground")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-examples",
                    label: "Open Examples",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("examples")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-docs",
                    label: "Open Documentation",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>setActivePanel("documentation")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-settings",
                    label: "Open Settings",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>openSidebarMode("settings")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-shortcuts",
                    label: "Open Keyboard Shortcuts",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>openSidebarMode("shortcuts")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "open-profile",
                    label: "Open Profile and Progress",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>openSidebarMode("profile")
                    }["CommandPalette.useMemo[items]"]
                },
                {
                    id: "go-home",
                    label: "Go to Landing Page",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                    action: {
                        "CommandPalette.useMemo[items]": ()=>router.push("/")
                    }["CommandPalette.useMemo[items]"]
                }
            ];
            const lessonItems = catalog.filter({
                "CommandPalette.useMemo[items].lessonItems": (item)=>item.type === "lesson" && item.id
            }["CommandPalette.useMemo[items].lessonItems"]).map({
                "CommandPalette.useMemo[items].lessonItems": (item)=>({
                        id: `lesson-${item.id}`,
                        label: `Lesson: ${item.title}`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                        action: ({
                            "CommandPalette.useMemo[items].lessonItems": ()=>{
                                setActiveLesson(item.id);
                                setActivePanel("lessons");
                            }
                        })["CommandPalette.useMemo[items].lessonItems"]
                    })
            }["CommandPalette.useMemo[items].lessonItems"]);
            return [
                ...navItems,
                ...lessonItems
            ];
        }
    }["CommandPalette.useMemo[items]"], [
        getEffectiveCatalog,
        setActiveLesson,
        setActivePanel,
        router,
        openSidebarMode
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CommandPalette.useMemo[filtered]": ()=>items.filter({
                "CommandPalette.useMemo[filtered]": (item)=>item.label.toLowerCase().includes(query.toLowerCase())
            }["CommandPalette.useMemo[filtered]"])
    }["CommandPalette.useMemo[filtered]"], [
        items,
        query
    ]);
    const runItem = (index)=>{
        const safeIndex = Math.min(index, Math.max(filtered.length - 1, 0));
        const item = filtered[safeIndex];
        if (!item) return;
        item.action();
        closeCommandPalette();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            if (commandPaletteOpen) {
                previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                return;
            }
            previousFocusRef.current?.focus();
            previousFocusRef.current = null;
        }
    }["CommandPalette.useEffect"], [
        commandPaletteOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            const handleKey = {
                "CommandPalette.useEffect.handleKey": (e)=>{
                    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                        e.preventDefault();
                        commandPaletteOpen ? closeCommandPalette() : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"].getState().openCommandPalette();
                    }
                    if (e.key === "Escape" && commandPaletteOpen) {
                        closeCommandPalette();
                    }
                }
            }["CommandPalette.useEffect.handleKey"];
            window.addEventListener("keydown", handleKey);
            return ({
                "CommandPalette.useEffect": ()=>window.removeEventListener("keydown", handleKey)
            })["CommandPalette.useEffect"];
        }
    }["CommandPalette.useEffect"], [
        commandPaletteOpen,
        closeCommandPalette
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: commandPaletteOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-[200] flex items-start justify-center bg-black/60 p-6 pt-[15vh] backdrop-blur-sm",
            onClick: closeCommandPalette,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -20,
                    scale: 0.96
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: -20,
                    scale: 0.96
                },
                onClick: (e)=>e.stopPropagation(),
                className: "w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/95 shadow-2xl backdrop-blur-xl",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Command palette",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 border-b border-white/10 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "size-4 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/components/lab/command-palette.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                autoFocus: true,
                                type: "text",
                                value: query,
                                onChange: (e)=>{
                                    setQuery(e.target.value);
                                    setSelectedIndex(0);
                                },
                                onKeyDown: (e)=>{
                                    if (e.key === "ArrowDown") {
                                        e.preventDefault();
                                        setSelectedIndex((index)=>Math.min(index + 1, filtered.length - 1));
                                    }
                                    if (e.key === "ArrowUp") {
                                        e.preventDefault();
                                        setSelectedIndex((index)=>Math.max(index - 1, 0));
                                    }
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        runItem(selectedIndex);
                                    }
                                },
                                placeholder: "Search commands, lessons, or panels…",
                                className: "flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none",
                                role: "combobox",
                                "aria-expanded": "true",
                                "aria-controls": "command-palette-results",
                                "aria-activedescendant": filtered[selectedIndex]?.id
                            }, void 0, false, {
                                fileName: "[project]/components/lab/command-palette.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closeCommandPalette,
                                className: "rounded p-1 text-slate-400 hover:bg-white/5",
                                "aria-label": "Close command palette",
                                title: "Close command palette",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/lab/command-palette.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/lab/command-palette.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/command-palette.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "command-palette-results",
                        className: "max-h-[50vh] overflow-y-auto p-2",
                        role: "listbox",
                        children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-8 text-center text-xs text-slate-500",
                            children: "No commands found."
                        }, void 0, false, {
                            fileName: "[project]/components/lab/command-palette.tsx",
                            lineNumber: 167,
                            columnNumber: 17
                        }, this) : filtered.map((item, index)=>{
                            const Icon = item.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    item.action();
                                    closeCommandPalette();
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-white/10", index === selectedIndex ? "bg-white/10" : ""),
                                id: item.id,
                                role: "option",
                                "aria-selected": index === selectedIndex,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "size-4 text-brand-subtle"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/command-palette.tsx",
                                        lineNumber: 186,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-200",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/command-palette.tsx",
                                        lineNumber: 187,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/components/lab/command-palette.tsx",
                                lineNumber: 172,
                                columnNumber: 21
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/lab/command-palette.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-t border-white/10 px-4 py-2 text-[10px] text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "rounded border border-white/10 bg-white/5 px-1",
                                        children: "↵"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/command-palette.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this),
                                    " to run"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/command-palette.tsx",
                                lineNumber: 195,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "rounded border border-white/10 bg-white/5 px-1",
                                        children: "Esc"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lab/command-palette.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this),
                                    " to close"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lab/command-palette.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lab/command-palette.tsx",
                        lineNumber: 194,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lab/command-palette.tsx",
                lineNumber: 114,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/lab/command-palette.tsx",
            lineNumber: 107,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/components/lab/command-palette.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(CommandPalette, "ZglrBSClCH48nYVsQECG+Mk4nKw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CommandPalette;
var _c;
__turbopack_context__.k.register(_c, "CommandPalette");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lab/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LabPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$navigation$2f$top$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/navigation/top-nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$sidebar$2f$lesson$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/sidebar/lesson-sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$lesson$2d$content$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/lesson-content-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/live-preview-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$code$2d$editor$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/code-editor-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$pipeline$2d$visualizer$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/pipeline-visualizer-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$shader$2d$playground$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/shader-playground-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$geometry$2d$lab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/geometry-lab-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$matrix$2d$lab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/matrix-lab-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$lighting$2d$lab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/lighting-lab-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$textures$2d$lab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/textures-lab-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$examples$2d$lab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/examples-lab-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$performance$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/performance-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$documentation$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/panels/documentation-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/status-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$command$2d$palette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lab/command-palette.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/lesson-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/workspace-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/ui-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/lessons/catalog.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function LabPage() {
    _s();
    const activePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "LabPage.useUiStore[activePanel]": (s)=>s.activePanel
    }["LabPage.useUiStore[activePanel]"]);
    const activeLessonId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"])({
        "LabPage.useLessonStore[activeLessonId]": (s)=>s.activeLessonId
    }["LabPage.useLessonStore[activeLessonId]"]);
    const lesson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lessons$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLessonById"])(activeLessonId);
    const shapeId = lesson?.demo?.type === "webgpu" ? lesson.demo.shape : "hello-triangle";
    const shapeIdTyped = shapeId;
    const { codeVertex, codeFragment, appliedShaders } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"])();
    const shaderOverrides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LabPage.useMemo[shaderOverrides]": ()=>({
                vertexShader: appliedShaders.vertexShader || codeVertex || undefined,
                fragmentShader: appliedShaders.fragmentShader || codeFragment || undefined
            })
    }["LabPage.useMemo[shaderOverrides]"], [
        appliedShaders,
        codeVertex,
        codeFragment
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[100dvh] w-screen flex-col overflow-hidden bg-[#05070f]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$navigation$2f$top$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabTopNav"], {}, void 0, false, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$sidebar$2f$lesson$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LessonSidebar"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "relative flex min-h-0 flex-1 flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-h-0 flex-1 overflow-auto p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveWorkspace, {
                                    activePanel: activePanel,
                                    shapeId: shapeIdTyped,
                                    shaderOverrides: shaderOverrides
                                }, void 0, false, {
                                    fileName: "[project]/app/lab/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/lab/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBar"], {}, void 0, false, {
                                    fileName: "[project]/app/lab/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/lab/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$command$2d$palette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandPalette"], {}, void 0, false, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/lab/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(LabPage, "tNZHUoB60db3/C6FlCPF8FrdugM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$lesson$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLessonStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$workspace$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"]
    ];
});
_c = LabPage;
function ActiveWorkspace({ activePanel, shapeId, shaderOverrides }) {
    switch(activePanel){
        case "editor":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$code$2d$editor$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeEditorPanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this);
        case "pipeline":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$pipeline$2d$visualizer$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PipelineVisualizerPanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this);
        case "shaders":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$shader$2d$playground$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderPlaygroundPanel"], {}, void 0, false, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 98,
                columnNumber: 14
            }, this);
        case "geometry":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$geometry$2d$lab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeometryLabPanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this);
        case "matrices":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$matrix$2d$lab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixLabPanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this);
        case "lighting":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$lighting$2d$lab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightingLabPanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this);
        case "textures":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$textures$2d$lab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TexturesLabPanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this);
        case "examples":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$examples$2d$lab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExamplesLabPanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this);
        case "performance":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$performance$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformancePanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this);
        case "playground":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$shader$2d$playground$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderPlaygroundPanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, this);
        case "documentation":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$documentation$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentationPanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this);
        case "lessons":
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-[1fr_1.2fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$lesson$2d$content$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LessonContentPanel"], {}, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lab$2f$panels$2f$live$2d$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivePreviewPanel"], {
                        shapeId: shapeId,
                        shaderOverrides: shaderOverrides
                    }, void 0, false, {
                        fileName: "[project]/app/lab/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/lab/page.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this);
    }
}
_c1 = ActiveWorkspace;
var _c, _c1;
__turbopack_context__.k.register(_c, "LabPage");
__turbopack_context__.k.register(_c1, "ActiveWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7da99a34._.js.map