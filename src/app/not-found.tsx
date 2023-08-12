import Link from 'next/link';
import { Rabbit, Turtle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-1 select-none flex-col items-center justify-center gap-2 bg-slate-200 dark:bg-gray-900">
      <Turtle className="absolute left-4 top-1/4 h-auto w-1/6 text-slate-800 opacity-20 dark:text-white lg:left-1/4 lg:w-20" />
      <Rabbit className="mb-16 h-auto w-1/4 animate-bounce text-slate-800 dark:text-white lg:w-1/12" />
      <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
        Sorry!
      </h2>
      <p className="w-40 text-center text-base font-medium leading-tight text-slate-800 opacity-80 dark:text-white">
        I haven&apos;t developed this page yet
      </p>
      <Link
        className="mt-16 rounded-md bg-slate-800 px-10 py-3 font-semibold text-white transition-opacity hover:opacity-80 active:opacity-100 dark:bg-white dark:text-slate-800"
        href="/"
      >
        Return Home
      </Link>
    </main>
  );
}
