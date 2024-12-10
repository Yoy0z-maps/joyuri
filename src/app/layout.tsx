import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const pretendardFont = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JOYURI OFFICIAL",
  description: "All about Joyuri in this website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendardFont.variable}>{children}</body>
    </html>
  );
}
