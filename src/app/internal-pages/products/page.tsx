"use client";

import CustomSlider from "@/components/price-range-slider";
import MenuComponent from "@/components/menu-component";
import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import Image from "next/image";


const products = [
  {
    id: 1,
    title: "مایع دستشویی اکسینر",
    liters: "لیتری 4",
    scent: "رایحه‌های ادکلنی",
    stock: "موجودی 500 کارتن",
    consumerPrice: "20,000 تومان",
    producerPrice: "11,000 تومان",
  },
  {
    id: 2,
    title: "مایع جرمگیر اکسینر",
    liters: "لیتری 4",
    scent: "رایحه‌ ادکلنی",
    stock: "موجودی 500 کارتن",
    consumerPrice: "20,000 تومان",
    producerPrice: "11,000 تومان",
  },
  {
    id: 3,
    title: "مایع لباسشویی اکسینر",
    liters: "لیتری 4",
    scent: "رایحه‌ ادکلنی",
    stock: "موجودی 500 کارتن ",
    consumerPrice: "20,000 تومان",
    producerPrice: "11,000 تومان",
  },
  {
    id: 4,
    title: "مایع سفید کننده اکسینر",
    liters: "لیتری 4",
    scent: "رایحه‌ ادکلنی",
    stock: "موجودی 500 کارتن",
    consumerPrice: "20,000 تومان",
    producerPrice: "11,000 تومان",
  },
];

export default function ProductsPage() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const menuRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleMenu = (id: number | null) => {
    setActiveMenu((prevActiveMenu) => (prevActiveMenu === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const outsideClick = !Object.values(menuRefs.current).some((ref) =>
        ref?.contains(event.target as Node)
      );

      if (outsideClick) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
    <NavBar/>
    <SearchBar/>
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white py-3 px-4">
            <div className="flex justify-between items-center pb-2">
              <h3 className="text-[15px] font-medium b-2">{product.title}</h3>

              <MenuComponent
                product={product}
                toggleMenu={toggleMenu}
                activeMenu={activeMenu}
                menuRef={menuRefs}
                productId={product.id}
              />
            </div>

            <div className="flex justify-between mb-4">
              <ul className="text-[13px]  space-y-2 mb-4 w-[30%]">
                <li className="flex">
                  <Image
                    src="/images/png/check-circle-outline.png"
                    width={20}
                    height={20}
                    alt="Liters Icon"
                    className="ml-3"
                  />
                  {product.liters}
                </li>
                <li className="flex">
                  <Image
                    src="/images/png/check-circle-outline.png"
                    width={20}
                    height={20}
                    alt="Scent Icon"
                    className="ml-3"
                  />
                  {product.scent}
                </li>
                <li className="flex">{product.stock}</li>
              </ul>
              <div className="w-[70%]">
                <CustomSlider />
              </div>
            </div>

            <div className="flex justify-between ">
              <p className="  bg-[#D9E8FC] text-[13px] px-[33px] py-[4px] rounded-2xl">
                قیمت مصرف‌کننده: {product.consumerPrice}
              </p>
              <p className="bg-[#F7CECC] text-[13px] px-[37px] py-[4px] rounded-2xl z-30">
                قیمت تولیدکننده: {product.producerPrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start mt-4 mb-8 space-x-2" dir="ltr">
        <button className="w-8 h-8 rounded-full bg-[#93D270] text-[13px]">
          1
        </button>
        <button className="w-8 h-8 rounded-full bg-[#D9D9D9]  text-[13px]">
          2
        </button>
        <button className="w-8 h-8 rounded-full bg-[#D9D9D9] text-[13px]">
          3
        </button>
        <span className="flex items-center px-2">...</span>
        <button className="w-8 h-8 rounded-full bg-[#D9D9D9] text-[13px]">
          10
        </button>
      </div>
    </div>
  </div>
  );
}
