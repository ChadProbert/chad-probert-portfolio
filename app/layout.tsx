import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeProvider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Chad Probert",
  description: "Chad Probert's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${geist.className} ${geist.variable}`}>
        <div className="blur-overlay"></div>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
