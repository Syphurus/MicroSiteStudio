import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import CleanNavigation from "@/components/sections/CleanNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Microsite Studio - Premium Web Design for Fitness Professionals",
  description:
    "Transform your fitness business with luxury, high-converting websites. Premium web design for fitness coaches, gym owners, and personal trainers worldwide.",
  keywords: [
    "fitness web design",
    "gym website",
    "personal trainer website",
    "fitness coach website",
    "premium web design",
  ],
  authors: [{ name: "Microsite Studio" }],
  creator: "Microsite Studio",
  publisher: "Microsite Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://micrositestudio.com",
    siteName: "Microsite Studio",
    title: "Microsite Studio - Premium Web Design for Fitness Professionals",
    description:
      "Transform your fitness business with luxury, high-converting websites. Premium web design for fitness coaches, gym owners, and personal trainers worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Microsite Studio - Premium Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsite Studio - Premium Web Design for Fitness Professionals",
    description:
      "Transform your fitness business with luxury, high-converting websites.",
    images: ["/og-image.jpg"],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <CleanNavigation />
        {children}
      </body>
    </html>
  );
}
