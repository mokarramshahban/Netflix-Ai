import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainerBrowse from "./MainContainerBrowse";
import SecondaryContainerBrowse from "./SecondaryContainerBrowse";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="overflow-x-hidden">
      <Header />
      <MainContainerBrowse />
      <SecondaryContainerBrowse />
    </div>
  );
};

export default Browse;
