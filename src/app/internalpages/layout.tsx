import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import MenuSection from '@/Components/MenuSection';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#EDEDED] min-h-screen">
      <div className="container mx-auto lg:max-w-[1200px] px-4 sm:px-6 md:px-8">
        <Header />
        <MenuSection />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
