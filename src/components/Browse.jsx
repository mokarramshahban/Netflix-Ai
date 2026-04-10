import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainerBrowse from "./MainContainerBrowse";
import SecondaryContainerBrowse from "./SecondaryContainerBrowse";
import AiSearchPage from "./AiSearchPage";

const Browse = () => {
  const showAiSearch = useSelector((store) => store.aiSearch.aiSearchView);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="overflow-x-hidden bg-black">
      <Header />
      {showAiSearch ? (
        <AiSearchPage />
      ) : (
        <>
          <MainContainerBrowse />
          <SecondaryContainerBrowse />
        </>
      )}
    </div>
  );
};

export default Browse;
