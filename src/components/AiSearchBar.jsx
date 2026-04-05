import { FaSearch } from "react-icons/fa";

const AiSearchBar = () => {
  return (
    <div className="p-12 absolute bg-black/70 text-stone-50 w-full sm:w-6/12 md:w-4/12 mx-auto my-25 left-0 right-0 rounded-lg">
      <form className="flex" action="">
        <input
          className="m-4 p-3 bg-gray-700 w-full rounded-md"
          type="text"
          placeholder="What would you like to watch today ?"
        />
        <button className="text-2xl m-4 px-6 py-3 bg-gray-700 rounded-md transition-all duration-200 hover:scale-95 hover:bg-linear-to-r hover:from-red-400 hover:via-green-400 hover:to-blue-400 hover:text-black">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;
