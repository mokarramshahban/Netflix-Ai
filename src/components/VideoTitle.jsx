import { CiPlay1 } from "react-icons/ci";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl w-1/3 py-4">{overview}</p>
      <div className="flex gap-4">
        <button className="text-2xl flex items-center justify-center px-10 py-3 gap-4 rounded bg-black/20 cursor-pointer">
          <CiPlay1 /> Play
        </button>
        <button className="text-2xl flex items-center justify-center px-10 py-3 gap-4 rounded bg-black/20 cursor-pointer">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
