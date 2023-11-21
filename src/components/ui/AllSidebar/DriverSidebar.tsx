import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const DriverSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "My Profile", href: "/driver" },
    {
      key: "2",
      label: "My Schedules",
      href: "/user/my-schedules",
    },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default DriverSidebar;
