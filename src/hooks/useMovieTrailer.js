import { useDispatch } from "react-redux";
import { MOVIES_VIDEO_URL, OPTIONS_API_TMDB } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideo = async () => {
    const data = await fetch(
      MOVIES_VIDEO_URL + movieId + "/videos",
      OPTIONS_API_TMDB,
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMoviesVideo();
  }, []);
};

export default useMovieTrailer;
