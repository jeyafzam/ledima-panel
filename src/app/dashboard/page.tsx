"use client";
import Image from "next/image";
import "@/Styles/global.css";
import NotificationBadge from "@/Components/NotificationBadge";
import MenuSection from "@/Components/MenuSection";
import MainSection from "@/Components/MainSection";

const Dashboard = () => {
  return (
    <div className="h-screen bg-[#EDEDED]">
      <div className="container mx-auto lg:max-w-[1150px]">
        <header className="pt-5 mb-3 flex justify-between  items-center">
          <div>
            <Image
              src="/images/logobig.png"
              alt="Login Image"
              width={110}
              height={0}
              className="object-cover "
            />
          </div>

          <div className="flex justify-center items-center">
            <div className="pl-7">
              <NotificationBadge count={8} />
            </div>
            <div>
              <Image
                src="/images/png/settings.png"
                alt="Login Image"
                width={32}
                height={32}
              />
            </div>
          </div>
        </header>
        <MenuSection />
        <MainSection />
        <footer className="flex justify-between pb-3">
          <span className="text-xs text-[#646464] mt-2">
            لدیما، دستیار آنلاین فروش
          </span>
          <span className="text-xs text-[#646464] mt-2">
            Copyrights 2025, Ladima.ir
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
