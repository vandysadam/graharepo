// layouts/DashboardLayout.tsx

import Footer from "@/component/footer";
import Header from "../component/header";
import BackToTopButton from "@/component/backtotopbutton";

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 text-black">
      {/* Header tetap di atas */}
      <Header />

      {/* Tambahkan padding-top sesuai tinggi header */}
      <main className="">{children}</main>

      <BackToTopButton/>

      {/* Footer selalu di bawah */}
      <Footer />
    </div>
  );
}
