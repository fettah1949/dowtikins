"use client"

import { useState } from "react"
import BannerAd from "./components/ads/BannerAd"
import StickyAd from "./components/ads/StickyAd"

interface DownloadResult {
  success: boolean
  videoUrl?: string
  thumbnail?: string
  error?: string
}

export default function Home() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<DownloadResult | null>(null)
  const [error, setError] = useState("")

  const isValidUrl = (inputUrl: string) => {
    try {
      const parsed = new URL(inputUrl)
      return parsed.hostname.includes("tiktok.com") || 
             parsed.hostname.includes("instagram.com")
    } catch {
      return false
    }
  }

  const handleDownload = async () => {
    setError("")
    setResult(null)

    if (!url.trim()) {
      setError("Please enter a video URL")
      return
    }

    if (!isValidUrl(url)) {
      setError("Please enter a valid TikTok or Instagram URL")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to download video")
      }

      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleDownload()
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Download TikTok & Instagram Videos Instantly - Free & Fast
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              DowTikins is your ultimate solution for downloading TikTok videos and Instagram Reels in just one click.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700">
            <div className="space-y-4">
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
                  Video URL
                </label>
                <input
                  id="url"
                  type="url"
                  placeholder="https://www.tiktok.com/@user/video/..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              {error && (
                <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                onClick={handleDownload}
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Downloading...
                  </>
                ) : (
                  "Download Video"
                )}
              </button>
            </div>

            {result && result.success && result.videoUrl && (
              <div className="mt-6 p-4 bg-green-900/30 border border-green-700 rounded-lg">
                <div className="text-center">
                  <p className="text-green-400 font-medium mb-4">Video ready for download!</p>
                  {result.thumbnail && (
                    <img
                      src={result.thumbnail}
                      alt="Video thumbnail"
                      className="max-w-full mx-auto rounded-lg mb-4 max-h-64 object-cover"
                    />
                  )}
                  <a
                    href={result.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Download Video
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
              Why Choose DowTikins for Your Video Downloads?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Lightning Fast</h3>
                <p className="text-gray-400 text-sm">Download videos in seconds with our optimized servers. No waiting, no delays.</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="text-3xl mb-3">🎬</div>
                <h3 className="text-lg font-semibold mb-2 text-pink-400">No Watermark</h3>
                <p className="text-gray-400 text-sm">Get 100% original quality videos without any watermarks. Clean downloads every time.</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">100% Secure</h3>
                <p className="text-gray-400 text-sm">Your data stays safe. We don't store any personal information or download history.</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
              Download Without Watermark - 100% Original Quality
            </h2>
            
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Our advanced technology removes watermarks automatically, giving you clean, high-quality videos perfect for sharing or personal use. Support for all video types including TikTok clips, Instagram Reels, and more.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
              Support for All Video Types - TikTok, Reels & More
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 px-4 py-2 rounded-full text-pink-300 text-sm">
                TikTok Videos
              </span>
              <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 px-4 py-2 rounded-full text-purple-300 text-sm">
                Instagram Reels
              </span>
              <span className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 px-4 py-2 rounded-full text-blue-300 text-sm">
                Instagram Stories
              </span>
              <span className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 px-4 py-2 rounded-full text-cyan-300 text-sm">
                TikTok Trends
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
              Fast, Secure & Completely Free to Use
            </h2>
            
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Start downloading now and save your favorite videos for offline viewing, sharing, or keeping your best clips forever. No registration required, no hidden fees.
            </p>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Supports TikTok and Instagram videos</p>
            <p className="mt-2">Fast, free, and no watermark</p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
                <summary className="font-semibold text-lg text-white">How do I download TikTok videos without watermark?</summary>
                <p className="mt-3 text-gray-400">Simply paste the TikTok video URL in our downloader above and click the Download button. Our tool automatically removes the watermark and provides a clean, high-quality video download link.</p>
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
          </div>
        </div>
      </main>

      <div className="container mx-auto px-4 py-4">
        <BannerAd position="footer" />
      </div>

      <footer className="bg-gray-800 border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; 2024 DowTikins. All rights reserved.</p>
          <p className="mt-2">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
