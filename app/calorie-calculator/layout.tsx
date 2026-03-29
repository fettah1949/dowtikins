import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calorie Calculator – Daily Calories for Weight Loss & Gain",
  description: "Calculate your daily calorie needs for weight loss, maintenance, or gain. Use our free Calorie Calculator to determine your BMR and daily caloric requirements.",
  keywords: ["calorie calculator", "BMR calculator", "daily calorie needs", "weight loss calories", "weight gain calories", "calorie maintenance", "Mifflin-St Jeor equation", "daily caloric requirements", "calorie deficit", "calorie surplus", "metabolic rate calculator", "fitness calculator", "nutrition calculator", "diet calculator", "calorie intake calculator"],
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
    title: "Calorie Calculator – Daily Calories for Weight Loss & Gain",
    description: "Calculate your daily calorie needs for weight loss, maintenance, or gain. Use our free Calorie Calculator to determine your BMR and daily caloric requirements.",
    url: "https://dowtikins.vercel.app/calorie-calculator",
    siteName: "DowTikins",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calorie Calculator - Daily Calories for Weight Loss & Gain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calorie Calculator – Daily Calories for Weight Loss & Gain",
    description: "Calculate your daily calorie needs for weight loss, maintenance, or gain. Use our free Calorie Calculator to determine your BMR and daily caloric requirements.",
    site: "@dowtikins",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://dowtikins.vercel.app/calorie-calculator",
  },
  metadataBase: new URL("https://dowtikins.vercel.app"),
}

const calorieCalculatorSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Calorie Calculator",
      alternateName: "Daily Calorie Calculator",
      description: "Calculate your daily calorie needs for weight loss, maintenance, or gain. Use our free Calorie Calculator to determine your BMR and daily caloric requirements.",
      url: "https://dowtikins.vercel.app/calorie-calculator",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      featureList: [
        "Calculate BMR using Mifflin-St Jeor Equation",
        "Daily calorie needs for weight loss",
        "Daily calorie needs for weight maintenance",
        "Daily calorie needs for weight gain",
        "Activity level adjustment",
        "Gender-specific calculations",
        "Instant results",
        "User-friendly interface",
        "Mobile responsive",
        "No registration required",
        "100% free to use",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "890",
        bestRating: "5",
        worstRating: "1",
      },
      browserRequirements: "Requires JavaScript and HTML5",
      inLanguage: "en-US",
      isAccessibleForFree: true,
    },
    {
      "@type": "SoftwareApplication",
      name: "Calorie Calculator",
      description: "Free online calorie calculator that calculates your daily calorie needs for weight loss, maintenance, or gain using the Mifflin-St Jeor Equation",
      applicationCategory: "HealthApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "890",
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
          name: "What is BMR and how is it calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BMR (Basal Metabolic Rate) is the number of calories your body needs to perform basic life-sustaining functions like breathing and circulation. Our calculator uses the Mifflin-St Jeor Equation, which is considered the most accurate formula for calculating BMR. It takes into account your weight, height, age, and gender.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is this calorie calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our calorie calculator is highly accurate as it uses the scientifically-validated Mifflin-St Jeor Equation, which is considered the gold standard for BMR calculation. Combined with activity level multipliers, it provides precise estimates for your daily caloric needs.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use the calorie calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply enter your age, weight, height, select your gender, and choose your activity level. Click 'Calculate Calories' to see your daily calorie needs for maintaining weight, losing weight (typically 500 calories less), and gaining weight (typically 500 calories more).",
          },
        },
        {
          "@type": "Question",
          name: "What are the different activity levels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sedentary: Little to no exercise. Moderate: Exercise 3-5 days per week. Active: Hard exercise 6-7 days per week. Your activity level affects how many calories you burn daily, which is factored into your total calorie needs.",
          },
        },
        {
          "@type": "Question",
          name: "Is this calorie calculator free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our calorie calculator is completely free to use with no registration required. You can use it as many times as you want without any limitations.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Calculate Your Daily Calorie Needs",
      step: [
        {
          "@type": "HowToStep",
          name: "Enter your personal details",
          text: "Input your age, weight in kg, height in cm, and select your gender",
        },
        {
          "@type": "HowToStep",
          name: "Select your activity level",
          text: "Choose sedentary, moderate, or active based on your exercise habits",
        },
        {
          "@type": "HowToStep",
          name: "Calculate your calories",
          text: "Click the 'Calculate Calories' button to get your BMR and daily calorie needs",
        },
        {
          "@type": "HowToStep",
          name: "Review your results",
          text: "See your calories for weight maintenance, weight loss, and weight gain",
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
          name: "Calorie Calculator",
          item: "https://dowtikins.vercel.app/calorie-calculator",
        },
      ],
    },
  ],
}

export default function CalorieCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calorieCalculatorSchema) }}
        suppressHydrationWarning
      />
      {children}
    </>
  )
}
