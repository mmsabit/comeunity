"use client";

import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type="button"
      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all shadow-subtle hover:shadow active:scale-95 cursor-pointer"
      aria-label="Go back to previous page"
    >
      <MdArrowBack className="text-lg" />
      <span>Go Back</span>
    </button>
  );
}

