export interface VideoInfo {
    thumbnail: { thumbnails: { url: string }[] };
    title: string;
  }
  
  export  interface SearchFormProps {
    videoUrl: string;
    setVideoUrl: (url: string) => void;
    handleSubmit: (e: FormEvent) => void;
    clearSearch: () => void;
  }
  
  export interface VideoListProps {
    videoInfo: VideoInfo[] | null;
  }
  
  export interface DownloadOptionsProps {
    handleDropClick: () => void;
    showDrop: boolean;
    showModal: boolean;
    getTestData: VideoInfo[]; // Assuming it's similar to VideoInfo[]
    handleDropItemClick: (quality: string) => void;
    hrefValue: string;
    newTitle: string;
  }
  
  export interface AlertModalProps {
    message: string;
    onClose: () => void;
  }