import { Poppins } from "next/font/google";
import { getXataClient } from "@/xata";

import Navbar from "@/components/Navbar";

// Configure Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default async function Home() {
  // const xataClient = getXataClient();
  // const blogs = await xataClient.db.blogs.getMany();
  return (
    <main className={`${poppins.variable} font-sans *:px-3 lg:*:px-0`}>
      <Navbar />
    </main>
  );
}
