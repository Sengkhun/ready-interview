"use client";

import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user, isLoaded } = useUser();

  // if (isLoaded) {
  //   console.log(user);
  //   return <div>GOOD</div>;
  // }

  return <div>Dashboard</div>;
}
