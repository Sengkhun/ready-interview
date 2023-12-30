import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/Button";

export default function SearchBox() {
  return (
    <>
      <div className="overflow-hidden flex flex-row text-lg lg:text-2xl justify-between items-center rounded-xl border-solid border-[3px] transition-all border-primary px-4 lg:px-8 mb-8">
        <div className="flex flex-row flex-1 items-center">
          <FontAwesomeIcon
            className="fa-xl text-primary mr-2"
            icon={faMagnifyingGlass}
          />
          <input
            type="text"
            placeholder="Interview tips"
            className="outline-0 flex-1 py-6 px-2 lg:px-4"
          />
        </div>

        {/* Action button for medium device up */}
        <Button
          href="#"
          type="primary"
          title="Search"
          className="hidden lg:block lg:py-2 text-base ml-4"
        >
          Search
        </Button>
      </div>

      {/* Action button for small device */}
      <div className="flex flex-row justify-end lg:hidden">
        <Button
          href="#"
          type="primary"
          title="Search"
          className="lg:py-2 text-base mt-3"
        >
          Search
        </Button>
      </div>
    </>
  );
}
