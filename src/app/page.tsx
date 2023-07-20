import { About, Hero, Menu, Profile, Projects, Stats } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen p-8 select-none grid gap-4 sm:grid-rows-2 md:grid-rows-5 lg: xl: 2xl:">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-11 sm:row-span-1 md:row-span-3">
        <div className="grid gap-4 grid-rows-5 sm:col-span-1 md:col-span-5">
          <Hero />
          <Stats />
        </div>
        <div className="grid gap-4 grid-rows-6 sm:col-span-1 md:col-span-6">
          <Menu />
          <Profile />
        </div>
      </div>

      <div className="grid grid-cols-11 gap-4 sm:row-span-1 md:row-span-2">
        <Projects />
        <About />
      </div>
    </main>
  );
}
