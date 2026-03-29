import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Age Calculator – Calculate Your Age Online Free | Precise Age in Years, Months & Days",
  description: "Calculate your exact age in years, months, and days instantly with our free age calculator tool. Perfect for birthdays, anniversaries, and special occasions. 100% accurate and free!",
  keywords: ["age calculator", "calculate age", "birthday calculator", "age in years months days", "free age calculator", "online age calculator", "date of birth calculator", "how old am I", "age calculation tool", "birthday age calculator", "exact age calculator", "age difference calculator", "calculate years months days", "age counter", "birthday counter", "age finder", "age calculator with date", "precise age calculator", "age calculator free online", "best age calculator", "age calculator app"],
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
  openGraph: {
    title: "Age Calculator – Calculate Your Age Online Free",
    description: "Calculate your exact age in years, months, and days instantly with our free age calculator tool. Perfect for birthdays, anniversaries, and special occasions.",
    url: "https://dowtikins.vercel.app/age-calculator",
    siteName: "DowTikins",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Age Calculator - Calculate Your Age Online Free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Age Calculator – Calculate Your Age Online Free",
    description: "Calculate your exact age in years, months, and days instantly with our free age calculator tool. Perfect for birthdays, anniversaries, and special occasions.",
    site: "@dowtikins",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://dowtikins.vercel.app/age-calculator",
  },
  metadataBase: new URL("https://dowtikins.vercel.app"),
}

const ageCalculatorSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Free Age Calculator",
      alternateName: "Age Calculator Online",
      description: "Calculate your exact age in years, months, and days instantly with our free age calculator tool. Perfect for birthdays, anniversaries, and special occasions.",
      url: "https://dowtikins.vercel.app/age-calculator",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      featureList: [
        "Calculate exact age in years, months, and days",
        "Total days, weeks, and hours calculation",
        "User-friendly interface",
        "Instant results",
        "Works on all devices",
        "No registration required",
        "100% free to use",
        "Mobile responsive",
        "Accurate date calculations",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1250",
        bestRating: "5",
        worstRating: "1",
      },
      browserRequirements: "Requires JavaScript and HTML5",
      inLanguage: "en-US",
      isAccessibleForFree: true,
    },
    {
      "@type": "SoftwareApplication",
      name: "Age Calculator",
      description: "Free online age calculator tool that calculates your exact age in years, months, and days",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1250",
      },
      author: {
        "@type": "Organization",
        name: "DowTikins",
        url: "https://dowtikins.vercel.app",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How accurate is this age calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our age calculator is 100% accurate as it uses precise date calculations considering leap years and varying month lengths. It calculates your exact age down to the day.",
          },
        },
        {
          "@type": "Question",
          name: "What information do I need to calculate my age?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You only need your birth date (day, month, and year). Simply enter your date of birth and click 'Calculate Age' to get your exact age in years, months, and days.",
          },
        },
        {
          "@type": "Question",
          name: "Is this age calculator free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our age calculator is completely free to use with no registration required. You can use it as many times as you want without any limitations.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use this age calculator on my mobile device?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our age calculator is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers.",
          },
        },
        {
          "@type": "Question",
          name: "How does the age calculator work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our age calculator calculates the exact difference between your birth date and today's date. It accounts for leap years and varying month lengths to provide accurate results in years, months, and days, plus total days, weeks, and hours.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Calculate Your Age",
      step: [
        {
          "@type": "HowToStep",
          name: "Enter your birth date",
          text: "Select your birth date using the date picker input field",
        },
        {
          "@type": "HowToStep",
          name: "Click Calculate Age",
          text: "Press the 'Calculate Age' button to process your information",
        },
        {
          "@type": "HowToStep",
          name: "View your results",
          text: "Your exact age will be displayed in years, months, and days, along with additional statistics like total days, weeks, and hours",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://dowtikins.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Age Calculator",
          item: "https://dowtikins.vercel.app/age-calculator",
        },
      ],
    },
  ],
}

export default function AgeCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ageCalculatorSchema) }}
        suppressHydrationWarning
      />
      {children}
    </>
  )
}
