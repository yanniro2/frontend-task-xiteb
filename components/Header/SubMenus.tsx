// SubMenus.tsx
import React, { Key } from "react";
import Link from "next/link";

interface Section {
  id: number;
  title: string;
  url: string;
}

interface SubMenu {
  id: number;
  dec: string;
  sections: Section[];
}

interface Props {
  submenus:
    | SubMenu[]
    | {
        id: Key | null | undefined;
        dec: string;
        sections: Section[];
      }
    | undefined;
  footer: string | null | undefined;
}

const SubMenus: React.FC<Props> = ({ submenus, footer }) => {
  if (!submenus || (Array.isArray(submenus) && submenus.length === 0)) {
    return null; // No submenus, render nothing
  }

  const submenusArray = Array.isArray(submenus) ? submenus : [submenus];

  return (
    <div className="absolute top-[3rem] left-0 right-0 w-screen h-auto bg-white shadow-lg text-gray-800 z-[1000]">
      <div className="container mx-auto p-3 flex gap-[2rem]">
        {submenusArray.map((submenu) => (
          <div key={submenu.id} className="w-auto">
            <h1 className="font-bold">{submenu.dec}</h1>
            <nav className="flex flex-col items-start gap-2 pt-3">
              {submenu.sections.map((section) => (
                <Link key={section.id} href={section.url} className="link-2">
                  {section.title}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
      {footer && <div className="container mx-auto p-3 border-t">{footer}</div>}
    </div>
  );
};

export default SubMenus;
