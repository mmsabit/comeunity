import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/component/Navber/Navber";
import Footer from "@/component/Footer";
import { ToastContainer } from "react-toastify";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CommUnity — Unite for Change. Organize and Join Local Community Events That Matter.",
  description:
    "A community-first platform designed to mobilize neighbors, champion grassroots civic projects, clean public spaces, and organize meaningful social service initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`scroll-smooth ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#fafbff] text-slate-900 antialiased selection:bg-brand-500 selection:text-white min-h-screen flex flex-col font-sans">
        <Navber />
        <main className="w-full flex-1">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
