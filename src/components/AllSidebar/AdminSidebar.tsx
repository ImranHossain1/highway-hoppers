import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "My Profile", href: "/admin" },
    {
      key: "2",
      label: "All Bookings",
      href: "/admin/all-bookings",
    },
    {
      key: "3",
      label: "All Pending Bookings",
      href: "/admin/all-pending-bookings",
    },
    {
      key: "4",
      label: "Bus Schedules",
      href: "/admin/bus-schedules",
    },
    {
      key: "5",
      label: "Bus List",
      href: "/admin/all-bus",
    },
    {
      key: "6",
      label: "Driver List",
      href: "/admin/driver-list",
    },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default AdminSidebar;
