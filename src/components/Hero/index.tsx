import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Hero({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'relative rounded-2xl bg-gray-100 p-14 shadow-md shadow-slate-300 dark:bg-slate-800 dark:shadow-slate-950/25',
        className
      )}
      {...rest}
    >
      <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-800 dark:text-white lg:text-[250%]">
        Let Me Bring Your Projects To Life!
      </h1>
      <button className="absolute bottom-4 right-4 cursor-pointer rounded-xl bg-purple-800 px-8 py-4 text-lg font-semibold tracking-wide text-white transition-all hover:bg-purple-700">
        Let&apos;s talk!
        <span className="ml-3">👋</span>
      </button>
    </div>
  );
}
