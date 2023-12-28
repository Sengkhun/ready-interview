import Navbar from "@/components/Navbar";

interface mainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: mainLayoutProps) {
  return (
    <main>
      <Navbar />
      {props.children}
    </main>
  );
}
