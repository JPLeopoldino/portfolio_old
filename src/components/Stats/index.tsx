import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface StatProps {
  amount: string;
  title: string;
  color: string;
}

const statsList: StatProps[] = [
  {
    amount: '4+',
    title: 'Years Experience',
    color: 'bg-cyan-600 dark:bg-cyan-700',
  },
  {
    amount: '18+',
    title: 'Tecnologies Expetise',
    color: 'bg-yellow-600 dark:bg-yellow-700',
  },
  {
    amount: '2+',
    title: 'Years Experience',
    color: 'bg-green-600 dark:bg-green-700',
  },
];

export default function Stats({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div className={twMerge('grid grid-cols-3 gap-4', className)} {...rest}>
      {statsList.map((stat, index) => {
        return (
          <div
            key={index}
            className={twMerge(
              'flex flex-col items-center justify-center gap-1 rounded-2xl p-4 text-white shadow-md shadow-slate-300  dark:shadow-slate-950/25 lg:gap-2',
              stat.color
            )}
          >
            <h3 className="text-3xl font-bold lg:text-4xl 2xl:text-5xl">
              {stat.amount}
            </h3>
            <p className="text-center text-[0.65rem] font-semibold leading-tight md:text-xs">
              {stat.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
