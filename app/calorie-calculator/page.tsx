"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Flame, TrendingUp, Scale, Minus, Plus } from "lucide-react"
import BannerAd from "../components/ads/BannerAd"
import StickyAd from "../components/ads/StickyAd"

interface CalorieResult {
  bmr: number
  maintain: number
  lose: number
  gain: number
}

export default function CalorieCalculatorPage() {
  const [age, setAge] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [gender, setGender] = useState("male")
  const [activityLevel, setActivityLevel] = useState("sedentary")
  const [result, setResult] = useState<CalorieResult | null>(null)
  const [error, setError] = useState("")
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateCalories = () => {
    setError("")
    setResult(null)

    if (!age || !weight || !height) {
      setError("Please fill in all fields")
      return
    }

    const ageNum = parseInt(age)
    const weightNum = parseFloat(weight)
    const heightNum = parseFloat(height)

    if (ageNum < 15 || ageNum > 100) {
      setError("Please enter a valid age between 15 and 100")
      return
    }

    if (weightNum < 30 || weightNum > 300) {
      setError("Please enter a valid weight between 30 and 300 kg")
      return
    }

    if (heightNum < 100 || heightNum > 250) {
      setError("Please enter a valid height between 100 and 250 cm")
      return
    }

    setIsCalculating(true)

    setTimeout(() => {
      let bmr: number

      if (gender === "male") {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5
      } else {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161
      }

      const activityMultipliers = {
        sedentary: 1.2,
        moderate: 1.55,
        active: 1.725,
      }

      const multiplier = activityMultipliers[activityLevel as keyof typeof activityMultipliers]
      const tdee = Math.round(bmr * multiplier)

      setResult({
        bmr: Math.round(bmr),
        maintain: tdee,
        lose: Math.round(tdee - 500),
        gain: Math.round(tdee + 500),
      })

      setIsCalculating(false)
    }, 500)
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
            <h1 className="text-4xl font-bold text-white mb-2">Daily Calorie Calculator</h1>
            <p className="text-gray-400">
              Calculate your daily calorie needs for weight loss, maintenance, or gain using the Mifflin-St Jeor Equation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Age
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight in kg"
                step="0.1"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height in cm"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Activity Level
              </label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="sedentary">Sedentary (little to no exercise)</option>
                <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                <option value="active">Active (hard exercise 6-7 days/week)</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={calculateCalories}
            disabled={isCalculating}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalculating ? "Calculating..." : "Calculate Calories"}
          </button>

          {result && (
            <div className="mt-8 space-y-4">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Your BMR</p>
                    <p className="text-3xl font-bold text-white">{result.bmr}</p>
                    <p className="text-gray-500 text-xs mt-1">calories/day at rest</p>
                  </div>
                  <Flame className="w-12 h-12 text-purple-500" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-6">
                  <div className="flex flex-col items-center text-center">
                    <Minus className="w-8 h-8 text-blue-400 mb-3" />
                    <p className="text-gray-400 text-xs mb-2">Weight Loss</p>
                    <p className="text-2xl font-bold text-white">{result.lose}</p>
                    <p className="text-gray-500 text-xs mt-1">calories/day</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-xl p-6">
                  <div className="flex flex-col items-center text-center">
                    <Scale className="w-8 h-8 text-green-400 mb-3" />
                    <p className="text-gray-400 text-xs mb-2">Maintain</p>
                    <p className="text-2xl font-bold text-white">{result.maintain}</p>
                    <p className="text-gray-500 text-xs mt-1">calories/day</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-xl p-6">
                  <div className="flex flex-col items-center text-center">
                    <Plus className="w-8 h-8 text-orange-400 mb-3" />
                    <p className="text-gray-400 text-xs mb-2">Weight Gain</p>
                    <p className="text-2xl font-bold text-white">{result.gain}</p>
                    <p className="text-gray-500 text-xs mt-1">calories/day</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">About Our Calorie Calculator</h2>
            <p className="text-gray-400 mb-4">
              Welcome to DowTikins' free calorie calculator - your go-to online tool for calculating daily caloric needs based on your personal goals. Whether you want to lose weight, maintain your current weight, or gain muscle, our calculator uses the scientifically-validated Mifflin-St Jeor Equation to provide accurate results.
            </p>
            <p className="text-gray-400 mb-4">
              This calorie calculator takes into account your age, weight, height, gender, and activity level to determine your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). Unlike other calorie calculators, our tool provides three target values: calories for weight loss (500 calorie deficit), weight maintenance, and weight gain (500 calorie surplus).
            </p>
            <p className="text-gray-400">
              Perfect for fitness enthusiasts, athletes, and anyone looking to manage their weight effectively, this calorie calculator requires no registration and is completely free to use. Simply enter your information, and our tool will instantly calculate your personalized calorie targets.
            </p>
          </div>

          <BannerAd position="in-article" className="my-12" />

          <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">What is BMR and how is it calculated?</h3>
              <p className="text-gray-400 text-sm">
                BMR (Basal Metabolic Rate) is the number of calories your body needs to perform basic life-sustaining functions like breathing and circulation. Our calculator uses the Mifflin-St Jeor Equation, which is considered the most accurate formula for calculating BMR. It takes into account your weight, height, age, and gender.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">How accurate is this calorie calculator?</h3>
              <p className="text-gray-400 text-sm">
                Our calorie calculator is highly accurate as it uses the scientifically-validated Mifflin-St Jeor Equation, which is considered the gold standard for BMR calculation. Combined with activity level multipliers, it provides precise estimates for your daily caloric needs.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">What do the three calorie values mean?</h3>
              <p className="text-gray-400 text-sm">
                The three values represent: Weight Loss (calories needed to lose about 0.5-1 kg per week), Maintain (calories needed to maintain your current weight), and Weight Gain (calories needed to gain about 0.5-1 kg per week). These are based on a 500 calorie difference from maintenance.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">What are the different activity levels?</h3>
              <p className="text-gray-400 text-sm">
                Sedentary: Little to no exercise. Moderate: Exercise 3-5 days per week. Active: Hard exercise 6-7 days per week. Your activity level affects how many calories you burn daily, which is factored into your total calorie needs.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Is this calorie calculator free to use?</h3>
              <p className="text-gray-400 text-sm">
                Yes, our calorie calculator is completely free to use with no registration required. You can use it as many times as you want without any limitations.
              </p>
            </div>
          </div>
        </div>

        <BannerAd position="footer" className="mt-8" />
      </div>
    </div>
  )
}
