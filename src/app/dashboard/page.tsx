"use client";
import "@/Styles/global.css";
import MenuSection from "@/Components/MenuSection";
import MainSection from "@/Components/MainSection";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const Dashboard = () => {
  return (
    <div className="bg-[#EDEDED] min-h-screen">
      <div className="container mx-auto lg:max-w-[1200px] px-4 sm:px-6 md:px-8">
        <Header/>
        <MenuSection />
        <MainSection />
        <Footer/>
      </div>
    </div>
  );
};

export default Dashboard;
