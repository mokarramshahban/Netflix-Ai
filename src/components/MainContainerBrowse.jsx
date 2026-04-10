import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainerBrowse = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[2];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="mt-42 md:-mt-33 border-t md:border-t-0 border-b md:border-b-0 border-amber-100">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainerBrowse;
