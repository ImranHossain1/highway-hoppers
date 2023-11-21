import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const UserSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Dashboard", href: "dashboard/user" },
    {
      key: "2",
      label: "My Bookings",
      href: "dashboard/user/my-bookings",
    },
    {
      key: "3",
      label: "My Pending Bookings",
      href: "dashboard/user/my-pending-bookings",
    },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default UserSidebar;
