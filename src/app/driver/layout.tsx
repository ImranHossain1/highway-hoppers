"use client";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DriverSidebar from "@/components/AllSidebar/DriverSidebar";
import AuthorisedHeader from "@/components/ui/AuthorisedHeader";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userLoggedIn = isLoggedIn();
  const userInfo: any = getUserInfo();
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
      <AuthorisedHeader hasSider />
      <DriverSidebar>{children}</DriverSidebar>
    </div>
  );
}
