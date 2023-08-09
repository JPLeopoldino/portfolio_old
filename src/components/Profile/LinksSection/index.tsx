import { FileText, Github, Linkedin, Mail } from 'lucide-react';

const LinksList = [
  {
    icon: FileText,
    href: '#',
    target: undefined,
  },
  {
    icon: Github,
    href: 'http://github.com/JPLeopoldino',
    target: '_blank',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/JPLeopoldino',
    target: '_blank',
  },
  {
    icon: Mail,
    href: 'mailto:leopoldinodev@gmail.com',
    target: undefined,
  },
];

export default function LinksSection() {
  return (
    <div className="flex flex-row items-center justify-evenly rounded-xl bg-gray-100 shadow-md shadow-slate-300 dark:bg-slate-800 dark:shadow-slate-950/25">
      {LinksList.map((linkItem, index) => {
        const Icon = linkItem.icon;

        return (
          <a
            key={index.toString()}
            className="cursor-pointer rounded-xl  bg-gray-200 p-4 transition-all hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600"
            href={linkItem.href}
            target={linkItem.target}
          >
            <Icon className="text-slate-700 dark:text-white" />
          </a>
        );
      })}
    </div>
  );
}
