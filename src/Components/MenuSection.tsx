"use client";
import Image from "next/image";

const menuItems = [
  { id: 5, icon: "/images/png/app-shop.png", title: "محصولات" },
  { id: 4, icon: "/images/png/checked.png", title: "سفارشات" },
  { id: 3, icon: "/images/png/levels.png", title: "آنالیز فروش" },
  { id: 2, icon: "/images/png/browser-1.png", title: "سرنخ های فروش" },
  { id: 1, icon: "/images/png/user-1.png", title: "سازمان فروش" },
];

const MenuSection = () => {
  return (
    <div className="bg-[#FFFFFF] mb-5">
      <div className="flex justify-between items-center">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center w-1/5 relative`}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>

            <p className="text-xs mb-2">{item.title}</p>

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
