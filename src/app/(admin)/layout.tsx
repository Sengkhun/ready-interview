import { redirect } from "next/navigation";

import { currentUser } from "@clerk/nextjs";

import { checkUserRole } from "@/utils/helper";
import AdminLayout from "@/layouts/AdminLayout";
import { ROLES } from "@/constant";

interface layoutProps {
  children: React.ReactNode;
}

export default async function Layout(props: layoutProps) {
  // Only allow admin user to access this dashboard
  const user = await currentUser();
  const isAdmin = await checkUserRole(user, ROLES.admin);

  // Check if user is not an admin, redirect to home page
  if (!isAdmin) {
    redirect("/");
  }

  return (
    <main className="flex flex-row">
      <AdminLayout>{props.children}</AdminLayout>
    </main>
  );
}
