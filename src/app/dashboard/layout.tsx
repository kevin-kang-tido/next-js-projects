import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import NavbarComponent from "@/components/layouts/navbar/NavbarComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <aside className="flex">
   <DashboardSidebar/>
    {children}
   </aside>
  );
}
