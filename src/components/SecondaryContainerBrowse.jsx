import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainerBrowse = () => {
  const movies = useSelector((store) => store.movies)

  if (!movies.nowPlayingMovies) return null;

  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Documentry"} movies={movies.nowPlayingMovies} />
      <MovieList title={"RomCom"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainerBrowse