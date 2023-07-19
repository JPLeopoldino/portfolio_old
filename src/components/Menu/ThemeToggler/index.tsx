import { MoonIcon, SunIcon } from "@/assets";
import { useTheme } from "next-themes";
import { SVGAttributes, useMemo } from "react";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme]);

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const ThemeIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
    return isDark ? <SunIcon {...props} /> : <MoonIcon {...props} />;
  };

  return (
    <button onClick={toggleTheme} className="p-1">
      <ThemeIcon className="text-slate-800 dark:text-white cursor-pointer" />
    </button>
  );
}
