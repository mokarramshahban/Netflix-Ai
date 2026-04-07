import { FaSearch } from "react-icons/fa";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const AiSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang)
  return (
    <div className="p-12 absolute bg-black/70 text-stone-50 w-full sm:w-7/12 md:w-5/12 mx-auto my-25 left-0 right-0 rounded-lg">
      <form className="flex" action="">
        <input
          className="m-4 p-3 bg-gray-700 w-full rounded-md"
          type="text"
          placeholder={lang[langKey].aiSearchBarPlaceHolder}
        />
        <button className="text-1xl m-4 px-6 py-3  flex items-center gap-2 bg-gray-700 rounded-md transition-all duration-200 hover:scale-95 hover:bg-linear-to-r hover:from-red-400 hover:via-green-400 hover:to-blue-400 hover:text-black">
          {lang[langKey].search}<FaSearch />
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;
