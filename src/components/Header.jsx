import React, { useEffect } from "react";
import LOGO from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { IoIosLogOut } from "react-icons/io";
import { RiGeminiFill } from "react-icons/ri";
import { toggleAiSearchView } from "../utils/aiSearchSlice";
import { IoMdHome } from "react-icons/io";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { BsTranslate } from "react-icons/bs";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showAiSearch = useSelector((store) => store.aiSearch.aiSearchView);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearchWithAiClick = () => {
    dispatch(toggleAiSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute z-9 w-full -my-6 bg-black/1 flex justify-between">
      <img className="w-50 mx-10" src={LOGO} alt="" />
      {user && (
        <div className="flex items-end gap-1 mx-3">
          { showAiSearch &&
          <div className=" text-white flex bg-transparent border rounded-sm p-1 gap-1 items-center">
            <BsTranslate />
            <select name="" id="" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="text-black"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
}
          <img
            className="w-15 h-15 mx-2 rounded-sm"
            src={user.photoURL}
            alt=""
          />
          {showAiSearch ? (
            <button
              onClick={handleSearchWithAiClick}
              className="text-white border border-white h-5/12 px-6 rounded-sm mx-2 hover:scale-95 transition-all duration-200 bg-black/20 flex items-center gap-3"
            >
              Home <IoMdHome />
            </button>
          ) : (
            <button
              onClick={handleSearchWithAiClick}
              className="text-white border border-white h-5/12 px-6 rounded-sm mx-2 flex items-center gap-3 bg-black/20 transition-all duration-200 hover:scale-95 hover:bg-linear-to-r hover:from-red-500 hover:via-green-500 hover:to-blue-500"
            >
              Search with Ai <RiGeminiFill />
            </button>
          )}

          <button
            onClick={handleSignOut}
            className="text-white border border-white h-5/12 px-6 rounded-sm mx-2 hover:scale-95 transition-all duration-200 bg-black/20 flex items-center gap-3"
          >
            Sign out
            <IoIosLogOut />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
