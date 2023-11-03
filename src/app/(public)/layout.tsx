import PublicHeader from "@/components/ui/PublicHeader";
import FooterComponent from "@/components/view/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PublicHeader />

      <div style={{ minHeight: `calc(100vh - 64px)` }}>{children}</div>
      <FooterComponent />
    </div>
  );
}
