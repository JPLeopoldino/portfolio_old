import { ComponentProps } from 'react';
import LinksSection from './LinksSection';
import NameSection from './NameSection';
import { twMerge } from 'tailwind-merge';

export default function Profile({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('grid grid-cols-2 gap-4 md:grid-cols-11', className)}
      {...rest}
    >
      {/* <div className="rounded-lg overflow-hidden col-span-4">
        <Image
          src={profileImg}
          alt="Profile Image"
          className="h-full pointer-events-none"
        />
      </div> */}
      <div className="rounded-2xl bg-[url(/profile-img.jpg)] bg-cover bg-center shadow-md shadow-slate-300 dark:shadow-slate-950/25 md:col-span-5" />

      <div className="grid grid-rows-4 gap-4 md:col-span-6">
        <NameSection className="row-span-2 md:row-span-1" />
        <div className="row-span-2 flex flex-row items-center justify-between rounded-xl bg-gray-100 px-6 shadow-md shadow-slate-300 dark:bg-slate-800 dark:shadow-slate-950/25">
          <p className="text-slate-800 dark:text-white">Name</p>
          <b className="text-xs text-slate-800 dark:text-white">
            João Pedro Leopoldino
          </b>
        </div>
        <LinksSection className="hidden md:flex" />
      </div>
      <LinksSection className="col-span-2 md:hidden" />
    </div>
  );
}
