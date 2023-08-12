import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Projects({
  className,
  ...rest
}: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-between gap-2 rounded-2xl bg-gray-100 p-8 shadow-md shadow-slate-300 dark:bg-slate-800 dark:shadow-slate-950/25',
        className
      )}
      {...rest}
    >
      <div className="flex w-full flex-row items-center justify-between">
        <h4 className="text-xl font-semibold text-slate-800 dark:text-white">
          Projects
        </h4>
        <a
          className="text-md h-full cursor-pointer text-slate-600 transition-all hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100"
          href="https://github.com/JPLeopoldino?tab=repositories"
          target="_black"
        >
          See All
        </a>
      </div>
      <ul className="grid w-full flex-1 grid-cols-3 gap-4">
        <li className="rounded-xl bg-slate-300">
          <a
            className="flex h-full w-full flex-col items-center justify-center rounded-xl"
            href="#"
          >
            a
          </a>
        </li>
        <li className="rounded-xl bg-slate-300">
          <a
            className="flex h-full w-full flex-col items-center justify-center rounded-xl"
            href="#"
          >
            a
          </a>
        </li>
        <li className="rounded-xl bg-slate-300">
          <a
            className="flex h-full w-full flex-col items-center justify-center rounded-xl"
            href="#"
          >
            a
          </a>
        </li>
      </ul>
    </div>
  );
}
