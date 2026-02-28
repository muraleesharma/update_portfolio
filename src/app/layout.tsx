import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Muralee G | Full Stack Developer",
  description: "Passionate about building web apps, android applications, AI apps, and performance-driven digital products.",
  keywords: ["Full Stack Developer", "AI/Data Engineer", "Freelancer", "Portfolio", "AI Integrations", "Flutter", "Django"],
  authors: [{ name: "Muralee G" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Muralee G - Portfolio",
    description: "Passionate about building web apps, android applications, AI apps, and performance-driven digital products.",
    siteName: "Muralee G Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-black text-white min-h-screen selection:bg-white/20 selection:text-white`}>
        {/* Ambient global glow */}
        <div className="fixed inset-0 z-[-1] min-h-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1a1025_100%)]"></div>
        {children}
      </body>
    </html>
  );
}
