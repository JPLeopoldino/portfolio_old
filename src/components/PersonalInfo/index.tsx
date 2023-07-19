'use client';

import Image from "next/image";
import {
  FileIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  profileImg
} from "@/assets";

export default function PersonalInfo() {
  const clearSelection = () => {
    if (window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
    // else if (document.getSelection()) {
    //   document.getSelection()?.empty();
    // }
  }

  const onCopyName = () => {
    navigator.clipboard.writeText('João Pedro Leopoldino');
    // alert('Copied to Clipboard!');
    setTimeout(clearSelection, 500);
  }

  return (
    <div className="grid grid-cols-11 gap-4 row-span-5">
      {/* <div className="rounded-lg overflow-hidden col-span-4">
        <Image
          src={profileImg}
          alt="Profile Image"
          className="h-full pointer-events-none"
        />
      </div> */}
      <div className="rounded-2xl bg-[url(/profile-img.jpg)] bg-cover bg-center shadow-md shadow-slate-300 dark:shadow-slate-950/25 col-span-5"/>

      <div className="grid grid-rows-4 gap-4 col-span-6">
        <div className="rounded-xl px-6 flex flex-row items-center justify-between bg-gray-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-950/25">
          <p className="text-sm font-normal text-slate-800 dark:text-white">
            Name
          </p>
          <b
            className="text-lg font-bold text-slate-800 dark:text-white select-all selection:bg-slate-600 selection:text-white dark:selection:bg-slate-200 dark:selection:text-black cursor-pointer"
            onClick={onCopyName}
          >
            João Pedro Leopoldino
          </b>
        </div>
        <div className="rounded-xl px-6 flex flex-row items-center justify-between bg-gray-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-950/25 row-span-2">
          <p className="text-slate-800 dark:text-white">Name</p>
          <b className="text-slate-800 dark:text-white">João Pedro Leopoldino</b>
        </div>
        <div className="rounded-xl px-6 flex flex-row items-center justify-between bg-gray-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-950/25">
          <a
            className="p-4 rounded-xl  bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-all cursor-pointer"
            href=""
            target="_blank"
          >
            <FileIcon className="text-slate-700 dark:text-white" />
          </a>
          <a
            className="p-4 rounded-xl  bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-all cursor-pointer"
            href="http://github.com/JPLeopoldino"
            target="_blank"
          >
            <GithubIcon className="text-slate-700 dark:text-white" />
          </a>
          <a
            className="p-4 rounded-xl  bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-all cursor-pointer"
            href="https://www.linkedin.com/in/JPLeopoldino"
            target="_blank"
          >
            <LinkedinIcon className="text-slate-700 dark:text-white" />
          </a>
          <a
            className="p-4 rounded-xl  bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-all cursor-pointer"
            href="mailto:leopoldinodev@gmail.com"
            target="_blank"
          >
            <MailIcon className="text-slate-700 dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}
