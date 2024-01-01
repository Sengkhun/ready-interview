interface radiusInvertedProps {
  className?: string;
}

export default function RadiusInvertedIcon(props: radiusInvertedProps) {
  return (
    <svg viewBox="0 0 640 960" xmlns="http://www.w3.org/2000/svg">
      <path
        className={props.className}
        d="m0 640v320h640v-960c0 353.46-286.54 640-640 640z"
        fill="#fff"
      />
    </svg>
  );
}
