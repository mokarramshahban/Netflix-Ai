import { FaSearch } from "react-icons/fa";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import puter from "@heyputer/puter.js";
import {
  MOVIE_SEARCH_DETAILS_TMDB_URL1,
  MOVIE_SEARCH_DETAILS_TMDB_URL2,
  OPTIONS_API_TMDB,
} from "../utils/constants";
import { addAiMovieResult, setAiSearchLoading } from "../utils/aiSearchSlice";


const AiSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      MOVIE_SEARCH_DETAILS_TMDB_URL1 + movie + MOVIE_SEARCH_DETAILS_TMDB_URL2,
      OPTIONS_API_TMDB,
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchClick = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      dispatch(setAiSearchLoading(true));

      const response = await puter.ai.chat(query);
      const movieNames = response?.message?.content;
      if (!movieNames) {
        console.error("AI did not return any movie suggestions.");
        return;
      }
      const suggestedMovies = movieNames.split(",").map((movie) => movie.trim());
      console.log("FlixFusion Ai Search Recommended Movies:", suggestedMovies);

      const promiseArray = suggestedMovies.map((movie) =>
        searchMovieTMDB(movie),
      );
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(
        addAiMovieResult({
          movieNames: suggestedMovies,
          movieResults: tmdbResults,
        }),
      );
    } catch (error) {
      console.error("Error fetching from Puter AI:", error);
    } finally {
      dispatch(setAiSearchLoading(false));
    }
  };
  return (
    <div className="p-12 mt-50 absolute bg-black/70 text-stone-50 w-full md:w-5/12 mx-1 md:mx-auto my-25 left-0 right-0 rounded-lg">
      <form className="flex flex-col md:flex-row" action="" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="m-1 md:m-4 p-3 bg-gray-700 w-full rounded-md"
          type="text"
          placeholder={lang[langKey].aiSearchBarPlaceHolder}
        />
        <button
          onClick={handleSearchClick}
          className="text-1xl m-4 px-25 md:px-6 py-3  flex items-center gap-2 bg-gray-700 rounded-md transition-all duration-200 hover:scale-95 hover:bg-linear-to-r hover:from-red-400 hover:via-green-400 hover:to-blue-400 hover:text-black"
        >
          {lang[langKey].search}
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;
