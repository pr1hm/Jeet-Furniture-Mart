import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const publicId = process.env.CLOUDINARY_VIDEO_PUBLIC_ID || 'About_us_Video_dtpz6r';
    const version = process.env.CLOUDINARY_VIDEO_VERSION || 'v1781687812';

    // 1. Fallback if cloud name is not configured
    if (!cloudName || cloudName.includes('your_cloud_name')) {
      console.warn('Cloudinary cloud name not configured. Falling back to local video.');
      return NextResponse.json({
        url: '/assets/About%20us%20Video.mp4',
        fallback: true,
      });
    }

    // 2. If API authentication credentials are not set, return the direct delivery URL
    if (
      !apiKey ||
      !apiSecret ||
      apiKey.includes('your_api_key')
    ) {
      const versionSlug = version ? `${version}/` : '';
      const deliveryUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${versionSlug}${publicId}.mp4`;
      return NextResponse.json({ url: deliveryUrl });
    }

    // 3. Query Cloudinary Admin API to verify the resource and retrieve the latest delivery details
    // Using Basic Auth: Buffer.from(api_key + ":" + api_secret).toString('base64')
    const authString = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/video/upload/${publicId}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${authString}`,
      },
      next: { revalidate: 3600 }, // Cache the Cloudinary response for 1 hour to prevent rate limits
    });

    const versionSlug = version ? `${version}/` : '';

    if (!response.ok) {
      console.warn(`Failed to fetch video details from Cloudinary API (Status: ${response.status}). Constructing direct delivery URL.`);
      // If Cloudinary API fails, construct a standard delivery URL as fallback
      const fallbackUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${versionSlug}${publicId}.mp4`;
      return NextResponse.json({ url: fallbackUrl });
    }

    const data = await response.json();
    return NextResponse.json({ url: data.secure_url });
  } catch (error) {
    console.error('Error in about-video API route:', error);
    // Absolute fallback to local hardcoded video on exception
    return NextResponse.json({
      url: '/assets/About%20us%20Video.mp4',
      fallback: true,
    });
  }
}

