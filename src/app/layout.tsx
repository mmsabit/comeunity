import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/component/Navber";
import Footer from "@/component/Footer";

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
  title: "CommUnity — Unite for Change",
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
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
        <Navber/>
        <main className="w-full bg-surface min-h-[calc(100vh-80px)]">{children}</main>
        
        <Footer/>
      </body>   
    </html>
  );
}
