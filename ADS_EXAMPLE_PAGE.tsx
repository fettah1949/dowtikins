import BannerAd from './components/ads/BannerAd'
import StickyAd from './components/ads/StickyAd'

export default function ExamplePageWithAds() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <StickyAd />

      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            DowTikins
          </h1>
        </div>
        
        <div className="container mx-auto px-4 py-4">
          <BannerAd position="header" />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Download TikTok & Instagram Videos Instantly - Free & Fast
            </h1>
            
            <div className="mb-8">
              <input
                type="text"
                placeholder="Paste video URL here..."
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button className="mt-4 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
                Download Video
              </button>
            </div>

            <div className="my-8">
              <BannerAd position="in-article" />
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
                Why Choose DowTikins for Your Video Downloads?
              </h2>
              
              <p className="text-gray-400 text-center max-w-2xl mx-auto">
                DowTikins is the ultimate solution for downloading TikTok videos and Instagram Reels. Our tool is fast, free, and maintains the original video quality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                  <p className="text-gray-400">Download videos in seconds with our optimized technology</p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💧</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">No Watermark</h3>
                  <p className="text-gray-400">Get clean, high-quality videos without any watermarks</p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">100% Secure</h3>
                  <p className="text-gray-400">Your privacy is protected with our secure download system</p>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
                  <summary className="font-semibold text-lg text-white">How do I download TikTok videos without watermark?</summary>
                  <p className="mt-3 text-gray-400">Simply paste the TikTok video URL in our downloader and click the Download button.</p>
                </details>

                <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
                  <summary className="font-semibold text-lg text-white">Can I download Instagram Reels for free?</summary>
                  <p className="mt-3 text-gray-400">Yes! DowTikins is completely free to use.</p>
                </details>

                <details className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors">
                  <summary className="font-semibold text-lg text-white">Is it safe to use DowTikins?</summary>
                  <p className="mt-3 text-gray-400">Absolutely! DowTikins is 100% secure.</p>
                </details>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Sponsored</h3>
                <BannerAd position="sidebar" />
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Advertisement</h3>
                <BannerAd position="sidebar" />
              </div>
            </div>
          </aside>
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
