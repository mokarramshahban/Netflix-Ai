import React from "react";
import LOGO from "../assets/images/logo.png";
import USER_ICON from "../assets/images/userIcon.jpg";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/error")
      });
  };
  return (
    <div className="absolute z-9 w-full bg-linear-330 from-black flex justify-between">
      <img className="w-35 mx-10" src={LOGO} alt="" />
      <div className="flex items-center mx-3">
        <img className="w-15 h-15 m-2 rounded-sm" src={USER_ICON} alt="" />
        <button
          onClick={handleSignOut}
          className="text-white border border-white h-5/12 px-3 rounded-sm mx-2 hover:scale-95 transition-all duration-200"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
