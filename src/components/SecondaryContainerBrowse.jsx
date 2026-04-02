import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainerBrowse = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies) return;

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className=" -mt-63 z-10 relative">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainerBrowse;
