import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/blocks/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    title: "The Good Side",
    description: "Strategic Design partner for SaaS companies",
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
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
