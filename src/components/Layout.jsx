"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Dnav from "./Dnav";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname.startsWith("/admin") ? (
        <>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto">
              <div className=" sticky top-0">
                <Dnav />
              </div>
              {children}
            </div>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
