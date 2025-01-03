import React from "react";
import { Slider } from "antd";
import "@/styles/custom-slider.css";

const CustomSlider: React.FC = () => {
  const marks = {
    0: "0",
    20: "20",
    40: "40",
    60: "60",
    80: "80",
    100: "100",
  };

  return (
    <div className="py-2 px-4  bg-[#FFF2CD] rounded-[13px]">
      <p className="text-[13px]">قیمت</p>
      <p className="text-[13px]"> تومان 500,000 </p>
      <div className="flex items-center justify-between">
        <div className="h-[1px] bg-black w-[37%] transform -translate-y-4"></div>
        <Slider
          marks={marks}
          defaultValue={50}
          included
          step={null}
          tooltip={{
            formatter: (value) => `${value}`,
          }}
          trackStyle={{ backgroundColor: "#0DA35B" }}
          railStyle={{ backgroundColor: "#e4e4e7" }}
          className="custom-slider  w-[61%]"
        />
      </div>
      <div className="relative">
        <span className="absolute text-[13px]	left-0 -top-6 pl-[5.7px]">تعداد سفارش</span>
      </div>
    </div>
  );
};

export default CustomSlider;
