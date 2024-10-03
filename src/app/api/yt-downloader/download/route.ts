import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'url';
import { downloadVideo, isValidYoutubeUrl } from '../helper';

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  if (!url) {
    return NextResponse.json({ error: "Missing 'url' parameter in the request body." }, { status: 400 });
  }

  if (!isValidYoutubeUrl(url)) {
    return NextResponse.json({ error: "Invalid YouTube URL." }, { status: 400 });
  }

  const { pathname } = parse(req.url);
  const resolution = pathname?.split('/').pop();

  const result = await downloadVideo(url, resolution || 'highest');
  if (result.success) {
    return NextResponse.json({ message: `Video with resolution ${resolution} available.` });
  } else {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
}