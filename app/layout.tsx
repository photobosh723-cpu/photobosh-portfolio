import type { Metadata } from "next";
import { Syne, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import SmoothScroll from "../components/SmoothScroll";
import PageTransition from "../components/PageTransition";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PhotoBosh — Bishoy Ephraiem | Cinematographer & Visual Director",
  description:
    "Portfolio of Bishoy Ephraiem , a creative Cinematographer and Photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${playfair.variable} ${jakarta.variable}`}
    >
     <body>
  <CustomCursor />
  <SmoothScroll>
    <PageTransition>
  {children}
</PageTransition>
  </SmoothScroll>
</body>
    </html>
  );
}