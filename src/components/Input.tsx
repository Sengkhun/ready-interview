"use client";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface inputProps {
  containerClass?: string;
  inputClass?: string;
  type: string;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function Input(props: inputProps) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`w-full border rounded-md px-4 py-2 focus:outline-primary${
        props.inputClass ? " " + props.inputClass : ""
      }`}
      onFocus={() => console.log("FOUCS")}
      onBlur={() => console.log("Blur")}
    />
  );
}
