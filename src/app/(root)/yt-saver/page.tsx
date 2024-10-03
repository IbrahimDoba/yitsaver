"use client"
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";
import DownloadOptions from "@/app/components/Ytcomponents/DownloadOptions";
import SearchForm from "@/app/components/Ytcomponents/SearchForm";
import VideoList from "@/app/components/Ytcomponents/VideoDisplay";
import { VideoInfo } from "@/app/types/youtube";
import { FormEvent, useState } from "react";

const VideoDownloader: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [videoInfo, setVideoInfo] = useState<VideoInfo[] | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDrop, setShowDrop] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!videoUrl.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      setVideoInfo(null);

      const response = await fetch('/api/yt-downloader/getinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch video information');
      }

      
      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setVideoInfo(data); // Set the video information
      } else {
        console.error("Error:", data.error);
        alert(`Error fetching video info: ${data.error}`);
      }
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setVideoInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    setVideoUrl('');
    setVideoInfo(null);
    setError('');
    setShowModal(false);
    setShowDrop(false);
  };

  const handleDropClick = () => setShowDrop(!showDrop);
  
  const handleDropItemClick = (quality: string) => {
    // Handle quality selection logic here
    console.log('Selected quality:', quality);
    setShowDrop(false);
  };

  return (
    <div className="flex flex-col items-center bg-white">
      <SearchForm 
        videoUrl={videoUrl} 
        setVideoUrl={setVideoUrl} 
        handleSubmit={handleSubmit} 
        clearSearch={clearSearch} 
      />
      
      {error && (
        <div className="text-red-500 mt-2 mb-2">
          {error}
        </div>
      )}
      
      {isloading ? (
        <LoadingSpinner />
      ) : (
        videoInfo && <VideoList videoInfo={videoInfo} />
      )}
      
      {videoInfo && (
        <DownloadOptions
          handleDropClick={handleDropClick}
          showDrop={showDrop}
          showModal={showModal}
          getTestData={videoInfo}
          handleDropItemClick={handleDropItemClick}
          hrefValue="#"
          newTitle="video.mp4"
        />
      )}
    </div>
  );
};

export default VideoDownloader;