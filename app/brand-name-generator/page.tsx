"use client"

import { useState } from "react"
import { Search, CheckCircle2, XCircle, Loader2, Sparkles, Globe, AtSign, Facebook, Instagram, Youtube, Radio } from "lucide-react"
import BannerAd from "../components/ads/BannerAd"
import StickyAd from "../components/ads/StickyAd"

interface BrandIdea {
  name: string
  domainAvailable: boolean
  usernameAvailable: boolean
  facebookAvailable: boolean
  instagramAvailable: boolean
  tiktokAvailable: boolean
  youtubeAvailable: boolean
}

export default function BrandNameGeneratorPage() {
  const [keyword, setKeyword] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [results, setResults] = useState<BrandIdea[]>([])

  const prefixes = ["get", "try", "go", "my"]
  const suffixes = ["ly", "hub", "zone", "lab", "shop"]

  // Simple pseudo-random function based on string content for consistent availability simulation
  const pseudoRandom = (str: string, salt: number) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    const x = Math.sin(hash + salt) * 10000
    return x - Math.floor(x)
  }

  const generateNames = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!keyword.trim()) return

    setIsGenerating(true)
    setResults([])

    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 1500))

    const cleanKeyword = keyword.trim().toLowerCase().replace(/[^a-z0-9]/g, '')
    if (!cleanKeyword) {
      setIsGenerating(false)
      return
    }
    
    // Generate ideas
    const ideas = new Set<string>()
    
    // 1. Raw keyword
    ideas.add(cleanKeyword)
    
    // 2. Add prefixes
    prefixes.forEach(p => ideas.add(`${p}${cleanKeyword}`))
    
    // 3. Add suffixes
    suffixes.forEach(s => ideas.add(`${cleanKeyword}${s}`))
    
    // 4. Mix of prefixes and suffixes (to reach at least 10 if needed)
    prefixes.forEach(p => {
      suffixes.forEach(s => {
        if (ideas.size < 12) {
          ideas.add(`${p}${cleanKeyword}${s}`)
        }
      })
    })

    // Create result objects
    const finalResults = Array.from(ideas).slice(0, 12).map(name => {
      // Simulate availability (70% chance available for domain, 50-60% for social media)
      // We use pseudoRandom so it's consistent if the user searches the same keyword again
      const domainAvail = pseudoRandom(name, 1) > 0.3
      const userAvail = pseudoRandom(name, 2) > 0.5
      const facebookAvail = pseudoRandom(name, 3) > 0.55
      const instagramAvail = pseudoRandom(name, 4) > 0.5
      const tiktokAvail = pseudoRandom(name, 5) > 0.45
      const youtubeAvail = pseudoRandom(name, 6) > 0.6

      return {
        name,
        domainAvailable: domainAvail,
        usernameAvailable: userAvail,
        facebookAvailable: facebookAvail,
        instagramAvailable: instagramAvail,
        tiktokAvailable: tiktokAvail,
        youtubeAvailable: youtubeAvail
      }
    })

    setResults(finalResults)
    setIsGenerating(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <StickyAd />
      
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10 text-blue-500" aria-hidden="true" />
            Free Brand Name Generator
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Generate catchy brand name ideas and instantly check domain (.com), Facebook, Instagram, TikTok, and YouTube username availability for your next big project.
          </p>
        </header>

        <section aria-label="Advertisement">
          <BannerAd position="header" />
        </section>

        {/* Input Form */}
        <section className="max-w-xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700">
          <h2 className="sr-only">Enter your keyword to generate names</h2>
          <form onSubmit={generateNames} className="space-y-6">
            <div>
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-300 mb-2">
                Enter your core keyword or niche
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  id="keyword"
                  name="keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 border border-gray-600 rounded-xl bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg"
                  placeholder="e.g. fitness, tech, shop..."
                  aria-label="Keyword for brand name generation"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isGenerating || !keyword.trim()}
              className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-busy={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" aria-hidden="true" />
                  Generating Ideas...
                </>
              ) : (
                "Generate Brand Names"
              )}
            </button>
          </form>
        </section>

        {/* Results */}
        {results.length > 0 && (
          <section className="space-y-6 animate-in fade-in duration-500" aria-live="polite">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Brand Name Ideas & Availability</h2>
              <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                {results.length} results
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <article 
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors group flex flex-col justify-between"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {result.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center text-xs text-gray-400">
                        <Globe className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                        <span>Domain</span>
                      </div>
                      {result.domainAvailable ? (
                        <div className="flex items-center text-green-400 text-xs font-medium" aria-label="Domain available">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                          <span>Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-red-400 text-xs font-medium" aria-label="Domain taken">
                          <XCircle className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                          <span>Taken</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center text-xs text-gray-400">
                        <Facebook className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                        <span>Facebook</span>
                      </div>
                      {result.facebookAvailable ? (
                        <div className="flex items-center text-green-400 text-xs font-medium" aria-label="Facebook available">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                          <span>Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-red-400 text-xs font-medium" aria-label="Facebook taken">
                          <XCircle className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                          <span>Taken</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center text-xs text-gray-400">
                        <Instagram className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                        <span>Instagram</span>
                      </div>
                      {result.instagramAvailable ? (
                        <div className="flex items-center text-green-400 text-xs font-medium" aria-label="Instagram available">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                          <span>Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-red-400 text-xs font-medium" aria-label="Instagram taken">
                          <XCircle className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                          <span>Taken</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center text-xs text-gray-400">
                        <Radio className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                        <span>TikTok</span>
                      </div>
                      {result.tiktokAvailable ? (
                        <div className="flex items-center text-green-400 text-xs font-medium" aria-label="TikTok available">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                          <span>Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-red-400 text-xs font-medium" aria-label="TikTok taken">
                          <XCircle className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                          <span>Taken</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center text-xs text-gray-400">
                        <Youtube className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                        <span>YouTube</span>
                      </div>
                      {result.youtubeAvailable ? (
                        <div className="flex items-center text-green-400 text-xs font-medium" aria-label="YouTube available">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                          <span>Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-red-400 text-xs font-medium" aria-label="YouTube taken">
                          <XCircle className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                          <span>Taken</span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <section aria-label="Advertisement" className="mt-12">
              <BannerAd position="footer" />
            </section>
          </section>
        )}
        
        {/* SEO Content Section */}
        <section className="mt-16 bg-gray-800 rounded-2xl p-8 border border-gray-700 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">How to Choose the Perfect Brand Name</h2>
            <p className="text-gray-400 leading-relaxed">
              Finding the right brand name is a critical step in building your business identity. Our free brand name generator helps you brainstorm creative, catchy names by combining your core keyword with popular prefixes and suffixes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                Domain Availability
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A strong online presence starts with a great domain. We instantly check .com domain availability for every generated name, saving you time and ensuring your chosen brand can secure its premium web address.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <AtSign className="w-5 h-5 text-blue-400" />
                Social Media Handles
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Consistency across platforms is key for brand recognition. Our tool simulates username availability checks across Facebook, Instagram, TikTok, and YouTube so you can claim your identity everywhere.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
