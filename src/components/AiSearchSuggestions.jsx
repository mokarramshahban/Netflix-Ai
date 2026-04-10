import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RiGeminiFill } from "react-icons/ri";


const AiSearchSuggestions = () => {
  const { movieNames, movieResults, isLoading } = useSelector((store) => store.aiSearch);

  if (isLoading) {
    return (
      <div className="p-12 absolute bg-black/70 text-stone-50 w-full sm:w-8/12 md:w-10/12 mx-auto my-125 md:my-105 left-0 right-0 rounded-lg flex justify-center items-center">
        <h1 className="text-3xl font-bold animate-pulse flex items-center gap-3"><RiGeminiFill /> Thinking...</h1>
      </div>
    );
  }

  if (!movieNames) return null;

  return (
    <div className="p-4 absolute bg-black/70 text-stone-50 w-full md:w-10/12 mx-1 md:mx-auto my-125 md:my-105 left-0 right-0 rounded-lg">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default AiSearchSuggestions;
