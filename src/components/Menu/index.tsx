"use client";

import { ThemeProvider } from "next-themes";
import { MenuIcon } from "@/assets";
import ThemeToggler from "./ThemeToggler";

export default function Menu() {
  return (
    <ThemeProvider attribute="class">
      <div className="rounded-xl px-6 flex flex-row items-center justify-between bg-gray-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-950/25 row-span-1">
        <ThemeToggler />
        <button className="p-1">
          <MenuIcon className="text-slate-800 dark:text-white" />
        </button>
      </div>
    </ThemeProvider>
  );
}
