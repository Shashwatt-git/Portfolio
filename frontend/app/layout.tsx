import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], weight: ["800"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Shashwat Chandel — Portfolio",
  description: "AI, Backend & Security engineer portfolio"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} bg-background text-text`}>
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
