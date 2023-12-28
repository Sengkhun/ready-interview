import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface mainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: mainLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
