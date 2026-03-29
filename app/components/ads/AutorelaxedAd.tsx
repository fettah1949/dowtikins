'use client'

import { useEffect } from 'react'
import { ADSENSE_CLIENT_ID, isAdSenseEnabled, AD_UNITS } from '@/lib/ads'

interface AutorelaxedAdProps {
  className?: string
}

export default function AutorelaxedAd({ className = '' }: AutorelaxedAdProps) {
  useEffect(() => {
    if (isAdSenseEnabled()) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error('AdSense error:', error)
      }
    }
  }, [])

  if (!isAdSenseEnabled()) {
    return null
  }

  return (
    <div className={`ad-autorelaxed-wrapper ${className}`}>
      <div className="ad-label text-xs text-gray-500 mb-1 text-center">
        Publicité
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={AD_UNITS.AUTORELAXED.slot}
        data-ad-format="autorelaxed"
        data-full-width-responsive="true"
      />
    </div>
  )
}
