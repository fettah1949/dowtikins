import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Brand Name Generator & Availability Checker | DowTikins",
  description: "Generate catchy, unique brand name ideas for your business, startup, or project. Instantly check domain (.com), Facebook, Instagram, TikTok, and YouTube username availability for free.",
  keywords: ["brand name generator", "domain availability checker", "business name generator", "username checker", "company name ideas", "startup name generator", "free brand name generator", "creative business names", "facebook username checker", "instagram username checker", "tiktok username checker", "youtube username checker"],
  authors: [{ name: "DowTikins" }],
  creator: "DowTikins",
  publisher: "DowTikins",
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
  alternates: {
    canonical: "https://dowtikins.com/brand-name-generator",
  },
  openGraph: {
    title: "Free Brand Name Generator & Availability Checker | DowTikins",
    description: "Generate catchy, unique brand name ideas for your business, startup, or project. Instantly check domain (.com), Facebook, Instagram, TikTok, and YouTube username availability for free.",
    url: "https://dowtikins.com/brand-name-generator",
    type: "website",
    siteName: "DowTikins",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DowTikins Brand Name Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Brand Name Generator & Availability Checker",
    description: "Generate catchy, unique brand name ideas for your business, startup, or project. Instantly check domain (.com), Facebook, Instagram, TikTok, and YouTube username availability for free.",
    site: "@dowtikins",
    images: ["/twitter-image.png"],
  }
}

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DowTikins Brand Name Generator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description: "Free tool to generate unique brand names and instantly check domain, Facebook, Instagram, TikTok, and YouTube username availability.",
  url: "https://dowtikins.com/brand-name-generator",
}

export default function BrandNameGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        suppressHydrationWarning
      />
      {children}
    </>
  )
}
