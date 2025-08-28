import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "./context/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Chad Probert | Web Developer",
  description:
    "Professional portfolio of Chad Probert, a Web Developer specialising in modern web technologies. Check out my projects, skills, and get in touch for collaboration opportunities.",
  keywords: [
    "Chad Probert",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Chad Probert" }],
  creator: "Chad Probert",
  publisher: "Chad Probert",
  openGraph: {
    title: "Chad Probert | Web Developer",
    description:
      "Professional portfolio of Chad Probert, a Web Developer specialising in modern web technologies. Check out my projects, skills, and get in touch for collaboration opportunities.",
    url: "https://chad-probert-portfolio.vercel.app",
    siteName: "Chad Probert Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chad Probert | Web Developer",
    description:
      "Professional portfolio of Chad Probert, a Web Developer specialising in modern web technologies. Check out my projects, skills, and get in touch for collaboration opportunities.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1, // Prevents video previews
      "max-image-preview": "large", // Allows large image previews
      "max-snippet": -1, // Prevents text snippets
    },
  },
  icons: {
    icon: "/about-icon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata?.description ?? ""} />
        <meta name="theme-color" content="#000000" />
        <link
          rel="canonical"
          href="https://chad-probert-portfolio.vercel.app/"
        />
        {/* Set theme from localStorage or system preference. Although dangerouslySetInnerHTML is not recommended, 
        it is the recommended way to set the theme in this case. The practice is safe when the injected code is static
        and does not contain any user-provided data. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem('theme');
                const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = stored === 'light' || stored === 'dark' ? stored : systemPref;
                const root = document.documentElement;
                if (theme === 'dark') root.classList.add('dark');
                else root.classList.remove('dark');
              } catch (e) {}
            })();`,
          }}
        />
      </head>
      <body className={`${geist.className} ${geist.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
