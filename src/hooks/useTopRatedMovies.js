import { useDispatch } from "react-redux";
import { OPTIONS_API_TMDB, TOP_RATED_MOVIES_URL } from "../utils/constants";
import { addPopularMovies, addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_URL, OPTIONS_API_TMDB);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
