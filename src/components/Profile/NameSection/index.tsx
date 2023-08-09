'use client';

import { Copy } from 'lucide-react';

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
    navigator.clipboard.writeText('João Pedro Leopoldino');
    // alert('Copied to Clipboard!');
    setTimeout(clearSelection, 500);
  };

  return (
    <div className="flex flex-row items-center justify-between rounded-xl bg-gray-100 pl-6 pr-3 shadow-md shadow-slate-300 dark:bg-slate-800 dark:shadow-slate-950/25">
      <p className="text-sm font-normal text-slate-800 dark:text-white">Name</p>
      <button
        className="flex flex-row items-center gap-2 rounded-md px-3 text-slate-800 transition-all active:opacity-50 dark:text-white"
        onClick={onCopyName}
      >
        <Copy width={16} height={16} className="opacity-30" />
        <b className="text-lg font-bold">João Pedro Leopoldino</b>
      </button>
    </div>
  );
}
