import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata: Metadata = {
  title: "Prostore",
  description: "Modern e-commerce platform builded with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
