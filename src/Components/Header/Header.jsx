import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import app from "../../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/UserSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    const auth = getAuth(app);
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

  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL: photoURL}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[]); 

  return (
    <div className="absolute w-screen px-12 py-6 bg-gradient-to-b from-black flex justify-between align-middle text-center">
      <img src="./public/Images/logo.png" alt="logo" className="w-48" />
{user ?       <div className="flex gap-2 align-middle">
      <button
          onClick={handleSignOut}
          className="text-3xl font-bold text-white text-center align-middle py-4 cursor-pointer"
        >
          sign Out
        </button> 
        <img
          className="w-12 h-12 flex-centered mt-3"
          src={user?.photoURL}
          alt="user avatar"
        />
      </div>:""}
    </div>
  );
};

export default Header;
