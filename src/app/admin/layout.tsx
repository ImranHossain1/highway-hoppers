"use client";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AdminSidebar from "@/components/AllSidebar/AdminSidebar";
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
      if (userInfo?.role !== "ADMIN") {
        router.push("/home");
      }
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <div>
      <AuthorisedHeader hasSider />
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
}
