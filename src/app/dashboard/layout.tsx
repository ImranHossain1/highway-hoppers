import PublicHeader from "@/components/ui/PublicHeader";
import UserSidebar from "@/components/ui/UserSidebar/UserSidebar";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PublicHeader hasSider />
      <UserSidebar>{children}</UserSidebar>
    </div>
  );
}
