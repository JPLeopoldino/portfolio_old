'use client';

import { Copy } from 'lucide-react';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function NameSection({
  className,
  ...rest
}: ComponentProps<'div'>) {
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
    <div
      className={twMerge(
        'flex flex-col items-start justify-center gap-2 rounded-xl bg-gray-100 px-3 py-2 shadow-md shadow-slate-300 dark:bg-slate-800 dark:shadow-slate-950/25 md:flex-row md:items-center md:justify-between',
        className
      )}
      {...rest}
    >
      <p className="ml-3 text-[0.65rem] font-normal text-slate-800 dark:text-white sm:text-xs md:text-sm">
        Name
      </p>
      <button
        className="flex flex-row items-center gap-2 rounded-md px-3 text-slate-800 transition-all active:opacity-50 dark:text-white"
        onClick={onCopyName}
      >
        <Copy className="h-auto w-4 opacity-20" />
        <b className="text-xs font-bold leading-tight sm:text-sm md:text-base lg:text-lg">
          João Pedro Leopoldino
        </b>
      </button>
    </div>
  );
}
