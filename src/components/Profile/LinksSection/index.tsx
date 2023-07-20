import {
  FileIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/assets";

const LinksList = [
  {
    icon: <FileIcon className="text-slate-700 dark:text-white" />,
    href: "#",
    target: undefined,
  },
  {
    icon: <GithubIcon className="text-slate-700 dark:text-white" />,
    href: "http://github.com/JPLeopoldino",
    target: "_blank",
  },
  {
    icon: <LinkedinIcon className="text-slate-700 dark:text-white" />,
    href: "https://www.linkedin.com/in/JPLeopoldino",
    target: "_blank",
  },
  {
    icon: <MailIcon className="text-slate-700 dark:text-white" />,
    href: "mailto:leopoldinodev@gmail.com",
    target: undefined,
  },
]

export default function LinksSection() {
  return (
    <div className="rounded-xl flex flex-row items-center justify-evenly bg-gray-100 dark:bg-slate-800 shadow-md shadow-slate-300 dark:shadow-slate-950/25">
      {LinksList.map((linkItem, index) => {
        return (
          <a
            key={index.toString()}
            className="p-4 rounded-xl  bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-all cursor-pointer"
            href={linkItem.href}
            target={linkItem.target}
          >
            {linkItem.icon}
          </a>    
        );
      })}
    </div>
  );
}
