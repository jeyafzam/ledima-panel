import React, { useState } from "react";

interface ProductCardProps {
  title: string;
  price: string;
  productionCost: string;
  consumptionCost: string;
  capacity: string;
  additionalInfo: string;
  stock: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  productionCost,
  consumptionCost,
  capacity,
  additionalInfo,
  stock,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const formatPrice = (price: string) =>
    price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="bg-white shadow rounded-lg p-4 relative">
      <div className="absolute top-2 right-2">
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          •••
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                ویرایش
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">حذف</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                گزارش محصول
              </li>
            </ul>
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{capacity}</p>
      <p className="text-gray-600">{additionalInfo}</p>
      <p className="text-gray-600">{stock}</p>
      <div className="mt-2 bg-yellow-100 p-2 rounded">
        <p className="text-yellow-600 font-bold text-center">
          {formatPrice(price)}
        </p>
      </div>
      <div className="flex justify-between mt-2 text-sm">
        <span className="text-red-500">{productionCost}</span>
        <span className="text-blue-500">{consumptionCost}</span>
      </div>
    </div>
  );
};


export default ProductCard;
