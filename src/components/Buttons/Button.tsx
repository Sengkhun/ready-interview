import Link from "next/link";

interface buttonProps {
  title: string;
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button(props: buttonProps) {
  return (
    <Link title={props.title} href={props.href} className={props.className}>
      {props.children}
    </Link>
  );
}
