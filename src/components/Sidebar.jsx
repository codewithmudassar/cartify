"use client";
import {
  ChartBarStacked,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  ListOrdered,
  SquareKanban,
  Users,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";


const Sidebar = () => {
  const links = [
    { lable: "Dashboard", route: "/admin", icon: <LayoutDashboard /> },
    { lable: "Orders", route: "/admin/orders", icon: <ListOrdered /> },
    { lable: "Products", route: "/admin/product", icon: <SquareKanban /> },
    { lable: "Category", route: "/admin/category", icon: <ChartBarStacked /> },
    { lable: "Users", route: "/admin/users", icon: <Users /> },
  ];
  const [sideOpen, setSideOpen] = useState(false);
  const toggle = () => {
    setSideOpen(!sideOpen);
  };
  return (
    <div
      className={` transition-all duration-500 relative bg-blue-500 text-white ${
        sideOpen ? "w-56" : "w-20 "
      }`}
    >
      <h1
        className={`  font-bold  flex items-center p-3 justify-center ${
          sideOpen ? "text-xl " : "text-[18px]"
        }`}
      >
        Cartify
      </h1>

      <div className={`flex flex-col gap-5 p-5`}>
        {links.map((v, i) => (
          <Link href={v.route}
            className={`border rounded-lg flex p-2 gap-3 overflow-hidden`}
            key={i}
          >
            <div>{v.icon}</div>
            <div className={`${sideOpen ? "block" : "hidden"}`}>{v.lable}</div>
          </Link>
        ))}
      </div>
      <button
        onClick={toggle}
        className={` absolute bottom-5 right-0 border border-r-0`}
      >
        {sideOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </div>
  );
};

export default Sidebar;
