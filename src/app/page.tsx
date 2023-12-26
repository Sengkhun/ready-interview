import { getXataClient } from "@/xata";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const xataClient = getXataClient();
  const blogs = await xataClient.db.blogs.getMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserButton afterSignOutUrl="/" />
      <div>Hello</div>
      {blogs.map((blog) => (
        <p key={blog.id}>{blog.name}</p>
      ))}
    </main>
  );
}
