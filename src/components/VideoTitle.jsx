import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-83 px-12 absolute bg-linear-to-r from-black/90 w-full aspect-video">
      <h1 className="text-white text-4xl font-bold">{title}</h1>
      <p className="text-white text-xl w-1/3 py-4">{overview}</p>
      <div className="flex gap-4">
        <button className="text-black text-2xl flex items-center justify-center px-7 py-2 gap-4 rounded bg-white cursor-pointer hover:scale-95 transition-all duration-200">
          <FaPlay />
          Play
        </button>
        <button className="text-white text-2xl flex items-center justify-center px-7 py-2 gap-4 rounded bg-white/20 cursor-pointer hover:scale-95 transition-all duration-200">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
