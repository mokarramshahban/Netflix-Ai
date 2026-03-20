import { useEffect } from "react";
import { MOVIES_VIDEO_URL, OPTIONS_API_TMDB } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const getMoviesVideo = async () => {
    const data = await fetch(MOVIES_VIDEO_URL + movieId + "/videos", OPTIONS_API_TMDB);
    const json = await data.json();
    console.log(json);
  };
  useEffect( ()=> {
    getMoviesVideo();
  }, [])
  return <div></div>;
};

export default VideoBackground;
