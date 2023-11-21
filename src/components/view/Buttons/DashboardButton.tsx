import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const DashboardButton = () => {
  const userInfo: any = getUserInfo();
  let dashboardLink: string = "";
  if (userInfo.role === "DRIVER") {
    dashboardLink = "/driver";
  } else if (userInfo.role === "ADMIN") {
    dashboardLink = "/admin";
  } else if (userInfo.role === "TRAVELLER") {
    dashboardLink = "/user";
  }
  return <Link href={dashboardLink}>Dashboard</Link>;
};

export default DashboardButton;
