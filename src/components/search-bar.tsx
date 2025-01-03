import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center w-[100%] mb-4 relative ">
      <input
        type="text"
        placeholder="جستجوی محصول با عنوان"
        className="bg-[#F5F5F5] outline-none px-2 py-3 text-[13px] w-full placeholder-[#3E4341]"
      />
      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#888888"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m12 5l-7 7m0 0l7 7m-7-7h14"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
