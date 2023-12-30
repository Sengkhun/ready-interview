import RadiusInvertedIcon from "@/icons/RadiusInvertedIcon";

interface radiusInvertedProps {
  color: string;
  size: string;
}

export default function RadiusInverted(props: radiusInvertedProps) {
  // Variables
  const { color = "primary", size = "2rem" } = props;

  return (
    <div
      style={{
        position: "absolute",
        top: `-${size}`,
        right: 0,
        width: size,
        height: size,
      }}
    >
      <RadiusInvertedIcon className={`fill-${color}`} />
    </div>
  );
}
