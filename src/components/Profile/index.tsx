import LinksSection from "./LinksSection";
import NameSection from "./NameSection";

export default function Profile() {
  return (
    <div className="grid grid-cols-11 gap-4 row-span-5">
      {/* <div className="rounded-lg overflow-hidden col-span-4">
        <Image
          src={profileImg}
          alt="Profile Image"
          className="h-full pointer-events-none"
        />
      </div> */}
      <div className="rounded-2xl bg-[url(/profile-img.jpg)] bg-cover bg-center shadow-md shadow-slate-300 dark:shadow-slate-950/25 col-span-5" />

      <div className="grid grid-rows-4 gap-4 col-span-6">
        <NameSection />
        <div className="rounded-xl px-6 flex flex-row items-center justify-between bg-gray-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-950/25 row-span-2">
          <p className="text-slate-800 dark:text-white">Name</p>
          <b className="text-slate-800 dark:text-white">
            João Pedro Leopoldino
          </b>
        </div>
        <LinksSection />
      </div>
    </div>
  );
}
