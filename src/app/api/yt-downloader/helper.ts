import { NextResponse } from 'next/server';
import ytdl from 'ytdl-core';

// Helper function to validate YouTube URLs
export const isValidYoutubeUrl = (url: string): boolean => {
  const pattern = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]+(&\S*)?$/;
  return pattern.test(url);
};

// Function to download video
export const downloadVideo = async (url: string, resolution: string) => {
  try {
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: resolution });
    
    if (!format) {
      throw new Error(`Video with the specified resolution ${resolution} not found.`);
    }

    // Normally, you'd stream the video to the client, but here we just return success.
    return { success: true, format };
  } catch (error) {
    console.log(error)
    return { success: false, };
  }
};

// Function to get video information
export async function POST(request: Request) {
    try {
      const { url } = await request.json();
  
      if (!url) {
        return NextResponse.json({ error: "Missing 'url' parameter in the request body." }, { status: 400 });
      }
  
      const videoInfo = await getVideoFormats(url);
  
      return NextResponse.json(videoInfo, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

export const getVideoFormats = async (url: string) => {
    try {
      const info = await ytdl.getInfo(url);
      const formats = info.formats.map((format) => {
        return {
          qualityLabel: format.qualityLabel,
          mimeType: format.mimeType,
          url: format.url,
        };
      });
  
      return {
        title: info.videoDetails.title,
        author: info.videoDetails.author.name,
        lengthSeconds: info.videoDetails.lengthSeconds,
        views: info.videoDetails.viewCount,
        description: info.videoDetails.description,
        publishDate: info.videoDetails.publishDate,
        thumbnail: info.videoDetails.thumbnails[info.videoDetails.thumbnails.length - 1].url, // Get the highest resolution thumbnail
        formats,
      };
    } catch (error) {
      throw new Error(`Failed to fetch video formats: ${error}`);
    }
  };