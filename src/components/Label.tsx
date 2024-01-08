interface labelProps {
  name?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Label(props: labelProps) {
  // Variables
  const { name, className, children } = props;

  return (
    <label
      htmlFor={name}
      className={`block text-sm font-medium leading-6 text-default mb-2${
        className ? " " + className : ""
      }`}
    >
      {children}
    </label>
  );
}
