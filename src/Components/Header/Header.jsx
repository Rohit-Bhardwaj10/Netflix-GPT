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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL: photoURL}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // to apply some logic when this component is unmounted we have to return a function here that unsubscribes the listener
    return () => unsubscribe();

  },[]); 

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center z-20">
      <img 
        src="./public/Images/logo.png" 
        alt="Netflix Logo" 
        className="w-36 md:w-44" 
      />
      {user && (
        <div className="flex items-center gap-2">
          <button
            onClick={handleSignOut}
            className="px-4 py-2 text-white hover:text-gray-300 transition-colors text-xl"
          >
            Sign Out
          </button>
          <img
            className="w-10 h-10 rounded-lg border-2 border-transparent hover:border-white transition-all"
            src={user?.photoURL}
            alt="User Avatar"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
