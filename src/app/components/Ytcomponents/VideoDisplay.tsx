import { VideoListProps } from '@/app/types/youtube';
import Image from 'next/image';

const VideoList: React.FC<VideoListProps> = ({ videoInfo }) => {
    if (!videoInfo || videoInfo.length === 0) {
      return (
        <div className="flex min-h-[250px] min-w-[800px] items-center justify-center border bg-white">
          <span className="text-xl font-semibold">No image available</span>
        </div>
      );
    }
  
    return (
      <>
        {videoInfo.map((video, index) => (
          <div key={index} className="flex min-h-[500px] min-w-[800px] flex-col items-center justify-center border bg-white">
            <Image
              width={800}
              height={500}
              className="w-[80%] object-contain"
              src={video.thumbnail.thumbnails[0].url}
              alt="thumbnail"
            />
            <h2 className="mx-4 mt-4 text-2xl font-semibold">{video.title}</h2>
          </div>
        ))}
      </>
    );
  };

export default VideoList;
