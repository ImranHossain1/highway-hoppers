"use client";
import PublicHeader from "@/components/ui/PublicHeader";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DriverSidebar from "@/components/AllSidebar/DriverSidebar";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userLoggedIn = isLoggedIn();
  const userInfo: any = getUserInfo();
  console.log(userInfo);
  const router = useRouter();
  useEffect(() => {
    if (userLoggedIn) {
      if (userInfo?.role !== "DRIVER") {
        router.push("/home");
      }
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <div>
      <PublicHeader hasSider />
      <DriverSidebar>{children}</DriverSidebar>
    </div>
  );
}
