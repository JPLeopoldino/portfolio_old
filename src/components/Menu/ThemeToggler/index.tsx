import { SVGAttributes, useMemo } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = useMemo(() => resolvedTheme === 'dark', [resolvedTheme]);

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  const ThemeIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
    return isDark ? <Sun {...props} /> : <Moon {...props} />;
  };

  return (
    <button onClick={toggleTheme} className="p-1">
      <ThemeIcon className="cursor-pointer text-slate-800 dark:text-white" />
    </button>
  );
}
