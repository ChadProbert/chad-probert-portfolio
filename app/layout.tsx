import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "./context/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

// Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://chad-probert-portfolio.vercel.app"),
  title: "Chad Probert | Web Developer | Portfolio",
  description:
    "Chad Probert - Web Developer in South Africa. Shipping fast React/Next.js SEO-ready builds. View my portfolio to find out more about me and get in touch.",
  authors: [{ name: "Chad Probert" }],
  creator: "Chad Probert",
  publisher: "Chad Probert",
  alternates: { canonical: "./" },
  openGraph: {
    title: "Chad Probert | Web Developer | Portfolio",
    description:
      "Chad Probert - Web Developer in South Africa. Shipping fast React/Next.js SEO-ready builds. View my portfolio to find out more about me and get in touch.",
    url: "https://chad-probert-portfolio.vercel.app",
    siteName: "Chad Probert's Developer Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image-1200x630.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chad Probert | Web Developer | Portfolio",
    description:
      "Chad Probert - Web Developer in South Africa. Shipping fast React/Next.js SEO-ready builds. View my portfolio to find out more about me and get in touch.",
    images: ["/og-image-1200x600.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/about-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#25292e" />
         <link rel="icon" type="image/svg+xml" href="/about-icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Chad Probert",
              "jobTitle": "Coding Mentor",
              "worksFor": {
                "@type": "Organization",
                "name": "HyperionDev"
              },
              "url": "https://chad-probert-portfolio.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/chad-probert-6421b321b/",
                "https://github.com/ChadProbert"
              ]
            }).replace(/</g, "\\u003c")
          }}
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
        <SpeedInsights />
      </body>
    </html>
  );
}
