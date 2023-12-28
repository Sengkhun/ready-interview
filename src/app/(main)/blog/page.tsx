import SearchBox from "@/components/SearchBox";
import constant from "@/constant";

export default function Blog() {
  return (
    <div className="ri-container py-8 lg:py-12">
      <h1 className="text-center mb-12">{constant.name} Blog</h1>
      <SearchBox />
    </div>
  );
}
