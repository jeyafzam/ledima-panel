import React, { ReactNode } from 'react';

export const metadata = {
  title: 'ledima-panel',
  description: 'A Next.js app',
};

type RootLayoutProps = {
  children: ReactNode;
};

const isRTL = true; 

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html  lang={isRTL ? 'fa' : 'en'} dir={isRTL ? 'rtl' : 'ltr'} >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
