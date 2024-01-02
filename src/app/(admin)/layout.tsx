import { redirect } from "next/navigation";

import { auth, currentUser } from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";

import { checkUserRole } from "@/utils/helper";

interface adminLayoutProps {
  children: React.ReactNode;
}

export default async function AdminLayout(props: adminLayoutProps) {
  // Hooks
  const { userId } = auth();

  if (userId) {
    const user = await currentUser();

    console.log(checkUserRole(user, "admin"));

    // redirect("/");
    // Query DB for user specific information or display assets only to logged in users
  }

  // const { isLoaded, session, isSignedIn } = useSession();

  // if (isLoaded) {
  //   const userRole = checkUserRole(session);
  //   console.log(userRole);
  //   return <div>NEW</div>;
  // }

  return <main>{props.children}</main>;
}
