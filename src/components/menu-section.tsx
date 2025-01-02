"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const menuItems = [
  { id: 1, icon: "/images/png/app-shop.png", title: "محصولات", link: "/internal-pages/products" },
  { id: 2, icon: "/images/png/checked.png", title: "سفارشات", link: "/internal-pages/orders" },
  { id: 3, icon: "/images/png/levels.png", title: "آنالیز فروش", link: "/internal-pages/analysis" },
  { id: 4, icon: "/images/png/browser-1.png", title: "سرنخ های فروش", link: "/internal-pages/leads" },
  { id: 5, icon: "/images/png/user-1.png", title: "سازمان فروش", link: "/internal-pages/organization" },
];

const MenuSection = () => {
  const router = useRouter();
  const pathname = usePathname(); 

  const handleClick = (link: string) => {
    router.push(link); 
  };

  return (
    <div className="bg-[#FFFFFF] mb-5">
      <div className="flex justify-between items-center">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.link)}
            className="flex flex-col items-center w-1/5 relative cursor-pointer group" 
          >
            
            <div
              className={`absolute top-[7%] w-[90%] h-[85%] rounded-xl ${
                pathname === item.link ? "bg-[#E4EDFF]" : ""
              } hover:bg-[#E4EDFF] transition`}
              style={{ zIndex: 1 }}
            ></div>

         
            <div className="w-12 h-[55px] flex items-center justify-center z-10 pointer-events-none">
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span
              className={`text-xs mb-2 z-10 pointer-events-none transition ${
                pathname === item.link
                  ? "text-[#262F5D]" 
                  : "group-hover:text-[#262F5D]" 
              }`}
            >
              {item.title}
            </span>

            
            {index >= 1 && (
              <div className="absolute top-[25%] right-0 h-[55%] border-r-[1px] border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
