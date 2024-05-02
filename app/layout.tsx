import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import CurvedText from "@/components/curved-text";

export const metadata: Metadata = {
  title: "Kim & Yuns Newsletter",
  description: "Hi mom and dad",
};

const karrik = localFont({ src: [
  {
    path: '../public/fonts/Karrik-Regular.woff2',
    style: 'normal',
  },
  {
    path: '../public/fonts/Karrik-Italic.woff2',
    style: 'italic',
  },
] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={karrik.className} lang="en">
      <body className="flex flex-col justify-center items-center p-8 sm:p-12">
        <a href="/" >
          <h1 className="text-5xl sm:text-8xl">Kim & Yuns</h1>
        </a>
        <div className="w-80 flex">
          <CurvedText text="Established in 2024" radius={90} centerX={0} centerY={0} />  
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
