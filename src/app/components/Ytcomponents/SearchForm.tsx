import { SearchFormProps } from '@/app/types/youtube';
import {  Button } from '@nextui-org/react';
import { ChangeEvent } from 'react';

const SearchForm: React.FC<SearchFormProps> = ({ videoUrl, setVideoUrl, handleSubmit, clearSearch }) => {
    return (
      <form onSubmit={handleSubmit} className="mx-auto my-6 lg:min-w-[600px] max-md:w-[80%]">
        <div className="flex items-center border-b-2 border-[#93dc99] py-2">
          <input
            type="text"
            value={videoUrl}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setVideoUrl(e.target.value)}
            className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
            placeholder="Enter Youtube URL"
          />
          <Button  color="danger" onClick={clearSearch} className="max-md:px-2 max-md:text-sm">
            Clear
          </Button>
          <Button   type="submit" className="ml-4 max-md:px-2 max-md:text-sm bg-[#93dc99]">
            Search
          </Button>
        </div>
      </form>
    );
  };
export default SearchForm;
