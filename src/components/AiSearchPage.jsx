import BG_IMAGE from "../assets/images/login-bg.jpg";
import AiSearchBar from "./AiSearchBar";
import AiSearchSuggestions from "./AiSearchSuggestions";

const AiSearchPage = () => {
  return (
    <div>
      <div className="fixed h-full w-full overflow-hidden -z-10">
        <img className="h-full w-full object-cover" src={BG_IMAGE} alt="background" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div>
        <AiSearchBar />
        <AiSearchSuggestions />
      </div>
    </div>
  );
};

export default AiSearchPage;
