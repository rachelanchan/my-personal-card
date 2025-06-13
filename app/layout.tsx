import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Import Nunito font from Google Fonts
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize as needed
});

export const metadata: Metadata = {
  title: "Rachel Anchan |  Business Card",
  description: "Software Developer | Personal Digital Card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
