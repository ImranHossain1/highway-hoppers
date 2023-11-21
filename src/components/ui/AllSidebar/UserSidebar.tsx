import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const UserSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "My Profile", href: "/user" },
    {
      key: "2",
      label: "My Bookings",
      href: "/user/my-bookings",
    },
    {
      key: "3",
      label: "My Pending Bookings",
      href: "/user/my-pending-bookings",
    },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default UserSidebar;
