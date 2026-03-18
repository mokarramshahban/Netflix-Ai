import React, { useEffect } from "react";
import LOGO from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
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

  return (
    <div className="absolute z-9 w-full bg-linear-330 from-black flex justify-between">
      <img className="w-35 mx-10" src={LOGO} alt="" />
      {user && (
        <div className="flex items-center mx-3">
          <img
            className="w-15 h-15 m-2 rounded-sm"
            src={user.photoURL}
            alt=""
          />
          <button
            onClick={handleSignOut}
            className="text-white border border-white h-5/12 px-3 rounded-sm mx-2 hover:scale-95 transition-all duration-200"
          >
            Sign out
          </button>
        </div>
      )}
      
    </div>
  );
};

export default Header;
