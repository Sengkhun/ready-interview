"use client";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Label from "@/components/Label";

interface inputProps {
  containerClass?: string;
  label?: string;
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function Input(props: inputProps) {
  // Variables
  const {
    containerClass = "",
    label,
    type = "text",
    name = "",
    id = "",
    placeholder = "",
  } = props;

  return (
    <div className={containerClass}>
      {label ? <Label name={name}>{label}</Label> : null}

      <div className="relative rounded-md">
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div> */}
        <input
          type={type}
          name={name}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-primary sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
