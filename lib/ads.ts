export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-1841159989456495'

export const AD_UNITS = {
  HEADER_BANNER: {
    slot: '9053793354',
    size: '[[728, 90], [970, 90]]',
    responsive: true,
  },
  SIDEBAR: {
    slot: '9053793354',
    size: '[[300, 250], [300, 600]]',
    responsive: true,
  },
  IN_ARTICLE: {
    slot: '9053793354',
    size: '[[300, 250], [336, 280]]',
    responsive: true,
  },
  FOOTER: {
    slot: '9053793354',
    size: '[[728, 90]]',
    responsive: false,
  },
  AUTORELAXED: {
    slot: '7688944059',
    size: '[[300, 250], [336, 280], [728, 90], [970, 90]]',
    responsive: true,
  },
}

export const isAdSenseEnabled = () => {
  return typeof window !== 'undefined' && 
         !process.env.NEXT_PUBLIC_DISABLE_ADS && 
         ADSENSE_CLIENT_ID !== 'ca-pub-XXXXXXXXXXXXXXXX'
}
