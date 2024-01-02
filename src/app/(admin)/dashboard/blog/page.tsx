import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import constant, { DASHBOARD_LINK } from "@/constant";
import Button from "@/components/Button";

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <div>
        <Button
          type="primary"
          href={`${DASHBOARD_LINK.path}/blog/add`}
          title={`${constant.name} - Add New Blog`}
        >
          <FontAwesomeIcon className="mr-2" icon={faAdd} />
          Add New
        </Button>
      </div>
    </div>
  );
}
