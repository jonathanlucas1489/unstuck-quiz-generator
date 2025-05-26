import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import RQProvider from "./providers/QueryClientProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Unstuck Quiz Generator",
  description: 	"Generate quiz quiz your course materials, or textbooks to help you study faster and smarter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
}