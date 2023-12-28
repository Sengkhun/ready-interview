import Image from "next/image";
import Link from "next/link";

import moment from "moment";

import constant, { MENU } from "@/constant";

import RadiusInvertedIcon from "@/icons/RadiusInvertedIcon";

const radiusSize = "2rem";

export default function Footer() {
  return (
    <footer
      className={`sticky bottom-0 rounded-tl-[${radiusSize}] bg-secondary-light py-14 lg:py-20`}
    >
      <div className="ri-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:mb-4">
          <div className="flex flex-row justify-center lg:justify-start mb-8 lg:mb-0">
            {/* Full Logo */}
            <Link
              href="/"
              title={`${constant.name} - Home`}
              className="block w-28 lg:w-36"
            >
              <Image
                className="w-full"
                src="/images/logos/logo-full.svg"
                width={120}
                height={100}
                alt={`${constant.name} Logo`}
                priority={true}
              />
            </Link>
          </div>
          <div className="text-center lg:flex lg:flex-row lg:items-end lg:text-left mb-8 lg:mb-0">
            {/* Menu */}
            <ul className="flex flex-col lg:flex-row items-center">
              {MENU.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.path}
                    title={`${constant.name} - ${item.title}`}
                    className="flex flex-row justify-center items-center px-12 py-3 lg:py-4 transition-all text-xl hover:text-black"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:col-start-2 text-center lg:text-left px-12">
            {`© Copy right ${moment().format("YYYY")} ${
              constant.name
            }. All right reserved.`}
          </div>
        </div>
      </div>

      {/* Top inverted radius */}
      <div
        className={`absolute top-[-${radiusSize}] right-0 w-[${radiusSize}] h-[${radiusSize}]`}
      >
        <RadiusInvertedIcon className="fill-secondary-light" />
      </div>
    </footer>
  );
}
