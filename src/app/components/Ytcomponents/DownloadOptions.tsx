import { DownloadOptionsProps } from '@/app/types/youtube';
import { Button } from '@nextui-org/react';

const DownloadOptions: React.FC<DownloadOptionsProps> = ({
    handleDropClick,
    showDrop,
    showModal,
    getTestData,
    handleDropItemClick,
    hrefValue,
    newTitle,
  }) => (
    <div className="mt-6 flex w-[450px] justify-between">
      <Button  className="bg-[#93dc99]">
        <a href={hrefValue} target="_blank" rel="noopener noreferrer" download={`${newTitle}.mp3`}>
          Download Audio
        </a>
      </Button>
      <div className="flex flex-col items-end">
        <Button  className="bg-[#93dc99]" onClick={handleDropClick}>
          Download Video
        </Button>
        {showDrop && (
          <div className="mt-2 grid grid-cols-2">
            {['240p', '360p', '480p', '720p', '1080p', '1440p60'].map((quality) => (
              <Button
                key={quality}
                className="mt-3 bg-gray-200"
                onClick={() => handleDropItemClick(quality)}
                disabled={getTestData.filter((data) => data.title === quality).length === 0 || showModal}
              >
                <a href={hrefValue} target="_blank" rel="noopener noreferrer" download={newTitle}>
                  {quality}
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

export default DownloadOptions;
