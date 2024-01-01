import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination() {
  // Variables
  const arrowClass = "bg-primary";

  return (
    <ul className="flex flex-row flex-wrap justify-center items-center text-primary">
      <li>
        <Link title="Previous page" href="#" className="p-4">
          <FontAwesomeIcon
            className="fa-xl transition-all"
            icon={faChevronLeft}
          />
        </Link>
      </li>
      <li>
        <Link
          title="Page 1"
          href="#"
          className="text-default text-2xl font-medium p-4"
        >
          1
        </Link>
      </li>
      <li>
        <Link
          title="Page 2"
          href="#"
          className="text-default text-2xl font-medium p-4"
        >
          2
        </Link>
      </li>
      <li>
        <Link title="Next page" href="#" className="p-4">
          <FontAwesomeIcon
            className="fa-xl transition-all"
            icon={faChevronRight}
          />
        </Link>
      </li>
    </ul>
  );
}
