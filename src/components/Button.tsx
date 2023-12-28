import { removeExtraSpaces } from "@/utils/helper";
import Link from "next/link";

interface buttonProps {
  title: string;
  href: string;
  className?: string;
  type?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button(props: buttonProps) {
  // Variables
  const { type } = props;
  const className = `btn ${
    type
      ? `bg-${type} text-white hover:bg-${type}-dark focus:bg-${type}-dark active:bg-${type}-dark`
      : ""
  } ${props.className}`;

  return (
    <Link
      title={props.title}
      href={props.href}
      className={removeExtraSpaces(className)}
    >
      {props.children}
    </Link>
  );
}
