import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TGS2025 - Moderni kotisivu Next.js 15 & Tailwind CSS",
  description: "Moderni verkkosivusto, joka on rakennettu Next.js 15:llä, Tailwind CSS:llä ja shadcn/ui komponenteilla. Valmis integroitavaksi Strapi CMS:n kanssa.",
  keywords: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Strapi", "CMS", "TypeScript"],
  authors: [{ name: "TGS2025" }],
  creator: "TGS2025",
  publisher: "TGS2025",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tgs2025.fi"),
  openGraph: {
    title: "TGS2025 - Moderni kotisivu",
    description: "Moderni verkkosivusto Next.js 15:llä ja Tailwind CSS:llä",
    type: "website",
    locale: "fi_FI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
