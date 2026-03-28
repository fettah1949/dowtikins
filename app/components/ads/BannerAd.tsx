import AdSenseUnit from './AdSenseUnit'
import { AD_UNITS } from '@/lib/ads'

interface BannerAdProps {
  position: 'header' | 'footer' | 'sidebar' | 'in-article'
  className?: string
}

export default function BannerAd({ position, className = '' }: BannerAdProps) {
  const adConfig = {
    header: AD_UNITS.HEADER_BANNER,
    footer: AD_UNITS.FOOTER,
    sidebar: AD_UNITS.SIDEBAR,
    'in-article': AD_UNITS.IN_ARTICLE,
  }

  const adUnit = adConfig[position]

  return (
    <div className={`ad-banner-wrapper ${className}`}>
      <div className="ad-label text-xs text-gray-500 mb-1 text-center">
        Publicité
      </div>
      <AdSenseUnit
        adSlot={adUnit.slot}
        className="w-full"
      />
    </div>
  )
}
