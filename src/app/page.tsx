import { Poppins } from "next/font/google";
import { getXataClient } from "@/xata";

import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default async function Home() {
  // const xataClient = getXataClient();
  // const blogs = await xataClient.db.blogs.getMany();
  return (
    <main
      className={`${poppins.variable} font-sans container mx-auto *:px-3 lg:*:px-0`}
    >
      <Navbar />
    </main>
  );
}
