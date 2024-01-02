import { Metadata } from "next";
import { getXataClient } from "@/xata";

import constant from "@/constant";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: `Home | ${constant.name}`,
};

export default async function Home() {
  // const xataClient = getXataClient();
  // const blogs = await xataClient.db.blogs.getMany();
  return <div>Home</div>;
}
