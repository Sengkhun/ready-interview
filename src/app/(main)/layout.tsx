import Navbar from "@/components/Navbar";

interface mainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: mainLayoutProps) {
  return (
    <main className="*:px-3 lg:*:px-0">
      <Navbar />
      {props.children}
    </main>
  );
}
