"use client";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface inputProps {
  containerClass?: string;
  iconClass?: string;
  icon?: IconDefinition;
  inputClass?: string;
  type: string;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function Input(props: inputProps) {
  return (
    <div
      className={`flex flex-row flex-1 items-center${
        props.containerClass ? " " + props.containerClass : ""
      }`}
    >
      {props.icon ? (
        <FontAwesomeIcon className={props.iconClass} icon={props.icon} />
      ) : null}
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.inputClass}
        onFocus={() => console.log("FOUCS")}
        onBlur={() => console.log("Blur")}
      />
    </div>
  );
}
