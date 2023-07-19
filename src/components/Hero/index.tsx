export default function Hero() {
  return (
    <div className="relative rounded-2xl p-8 bg-gray-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-950/25 row-span-3">
      <h1 className="font-semibold text-[200%] leading-tight text-slate-800 dark:text-white">
        Let Me Bring Your Projects To Life!
      </h1>
      <a
        href="#"
        className="absolute bottom-4 right-4 px-5 py-3 rounded-xl bg-purple-800 text-white font-semibold hover:bg-purple-700 transition-all cursor-pointer"
      >
        Let&apos;s talk! 👋
      </a>
    </div>
  )
}
