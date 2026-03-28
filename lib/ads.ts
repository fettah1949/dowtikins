export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-1841159989456495'

export const AD_UNITS = {
  HEADER_BANNER: {
    slot: '1234567890',
    size: '[[728, 90], [970, 90]]',
    responsive: true,
  },
  SIDEBAR: {
    slot: '2345678901',
    size: '[[300, 250], [300, 600]]',
    responsive: true,
  },
  IN_ARTICLE: {
    slot: '3456789012',
    size: '[[300, 250], [336, 280]]',
    responsive: true,
  },
  FOOTER: {
    slot: '4567890123',
    size: '[[728, 90]]',
    responsive: false,
  },
}

export const isAdSenseEnabled = () => {
  return typeof window !== 'undefined' && 
         !process.env.NEXT_PUBLIC_DISABLE_ADS && 
         ADSENSE_CLIENT_ID !== 'ca-pub-XXXXXXXXXXXXXXXX'
}
