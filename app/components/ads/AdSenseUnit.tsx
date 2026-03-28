'use client'

import { useEffect, useState } from 'react'
import { ADSENSE_CLIENT_ID, isAdSenseEnabled } from '@/lib/ads'

interface AdSenseUnitProps {
  adSlot: string
  adFormat?: string
  style?: React.CSSProperties
  className?: string
  fullWidthResponsive?: boolean
}

export default function AdSenseUnit({
  adSlot,
  adFormat = 'auto',
  style,
  className = '',
  fullWidthResponsive = true,
}: AdSenseUnitProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isAdSenseEnabled()) {
      setIsLoaded(true)
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error('AdSense error:', error)
      }
    }
  }, [adSlot])

  if (!isAdSenseEnabled()) {
    return null
  }

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  )
}
