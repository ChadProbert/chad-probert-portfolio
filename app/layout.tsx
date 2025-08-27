import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "./context/ThemeProvider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Chad Probert |  Web Developer",
  description: "Chad Probert's developer portfolio",
  keywords: ["Chad Probert", "Web Developer", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </body>
    </html>
  );
}
