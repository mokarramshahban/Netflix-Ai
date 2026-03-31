import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainerBrowse from "./MainContainerBrowse";
import SecondaryContainerBrowse from "./SecondaryContainerBrowse";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="overflow-x-hidden">
      <Header />
      <MainContainerBrowse />
      <SecondaryContainerBrowse />
    </div>
  );
};

export default Browse;
