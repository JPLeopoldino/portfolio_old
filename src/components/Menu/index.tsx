'use client';

import { ThemeProvider } from 'next-themes';
import ThemeToggler from './ThemeToggler';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Menu as MenuIcon } from 'lucide-react';

export default function Menu({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <ThemeProvider attribute="class">
      <div
        className={twMerge(
          'row-span-1 flex flex-row items-center justify-between rounded-xl bg-gray-100 px-6 shadow-md shadow-slate-300 dark:bg-slate-800 dark:shadow-slate-950/25',
          className
        )}
      >
        <ThemeToggler />
        <button className="p-1">
          <MenuIcon className="text-slate-800 dark:text-white" />
        </button>
      </div>
    </ThemeProvider>
  );
}
