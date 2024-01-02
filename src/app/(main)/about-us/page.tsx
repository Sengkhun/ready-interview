import { Metadata } from "next";

import constant from "@/constant";

export const metadata: Metadata = {
  title: `About Us | ${constant.name}`,
};

export default function About() {
  return <div>About Us</div>;
}
