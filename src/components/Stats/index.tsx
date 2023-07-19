export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4 row-span-2">
      <div className="rounded-2xl text-white flex flex-col items-center justify-center bg-cyan-700 shadow-md shadow-slate-300 dark:shadow-slate-950/25">
        <h3 className="font-semibold text-xl mb-1">4+</h3>
        <p className="font-medium text-sm">Years Experience</p>
      </div>
      <div className="rounded-2xl text-white flex flex-col items-center justify-center bg-yellow-700 shadow-md shadow-slate-300 dark:shadow-slate-950/25">
        <h3 className="font-semibold text-xl mb-1">18+</h3>
        <p className="font-medium text-sm">Tecnologies Expetise</p>
      </div>
      <div className="rounded-2xl text-white flex flex-col items-center justify-center bg-green-700 shadow-md shadow-slate-300 dark:shadow-slate-950/25">
        <h3 className="font-semibold text-xl mb-1">2+</h3>
        <p className="font-medium text-sm">Years Experience</p>
      </div>
    </div>
  );
}
