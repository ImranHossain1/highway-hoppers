"use client";
import PublicHeader from "@/components/ui/PublicHeader";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AdminSidebar from "@/components/ui/AllSidebar/AdminSidebar";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userLoggedIn = isLoggedIn();
  const userInfo: any = getUserInfo()
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
      <PublicHeader hasSider />
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
}
