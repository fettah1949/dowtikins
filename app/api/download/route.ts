import { NextRequest, NextResponse } from "next/server"

interface ExternalApiResponse {
  data?: {
    url?: string
    video?: string
    download_url?: string
    thumbnail?: string
    cover?: string
    play?: string
  }
  success?: boolean
  url?: string
  video?: string
  download_url?: string
  thumbnail?: string
  cover?: string
  play?: string
}

async function fetchFromTikTokApi(url: string): Promise<ExternalApiResponse> {
  try {
    const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`
    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch from TikTok API")
    }

    return await response.json()
  } catch (error) {
    throw new Error("Error fetching TikTok video")
  }
}

async function fetchFromInstagramApi(url: string): Promise<ExternalApiResponse> {
  try {
    const apiUrl = `https://api.savefrom.biz/api/convert?url=${encodeURIComponent(url)}`
    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch from Instagram API")
    }

    return await response.json()
  } catch (error) {
    throw new Error("Error fetching Instagram video")
  }
}

function extractVideoUrl(response: ExternalApiResponse): string | null {
  const possibleUrls = [
    response.url,
    response.video,
    response.download_url,
    response.play,
    response.data?.url,
    response.data?.video,
    response.data?.download_url,
    response.data?.play,
  ]

  return possibleUrls.find((url) => url && typeof url === "string" && url.startsWith("http")) || null
}

function extractThumbnail(response: ExternalApiResponse): string | null {
  const possibleThumbnails = [
    response.thumbnail,
    response.cover,
    response.data?.thumbnail,
    response.data?.cover,
  ]

  return (
    possibleThumbnails.find((thumb) => thumb && typeof thumb === "string" && thumb.startsWith("http")) || null
  )
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json(
        { success: false, error: "URL is required" },
        { status: 400 }
      )
    }

    const urlObj = new URL(url)
    const hostname = urlObj.hostname.toLowerCase()

    let apiResponse: ExternalApiResponse

    if (hostname.includes("tiktok.com")) {
      apiResponse = await fetchFromTikTokApi(url)
    } else if (hostname.includes("instagram.com")) {
      apiResponse = await fetchFromInstagramApi(url)
    } else {
      return NextResponse.json(
        { success: false, error: "Unsupported platform. Only TikTok and Instagram are supported." },
        { status: 400 }
      )
    }

    const videoUrl = extractVideoUrl(apiResponse)
    const thumbnail = extractThumbnail(apiResponse)

    if (!videoUrl) {
      return NextResponse.json(
        { success: false, error: "Could not extract video URL" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      videoUrl,
      thumbnail,
    })
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "An error occurred while processing your request",
      },
      { status: 500 }
    )
  }
}
