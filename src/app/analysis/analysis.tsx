"use client";
import "@/Styles/global.css";
import MenuSection from "@/Components/MenuSection";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const Analysis = () => {
    return (
       <div className="bg-[#EDEDED] min-h-screen">
        <div className="container mx-auto lg:max-w-[1200px] px-4 sm:px-6 md:px-8">
         <Header/>
         <MenuSection/>
         <Footer/>
         </div>
       </div>
    )
}
export default Analysis;