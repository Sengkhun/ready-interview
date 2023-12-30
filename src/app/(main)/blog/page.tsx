import constant from "@/constant";

import CardBlog from "@/components/CardBlog";
import SearchBox from "@/components/SearchBox";

export default function Blog() {
  // Temp variables
  const blogs = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div className="ri-container py-8 lg:py-12">
      {/* Page title */}
      <h1 className="text-center mb-12">{constant.name} Blog</h1>

      {/* Blog search */}
      <SearchBox />

      {/* Blog results */}
      <div className="h2">
        <span className="text-primary font-semibold	">Articles: </span> 33 found
      </div>

      {/* List of Blog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-16">
        {blogs.map((index) => (
          <CardBlog key={index} />
        ))}
      </div>
    </div>
  );
}
