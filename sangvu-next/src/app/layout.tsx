import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

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
  title: "Vũ Phan Hoài Sang - Full Stack Developer Portfolio",
  description: "Passionate Full Stack Developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and get in touch for collaboration opportunities.",
  keywords: "Full Stack Developer, React, Next.js, TypeScript, Web Development, Portfolio, Vũ Phan Hoài Sang",
  authors: [{ name: "Vũ Phan Hoài Sang" }],
  openGraph: {
    title: "Vũ Phan Hoài Sang - Full Stack Developer Portfolio",
    description: "Passionate Full Stack Developer creating exceptional digital experiences",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
