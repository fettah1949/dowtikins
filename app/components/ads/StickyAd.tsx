'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import AdSenseUnit from './AdSenseUnit'
import { AD_UNITS } from '@/lib/ads'

export default function StickyAd() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isClosed) {
        setIsVisible(true)
      } else if (window.scrollY < 200) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClosed])

  if (!isVisible || isClosed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 p-2">
      <button
        onClick={() => setIsClosed(true)}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
        aria-label="Fermer la publicité"
      >
        <X size={20} />
      </button>
      <div className="max-w-4xl mx-auto">
        <AdSenseUnit adSlot={AD_UNITS.HEADER_BANNER.slot} />
      </div>
    </div>
  )
}
