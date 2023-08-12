import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function About({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'flex flex-col items-start justify-between rounded-2xl bg-gray-100 p-8 shadow-md shadow-slate-300 dark:bg-slate-800 dark:shadow-slate-950/25',
        className
      )}
      {...rest}
    >
      <h4 className="text-slate-800 dark:text-white">About</h4>
      <p className="text-slate-800 dark:text-white">
        Experienced developer with 4+ years of experience, passionate about
        staying up-to-date with emerging technologies. Skilled in
        problem-solving, I thrive in dynamic environments and deliver innovative
        solutions. Dedicated to continuous learning, I actively seek connections
        and share knowledge with fellow professionals in the field.
      </p>
    </div>
  );
}
