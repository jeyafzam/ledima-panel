import "@/Styles/global.css";
import React from "react";
import Image from "next/image";

const MainSection: React.FC = () => {
  return (
    <div className="flex md:flex-row md:justify-between">
      <div className="flex flex-col gap-4 ml-5 w-[270px] md:w-[170px]">
        <div className="flex flex-col  bg-white gap-2 ">
          <div className="text-6xl justify-center items-center flex p-5">
            25
          </div>

          <div className="flex justify-between border-t border-gray-300   p-2">
            <Image
              src="/images/png/telephone_charcoal.png"
              alt="telephone"
              width={25}
              height={25}
            />
            <p className="text-xs">سرنخ فروش</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-[#3F51B5] text-white">
          <div className="flex flex-col gap-3 items-center p-2">
            <Image
              src="/images/png/laundry-detergent.png"
              alt="Cleaner"
              width={65}
              height={65}
              style={{
                filter: "invert(1)",
              }}
            />
            <p className="text-xs">شوینده ها</p>
          </div>

          <div className="flex items-center justify-between border-t border-[#2245A3] p-2">
            <Image
              src="/images/png/calendar1.png"
              alt="Cleaner"
              width={22}
              height={22}
              style={{
                filter: "invert(1)",
              }}
            />
            <p className="text-xs">پرفروش امروز</p>
          </div>
        </div>
        <div className="flex ">
          <button className="w-12 h-12 bg-[#020091] text-white rounded-full text-2xl flex items-center justify-center shadow-lg">
            +
          </button>
        </div>
      </div>

      <div className=" flex flex-col gap-2 ml-8 w-[270px] md:w-[170px]">
        <div>
          <div className="flex flex-col gap-2 bg-[#D4E1F4] p-4 ">
            <div className="flex items-center justify-between bg-[#F6F6F4] hover:bg-[#D9D9D9] transition duration-300 rounded-[30px]">
              <div className="bg-[#009E87] text-[#A4FCF9] w-8 h-8 rounded-full  flex items-center justify-center">
                ا
              </div>
              <p className="text-xs pl-3">فروشگاه ابرار</p>
            </div>
            <div className="flex items-center justify-between bg-[#F6F6F4] hover:bg-[#D9D9D9] transition duration-300 rounded-[30px]">
              <div className="bg-[#009E87] text-[#A4FCF9] w-8 h-8 rounded-full  flex items-center justify-center">
                ا
              </div>
              <p className="text-xs pl-3">حمید اسکندری</p>
            </div>
            <div className="flex items-center justify-between bg-[#F6F6F4] hover:bg-[#D9D9D9] transition duration-300 rounded-[30px]">
              <div className="bg-[#009E87] text-[#A4FCF9] w-8 h-8 rounded-full  flex items-center justify-center">
                س
              </div>
              <p className="text-xs pl-3">فروشگاه ستارگان</p>
            </div>
          </div>

          <p className="flex mb-2 text-xs items-center justify-center bg-[#F6F6F4] p-3">
            جدیدترین سفارشات
          </p>
        </div>

        <div>
          <div className="flex flex-col bg-[#FFD95D] gap-2 p-4">
            <div className="flex items-center justify-between bg-[#FFF1CF] hover:bg-[#FFFFC6] transition duration-300 rounded-[30px]">
              <div className="bg-[#009E87] text-[#A4FCF9] w-8 h-8 rounded-full  flex items-center justify-center">
                ا
              </div>
              <p className="text-xs pl-3">فروشگاه ابرار</p>
            </div>
            <div className="flex items-center justify-between bg-[#FFF1CF] hover:bg-[#FFFFC6] transition duration-300 rounded-[30px]">
              <div className="bg-[#009E87] text-[#A4FCF9] w-8 h-8 rounded-full  flex items-center justify-center">
                ا
              </div>
              <p className="text-xs pl-3">حمید اسکندری</p>
            </div>
            <div className="flex items-center justify-between bg-[#FFF1CF] hover:bg-[#FFFFC6] transition duration-300 rounded-[30px]">
              <div className="bg-[#009E87] text-[#A4FCF9] w-8 h-8 rounded-full  flex items-center justify-center">
                س
              </div>
              <p className="text-xs pl-3">فروشگاه ستارگان</p>
            </div>
            <div className="flex items-center justify-between bg-[#FFF1CF] hover:bg-[#FFFFC6] transition duration-300 rounded-[30px] ">
              <div className="bg-[#009E87] text-[#A4FCF9] w-8 h-8 rounded-full  flex items-center justify-center">
                س
              </div>
              <p className="text-xs pl-3">فروشگاه هاشمی</p>
            </div>
          </div>

          <div className="flex mb-2 text-xs items-center justify-center bg-[#FCF0CA] p-3">
            <p className="pr-3">آماده ارسال در تهران</p>
          </div>
        </div>
      </div>
      <div className="flex-1 items-center justify-center hidden md:block">
        <Image
          src="/images/bg6_1.png"
          alt="Office Setup"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};
export default MainSection;
