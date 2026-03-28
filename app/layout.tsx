import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DowTikins - Best Free TikTok & Instagram Video Downloader 2024",
  description: "Download TikTok videos & Instagram Reels in seconds! Fast, free, no watermark. Save your favorite videos easily with DowTikins.",
  keywords: ["TikTok video downloader", "Instagram Reels downloader", "download TikTok videos without watermark", "Instagram video saver", "TikTok to MP4 downloader", "Instagram Reels download online", "free video downloader", "save TikTok videos", "Instagram video download tool", "TikTok watermark remover", "Instagram video to MP4", "best TikTok downloader 2024", "Instagram Reels save app", "TikTok video link downloader", "how to download TikTok videos", "Instagram Reels downloader without watermark", "TikTok video download online free"],
  authors: [{ name: "DowTikins" }],
  creator: "DowTikins",
  publisher: "DowTikins",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dowtikins.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dowtikins.com",
    title: "DowTikins - Best Free TikTok & Instagram Video Downloader 2024",
    description: "Download TikTok videos & Instagram Reels in seconds! Fast, free, no watermark. Save your favorite videos easily with DowTikins.",
    siteName: "DowTikins",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DowTikins - TikTok & Instagram Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DowTikins - Best Free TikTok & Instagram Video Downloader 2024",
    description: "Download TikTok videos & Instagram Reels in seconds! Fast, free, no watermark. Save your favorite videos easily with DowTikins.",
    images: ["/twitter-image.png"],
    creator: "@dowtikins",
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
  verification: {
    google: "your-google-verification-code",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "DowTikins",
  description: "Download TikTok videos & Instagram Reels in seconds! Fast, free, no watermark. Save your favorite videos easily with DowTikins.",
  url: "https://dowtikins.com",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download TikTok videos",
    "Download Instagram Reels",
    "No watermark downloads",
    "High quality video downloads",
    "Fast and free service",
  ],
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DowTikins",
  url: "https://dowtikins.com",
  logo: "https://dowtikins.com/logo.png",
  description: "Best free TikTok and Instagram video downloader",
  sameAs: [
    "https://twitter.com/dowtikins",
    "https://facebook.com/dowtikins",
    "https://instagram.com/dowtikins",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1841159989456495"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
