import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/main/StarBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This my space portfolio written in Nextjs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
