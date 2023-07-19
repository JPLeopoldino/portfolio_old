import { MenuIcon, MoonIcon, SunIcon } from "@/assets";
import { useTheme } from "next-themes";
import { SVGAttributes } from "react";

export default function Menu() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const ThemeIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
    return currentTheme === 'dark' ? <SunIcon {...props} /> : <MoonIcon {...props} />
  }

  return (
    <div className="rounded-xl px-6 flex flex-row items-center justify-between bg-gray-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-950/25 row-span-1">
      <button
        onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
        className="p-1"
      >
        <ThemeIcon className="text-slate-800 dark:text-white cursor-pointer" />
      </button>
      <button className="p-1">
        <MenuIcon className="text-slate-800 dark:text-white" />
      </button>
    </div>
  )
}
