interface radiusInvertedProps {
  className?: string;
}

export default function RadiusInvertedIcon(props: radiusInvertedProps) {
  return (
    <svg viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg">
      <path
        className={props.className}
        fill="#fff"
        d="m0 640h640v-640c0 353.46-286.54 640-640 640z"
      />
    </svg>
  );
}
