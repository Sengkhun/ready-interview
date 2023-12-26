import { Poppins } from "next/font/google";
import { getXataClient } from "@/xata";
import { UserButton } from "@clerk/nextjs";

import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Home = async () => {
  // const xataClient = getXataClient();
  // const blogs = await xataClient.db.blogs.getMany();
  return (
    <main className={`${poppins.variable} font-sans lg:container lg:mx-auto`}>
      <UserButton afterSignOutUrl="/" />
      <Navbar />
    </main>
  );
};

export default Home;
