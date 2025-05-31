import Sidenav from "@/app/law3/ui/components/sidenav"
export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
    <Sidenav/>
        <body>{children}</body>
      </>
    );
}