"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import BannerAd from "../components/ads/BannerAd"
import StickyAd from "../components/ads/StickyAd"

interface AgeResult {
  years: number
  months: number
  days: number
  totalDays: number
  totalWeeks: number
  totalHours: number
}

export default function AgeCalculatorPage() {
  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<AgeResult | null>(null)
  const [error, setError] = useState("")
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateAge = () => {
    setError("")
    setResult(null)

    if (!birthDate) {
      setError("Please enter your birth date")
      return
    }

    const birth = new Date(birthDate)
    const today = new Date()

    if (birth > today) {
      setError("Birth date cannot be in the future")
      return
    }

    if (birth.getFullYear() < 1900) {
      setError("Please enter a valid birth date after 1900")
      return
    }

    setIsCalculating(true)

    setTimeout(() => {
      let years = today.getFullYear() - birth.getFullYear()
      let months = today.getMonth() - birth.getMonth()
      let days = today.getDate() - birth.getDate()

      if (days < 0) {
        months--
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        days += lastMonth.getDate()
      }

      if (months < 0) {
        years--
        months += 12
      }

      const diffTime = Math.abs(today.getTime() - birth.getTime())
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      const totalWeeks = Math.floor(totalDays / 7)
      const totalHours = totalDays * 24

      setResult({
        years,
        months,
        days,
        totalDays,
        totalWeeks,
        totalHours,
      })
      setIsCalculating(false)
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      calculateAge()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <BannerAd position="header" className="mb-8" />

        <StickyAd />

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Free Age Calculator</h1>
            <p className="text-gray-400">
              Calculate your exact age in years, months, and days instantly with our free age calculator tool
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                <Calendar className="w-4 h-4 inline mr-2" />
                Birth Date
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              onClick={calculateAge}
              disabled={isCalculating}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg 
                hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 
                outline-none transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                ${isCalculating ? "animate-pulse" : ""}`}
            >
              {isCalculating ? "Calculating..." : "Calculate Age"}
            </button>

            {result && (
              <div className="mt-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Your Age</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{result.years}</div>
                    <div className="text-gray-400 text-sm">Years</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50">
                    <div className="text-4xl font-bold text-purple-400 mb-2">{result.months}</div>
                    <div className="text-gray-400 text-sm">Months</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50">
                    <div className="text-4xl font-bold text-pink-400 mb-2">{result.days}</div>
                    <div className="text-gray-400 text-sm">Days</div>
                  </div>
                </div>

                <div className="border-t border-gray-700/50 pt-4">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Additional Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Days:</span>
                      <span className="text-white font-medium">{result.totalDays.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Weeks:</span>
                      <span className="text-white font-medium">{result.totalWeeks.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Hours:</span>
                      <span className="text-white font-medium">{result.totalHours.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700/50 text-center text-gray-400 text-sm">
            <p>
              Our age calculator uses precise date calculations to determine your exact age in years, months, 
              and days. Perfect for birthdays, anniversaries, and planning special occasions.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Free & Easy to Use • No Registration Required • 100% Accurate Results</p>
        </div>

        <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Use Our Free Age Calculator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-lg font-semibold text-white mb-2">100% Accurate</h3>
                <p className="text-gray-400 text-sm">Precise calculations accounting for leap years and varying month lengths</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Instant Results</h3>
                <p className="text-gray-400 text-sm">Get your age calculated instantly without any delays</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Mobile Friendly</h3>
                <p className="text-gray-400 text-sm">Works perfectly on all devices - smartphones, tablets, and desktops</p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">About Our Age Calculator Tool</h2>
              <p className="text-gray-400 mb-4">
                Welcome to DowTikins' free age calculator - your go-to online tool for calculating age with precision. Whether you're planning a birthday celebration, calculating an anniversary, or simply curious about your exact age, our birthday calculator provides instant, accurate results.
              </p>
              <p className="text-gray-400 mb-4">
                This age calculation tool uses advanced algorithms to determine your exact age in years, months, and days, while also providing additional statistics like total days, weeks, and hours lived. Unlike other age finders, our tool accounts for leap years and varying month lengths to ensure 100% accuracy.
              </p>
              <p className="text-gray-400">
                Perfect for personal use, educational purposes, or professional applications, this exact age calculator requires no registration and is completely free to use. Simply enter your date of birth, and our age counter will display your precise age instantly.
              </p>
            </div>

            <BannerAd position="in-article" className="my-12" />

            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">How accurate is this age calculator?</h3>
                <p className="text-gray-400 text-sm">
                  Our age calculator is 100% accurate as it uses precise date calculations considering leap years and varying month lengths. It calculates your exact age down to the day.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">What information do I need to calculate my age?</h3>
                <p className="text-gray-400 text-sm">
                  You only need your birth date (day, month, and year). Simply enter your date of birth and click "Calculate Age" to get your exact age in years, months, and days.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Is this age calculator free to use?</h3>
                <p className="text-gray-400 text-sm">
                  Yes, our age calculator is completely free to use with no registration required. You can use it as many times as you want without any limitations.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Can I use this age calculator on my mobile device?</h3>
                <p className="text-gray-400 text-sm">
                  Absolutely! Our age calculator is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">How does the age calculator work?</h3>
                <p className="text-gray-400 text-sm">
                  Our age calculator calculates the exact difference between your birth date and today's date. It accounts for leap years and varying month lengths to provide accurate results in years, months, and days, plus total days, weeks, and hours.
                </p>
              </div>
            </div>
          </div>

        <BannerAd position="footer" className="mt-8" />
      </div>
    </div>
  )
}
