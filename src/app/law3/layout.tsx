import Sidenav from "@/app/law3/ui/components/sidenav"
import Header from "@/components/ui/header";


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
    <Header/>
    <Sidenav/>
        <body>{children}</body>
      </>
    );
}