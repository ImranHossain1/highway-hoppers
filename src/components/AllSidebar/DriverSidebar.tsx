import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const DriverSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "My Profile", href: "/driver" },
    {
      key: "2",
      label: "My Schedules",
      href: "/driver/my-schedules",
    },
    {
      key: "3",
      label: "My Reviews",
      href: "/driver/reviews",
    },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default DriverSidebar;
