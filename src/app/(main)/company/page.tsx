import { Metadata } from "next";

import constant from "@/constant";

export const metadata: Metadata = {
  title: `Company | ${constant.name}`,
};

export default function Company() {
  return <div>Company</div>;
}
