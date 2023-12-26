import { getXataClient } from "@/xata";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Home = async () => {
  const xataClient = getXataClient();
  const blogs = await xataClient.db.blogs.getMany();
  return (
    <main className={`${poppins.variable} font-sans bg-white`}>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <Navbar />
    </main>
  );
};

export default Home;
