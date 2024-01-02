import { User } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs";

import { ROLES } from "@/constant";

export function removeExtraSpaces(val: string) {
  return val.replace(/\s+/g, " ").trim();
}

export function checkUserRole(user: User | null, role: string) {
  if (!user?.publicMetadata?.role) {
    // Check if user current sign in, assign role 'user' to the account
    if (user?.id) {
      clerkClient.users.updateUserMetadata(user.id, {
        publicMetadata: { role: ROLES.user },
      });
    }

    return false;
  }

  return user.publicMetadata.role === role;
}
