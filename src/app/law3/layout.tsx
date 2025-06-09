'use client'
import Sidenav from "@/app/law3/ui/components/sidenav"
import Header from "@/components/ui/header";


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="min-h-screen">
    <Header/>
    <Sidenav/>
            <main>{children}</main>
      </div>
    );
}