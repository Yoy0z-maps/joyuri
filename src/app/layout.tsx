import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const pretendardBold = localFont({
  src: "./fonts/Pretendard-Bold.otf",
  variable: "--font-pretendard-bold",
});
const pretendardMedium = localFont({
  src: "./fonts/Pretendard-Medium.otf",
  variable: "--font-pretendard-medium",
});
const pretendardRegular = localFont({
  src: "./fonts/Pretendard-Regular.otf",
  variable: "--font-pretendard-regular",
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
      <body
        className={`${pretendardBold.variable} ${pretendardMedium.variable} ${pretendardRegular.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
