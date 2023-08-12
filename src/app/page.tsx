import { About, Hero, Menu, Profile, Projects, Stats } from '@/components';

export default function Home() {
  return (
    <main className="lg: xl: 2xl: grid min-h-screen select-none gap-4 p-8 sm:grid-rows-2 md:grid-rows-5">
      <div className="grid grid-rows-4 gap-4 sm:row-span-1 sm:grid-cols-1 sm:grid-rows-1 md:row-span-3 md:grid-cols-11">
        <div className="row-span-2 grid grid-rows-5 gap-4 bg-red-500 sm:col-span-1 sm:row-span-1 md:col-span-5">
          <Menu className="row-span-1 flex max-h-16 md:hidden" />
          <Hero className="row-span-4 md:row-span-3" />
          <Stats className="row-span-1 md:row-span-2 md:grid" />
        </div>
        <div className="row-span-2 grid grid-rows-6 gap-4 bg-emerald-500 sm:col-span-1 sm:row-span-1 md:col-span-6">
          <Menu className="row-span-1 hidden md:flex" />
          <Profile className="row-span-6 md:row-span-5" />
        </div>
      </div>

      <div className="grid gap-4 sm:row-span-1 md:row-span-2 md:grid-cols-11">
        <Projects className="md:col-span-7" />
        <About className="md:col-span-4" />
      </div>
    </main>
  );
}
