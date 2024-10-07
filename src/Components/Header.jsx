import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="w-screen absolute  z-10 flex items-center justify-between ">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-40 bg-gradient-to-r from-gray-800"
      ></img>

      { user && (<div className="flex items-center justify-center">
        <div><img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
        </div>
        <div className=" m-4 p-2 border-2 border-red-500 rounded-lg bg-black text-red-500 font-semibold">
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>)}
    </div>
  );
};

export default Header;
