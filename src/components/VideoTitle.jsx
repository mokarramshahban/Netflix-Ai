import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-25 md:pt-83 px-4 md:px-12 absolute bg-linear-to-r from-black/90 w-full aspect-video">
      <h1 className="text-white text-3xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:block text-white text-xl w-1/3 py-4">{overview}</p>
      <div className="flex gap-4 pt-2">
        <button className="text-black text-lg md:text-2xl flex items-center justify-center px-3 md:px-7 py-1 md:py-2 gap-1 md:gap-4 rounded bg-white cursor-pointer hover:scale-95 transition-all duration-200">
          <FaPlay />
          Play
        </button>
        <button className="text-white text-lg md:text-2xl flex items-center justify-center px-3 md:px-7 py-1 md:py-2 gap-1 md:gap-4 rounded bg-white/20 cursor-pointer hover:scale-95 transition-all duration-200">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
