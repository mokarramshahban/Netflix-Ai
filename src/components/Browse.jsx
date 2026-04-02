import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainerBrowse from "./MainContainerBrowse";
import SecondaryContainerBrowse from "./SecondaryContainerBrowse";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="overflow-x-hidden">
      <Header />
      <MainContainerBrowse />
      <SecondaryContainerBrowse />
    </div>
  );
};

export default Browse;
