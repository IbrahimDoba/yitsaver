import { NextRequest, NextResponse } from 'next/server';
import { getVideoInfo, isValidYoutubeUrl } from '../helper';

export async function POST(req: NextRequest) {
  const { url } = await req.json();
    console.log(url)
  if (!url) {
    return NextResponse.json({ error: "Missing 'url' parameter in the request body." }, { status: 400 });
  }

  if (!isValidYoutubeUrl(url)) {
    return NextResponse.json({ error: "Invalid YouTube URL." }, { status: 400 });
  }

  const videoInfo = await getVideoInfo(url);
  console.log(videoInfo)
  if (!videoInfo) {
    console.log("error occured")
    return NextResponse.json({ error: "Error Occured" }, { status: 500 });
  }

  return NextResponse.json(videoInfo);
}