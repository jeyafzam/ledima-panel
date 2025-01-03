import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  name: string; 
  href: string; 
}

const NavBar: React.FC = () => {

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "همه", href: "#" },
    { name: "برنج", href: "#" },
    { name: "منابع لباسشویی", href: "#" },
    { name: "کنسروها", href: "#" },
    { name: "منابع دستشویی", href: "#" },
  ];

  return (
    <div className=" flex items-center justify-between mb-3">
      <nav className="flex items-center text-[13px] text-[#3d36e3]  space-x-2 rtl:space-x-reverse">
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <Link href={item.href} className="hover:text-[#4049cf] hover:font-bold">
              {item.name}
            </Link>
            {index < breadcrumbItems.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
        <span>...</span>
      </nav>
      <button className="bg-[#029602] text-white px-5 py-2 text-[12px]">
        افزودن محصول جدید
      </button>
    </div>
  );
};

export default NavBar;
