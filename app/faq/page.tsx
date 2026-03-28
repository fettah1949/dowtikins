import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - DowTikins | TikTok & Instagram Video Downloader Questions",
  description: "Find answers to frequently asked questions about downloading TikTok videos and Instagram Reels. Learn how to use DowTikins, video formats, safety, and more.",
  keywords: ["TikTok downloader FAQ", "Instagram Reels downloader questions", "how to download videos", "video downloader help", "DowTikins FAQ", "download videos without watermark"],
  openGraph: {
    title: "FAQ - DowTikins | TikTok & Instagram Video Downloader Questions",
    description: "Find answers to frequently asked questions about downloading TikTok videos and Instagram Reels.",
    url: "https://dowtikins.com/faq",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I download TikTok videos without watermark?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply paste the TikTok video URL in our downloader and click the Download button. Our tool automatically removes the watermark and provides a clean, high-quality video download link.",
      },
    },
    {
      "@type": "Question",
      name: "Can I download Instagram Reels for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! DowTikins is completely free to use. Just paste the Instagram Reel URL and click Download. No registration, no fees, no hidden charges.",
      },
    },
    {
      "@type": "Question",
      name: "What video formats are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our downloader supports MP4 format which is compatible with all devices including smartphones, tablets, and computers. The downloaded videos maintain their original quality.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to use DowTikins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! DowTikins is 100% secure. We don't store your data, don't require registration, and all downloads happen directly from official platforms. Your privacy is our priority.",
      },
    },
    {
      "@type": "Question",
      name: "Can I download videos from private accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, DowTikins only works with public TikTok and Instagram accounts. You can only download videos that are publicly accessible and shareable.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to download a video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most downloads complete within seconds! Our lightning-fast technology processes videos instantly, so you can start downloading and watching your favorite content right away.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to install any software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No installation required! DowTikins is a web-based tool that works directly in your browser. Just visit our website, paste the video URL, and download - it's that simple!",
      },
    },
    {
      "@type": "Question",
      name: "Is there a limit on how many videos I can download?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No limits! Download as many videos as you want, whenever you want. DowTikins is completely unlimited and free for personal use.",
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Everything you need to know about downloading TikTok videos and Instagram Reels
        </p>

        <div className="space-y-4">
          <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
            <summary className="font-semibold text-lg text-white">How do I download TikTok videos without watermark?</summary>
            <p className="mt-3 text-gray-400">Simply paste the TikTok video URL in our downloader and click the Download button. Our tool automatically removes the watermark and provides a clean, high-quality video download link.</p>
          </details>

          <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
            <summary className="font-semibold text-lg text-white">Can I download Instagram Reels for free?</summary>
            <p className="mt-3 text-gray-400">Yes! DowTikins is completely free to use. Just paste the Instagram Reel URL and click Download. No registration, no fees, no hidden charges.</p>
          </details>

          <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
            <summary className="font-semibold text-lg text-white">What video formats are supported?</summary>
            <p className="mt-3 text-gray-400">Our downloader supports MP4 format which is compatible with all devices including smartphones, tablets, and computers. The downloaded videos maintain their original quality.</p>
          </details>

          <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
            <summary className="font-semibold text-lg text-white">Is it safe to use DowTikins?</summary>
            <p className="mt-3 text-gray-400">Absolutely! DowTikins is 100% secure. We don't store your data, don't require registration, and all downloads happen directly from official platforms. Your privacy is our priority.</p>
          </details>

          <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
            <summary className="font-semibold text-lg text-white">Can I download videos from private accounts?</summary>
            <p className="mt-3 text-gray-400">No, DowTikins only works with public TikTok and Instagram accounts. You can only download videos that are publicly accessible and shareable.</p>
          </details>

          <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
            <summary className="font-semibold text-lg text-white">How long does it take to download a video?</summary>
            <p className="mt-3 text-gray-400">Most downloads complete within seconds! Our lightning-fast technology processes videos instantly, so you can start downloading and watching your favorite content right away.</p>
          </details>

          <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
            <summary className="font-semibold text-lg text-white">Do I need to install any software?</summary>
            <p className="mt-3 text-gray-400">No installation required! DowTikins is a web-based tool that works directly in your browser. Just visit our website, paste the video URL, and download - it's that simple!</p>
          </details>

          <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
            <summary className="font-semibold text-lg text-white">Is there a limit on how many videos I can download?</summary>
            <p className="mt-3 text-gray-400">No limits! Download as many videos as you want, whenever you want. DowTikins is completely unlimited and free for personal use.</p>
          </details>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/"
            className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Back to Downloader
          </a>
        </div>
      </div>

      <footer className="bg-gray-800 border-t border-gray-700 py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; 2024 DowTikins. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
