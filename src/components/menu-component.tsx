import { MutableRefObject } from "react";

interface MenuComponentProps {
  product: {
    id: number;
    title: string;
    liters: string;
    scent: string;
    stock: string;
    producerPrice: string;
    consumerPrice: string;
  };
  toggleMenu: (id: number | null) => void;
  activeMenu: number | null;
  menuRef: MutableRefObject<{ [key: number]: HTMLDivElement | null }>; 
  productId: number; 
}

const MenuComponent: React.FC<MenuComponentProps> = ({
  product,
  toggleMenu,
  activeMenu,
  menuRef,
  productId,
}) => {
  return (
    <div
      ref={(el) => {
        menuRef.current[productId] = el; 
      }}
      className="relative"
    >
      <button onClick={() => toggleMenu(product.id)} className="rounded-full">
        <span className="text-[29px] font-bold">⋮</span>
      </button>
      {activeMenu === product.id && (
        <div className="flex items-start flex-col absolute left-0 mt-2 bg-white shadow-md py-2 w-[220px] z-10 border border-gray-200 translate-x-[7.5%] -translate-y-[47px]">
          <span className="cursor-pointer px-4 py-4 text-[13px] hover:bg-[#EEEEEE] w-full">ویرایش</span>
          <span className="cursor-pointer px-4 py-4 text-[13px] hover:bg-[#EEEEEE] w-full">حذف</span>
          <span className="cursor-pointer px-4 py-4 text-[13px] hover:bg-[#EEEEEE] w-full">کالاگرام محصول</span>
        </div>
      )}
    </div>
  );
};

export default MenuComponent;

