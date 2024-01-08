import { removeExtraSpaces } from "@/utils/helper";
import Link from "next/link";

interface buttonProps {
  title: string;
  href: string;
  target?: string;
  className?: string;
  type?: "primary" | "secondary";
  size?: "sm";
  children: React.ReactNode;
}

export default function Button(props: buttonProps) {
  // Variables
  const { type } = props;
  let className = `btn ${
    type ? `btn-${type} bg-${type} hover:bg-${type}-dark` : ""
  }`;
  className += props.size ? " btn-" + props.size : "";
  className += props.className ? " " + props.className : "";

  return (
    <Link
      title={props.title}
      target={props.target}
      href={props.href}
      className={removeExtraSpaces(className)}
    >
      {props.children}
    </Link>
  );
}
