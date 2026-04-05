import BG_IMAGE from "../assets/images/login-bg.jpg";
import AiSearchBar from "./AiSearchBar";
import AiSearchSuggestions from "./AiSearchSuggestions";

const AiSearchPage = () => {
  return (
    <div>
      <div className="absolute h-full w-full overflow-hidden">
        <img src={BG_IMAGE} alt="" />
      </div>
      <div className="bg-black/60 h-full w-full absolute">
        <AiSearchBar />
        <AiSearchSuggestions />
      </div>
    </div>
  );
};

export default AiSearchPage;
