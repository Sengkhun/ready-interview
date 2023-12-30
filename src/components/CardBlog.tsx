import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import RadiusInverted from "@/components/RadiusInverted";

export default function CardBlog() {
  const radiusSize = "2rem";
  return (
    <div
      className="relative overflow-hidden shadow-lg group/container"
      style={{ borderRadius: radiusSize }}
    >
      <Link href="#" title="Read More About Job interview tips">
        <div className="relative">
          {/* Image */}
          <div
            className="relative block w-full h-0"
            style={{ paddingTop: `calc(75% + ${radiusSize})` }}
          >
            <Image
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover transition-all duration-300 group-hover/container:scale-105"
              src="/images/blogs/interview.jpg"
              width={1090}
              height={818}
              alt="Image"
            />
          </div>

          {/* Badge */}
          <div
            className="absolute top-0 left-0 bg-secondary-light py-2 pr-4 rounded-tr-md rounded-br-md"
            style={{ paddingLeft: `calc(${radiusSize} - 0.5em)` }}
          >
            2 min read
          </div>
        </div>
        <div
          className="relative bg-primary text-white px-8 py-8"
          style={{
            borderTopLeftRadius: radiusSize,
            marginTop: `-${radiusSize}`,
          }}
        >
          {/* title */}
          <h3>Job interview tips</h3>

          {/* Top inverted radius */}
          <RadiusInverted color="primary" size={radiusSize} />
        </div>
      </Link>

      {/* Favorite */}
      <Link
        className="absolute top-2"
        style={{ right: radiusSize }}
        href="#"
        title="Mark as Favorite"
      >
        <FontAwesomeIcon
          className="fa-xl transition-all text-secondary"
          icon={faHeart}
        />
      </Link>
    </div>
  );
}
