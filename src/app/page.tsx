import { About, Hero, Menu, PersonalInfo, Projects, Stats } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-slate-200 dark:bg-gray-900 select-none grid grid-rows-5 gap-4">
      <div className="grid grid-cols-11 gap-4 row-span-3">
        <div className="grid grid-rows-5 gap-4 col-span-5">
          <Hero />
          <Stats />
        </div>
        <div className="grid grid-rows-6 gap-4 col-span-6">
          <Menu />
          <PersonalInfo />
        </div>
      </div>

      <div className="grid grid-cols-11 gap-4 row-span-2">
        <Projects />
        <About />
      </div>
    </main>
  );
}
