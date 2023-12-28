import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

// Configure Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ready Interview",
  description: "Get your job ready before an interview.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="text-default">
        <body className={`${poppins.variable} font-sans`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
