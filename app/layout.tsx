import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Henter Sistemas",
  description: "A startup that creates and provides support for django projects and also help begginer developers start in the bussines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] text-gray-950 relative h-[5000px]`}>

        <Header />
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
