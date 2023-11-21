"use client";
import PublicHeader from "@/components/ui/PublicHeader";
import UserSidebar from "@/components/ui/AllSidebar/UserSidebar";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
      if (userInfo?.role !== "TRAVELLER") {
        router.push("/home");
      }
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <div>
      <PublicHeader hasSider />
      <UserSidebar>{children}</UserSidebar>
    </div>
  );
}
