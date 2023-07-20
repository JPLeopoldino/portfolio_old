"use client";

import { CopyIcon } from "@/assets";

export default function NameSection() {
  const clearSelection = () => {
    if (window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
    // else if (document.getSelection()) {
    //   document.getSelection()?.empty();
    // }
  };

  const onCopyName = () => {
    navigator.clipboard.writeText("João Pedro Leopoldino");
    // alert('Copied to Clipboard!');
    setTimeout(clearSelection, 500);
  };

  return (
    <div className="rounded-xl pl-6 pr-3 flex flex-row items-center justify-between bg-gray-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-950/25">
      <p className="text-sm font-normal text-slate-800 dark:text-white">Name</p>
      <button
        className="rounded-md px-3 flex flex-row items-center gap-2 text-slate-800 dark:text-white active:opacity-50 transition-all"
        onClick={onCopyName}
      >
        <CopyIcon width={16} height={16} className="opacity-30" />
        <b className="text-lg font-bold">João Pedro Leopoldino</b>
      </button>
    </div>
  );
}
