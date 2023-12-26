import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ready Interview",
    short_name: "Ready Interview",
    description: "Get your job ready before an interview.",
    start_url: "/",
    display: "standalone",
    background_color: "#FB8502",
    theme_color: "#FB8502",
    icons: [
      {
        src: "/favicon/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
