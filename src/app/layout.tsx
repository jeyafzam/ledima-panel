import React, { ReactNode } from "react";

import "@/Styles/global.css";

export const metadata = {
  title: "ladima-panel",
  description: "A Next.js app",
};

type RootLayoutProps = {
  children: ReactNode;
};

const isRTL = true;

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html
      className="overflow-x-hidden"
      lang={isRTL ? "fa" : "en"}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
};

export default RootLayout;
