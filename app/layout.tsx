import type { Metadata } from "next";
import { Inter, Manrope, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/home/navbar/Navbar";

const poppins = Manrope({
  subsets: ["cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Investment site",
  description: "Loading...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
