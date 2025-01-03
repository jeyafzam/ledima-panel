import Footer from '@/components/footer';
import Header from '@/components/header';
import MenuSection from '@/components/menu-section';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#EDEDED] min-h-screen">
      <div className="container mx-auto lg:max-w-[1220px] px-4 sm:px-6 md:px-8">
        <Header />
        <MenuSection />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
