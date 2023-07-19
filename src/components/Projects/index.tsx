export default function Projects() {
  return (
    <div className="rounded-2xl p-8 flex flex-col items-center justify-between gap-2 bg-gray-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-950/25 col-span-7">
      <div className="w-full flex flex-row items-center justify-between">
        <h4 className="text-slate-800 dark:text-white">Projects</h4>
        <a
          className="h-full text-md text-slate-600 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 transition-all cursor-pointer"
          href="https://github.com/JPLeopoldino?tab=repositories"
          target="_black"
        >
          See All
        </a>
      </div>
      <div className="flex-1 w-full grid grid-cols-3 gap-4">
        <a className="bg-slate-300 rounded-xl">a</a>
        <a className="bg-slate-300 rounded-xl">a</a>
        <a className="bg-slate-300 rounded-xl">a</a>
      </div>
    </div>
  )
}
