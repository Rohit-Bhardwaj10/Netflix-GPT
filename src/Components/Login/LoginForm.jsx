import React, { useState } from "react";
import { Validate } from "./Validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../../utils/Firebase";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();


  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    const valid = Validate(email, password);
    setError(valid);

    if (valid) return;

    // sign-in/signUp
    if (!isSignIn) {
      // sign up
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //updating user profile for display name
          updateProfile(user, {
            displayName: userName,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",
          })
            .then(async () => {
              // Force refresh the current user to get updated data
              await user.reload();
              const { uid, displayName, email, photoURL } = auth.currentUser;
      
              // Dispatch to Redux store
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setError(errorMessage);
            });
          // save user to redux store from here is a option but also have to do it in signin so use firebase's built in function (onauthstate change)
          setEmail("");
          setPassword("");
          setUserName("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setError(errorMessage);
        });
    } else {
      // sign in
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setEmail("");
          setPassword("");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };

  // TODO:
  //  make a redux store and store the user create in that store
  // make adduser and removeuser in store
  // redirect to browse page after succesfull signup/signin using dispatch..
  
  return (
    <div className="flex justify-center items-center mx-auto left-0 right-0">
      <div className="w-full max-w-sm p-6 space-y-6 bg-black/85 rounded-md  max-h-fit absolute top-44">
        <h1 className="text-3xl font-semibold text-white">
          {isSignIn ? "Sign-In" : "Sign-Up"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignIn ? (
            ""
          ) : (
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter Your Name..."
              className="w-full h-12 px-4 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder:text-zinc-400"
            />
          )}

          <input
            // ref={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email or mobile number"
            className="w-full h-12 px-4 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder:text-zinc-400"
          />

          <input
            //  ref={password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder:text-zinc-400"
          />
          <p className="text-red-600 font-bold">{error}</p>
          <button
            type="submit"
            className="w-full h-12 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex items-center space-x-2">
            {isSignIn ? (
              <input
                type="checkbox"
                id="remember"
                className="rounded border-zinc-700 text-red-600 focus:ring-red-600"
              />
            ) : (
              ""
            )}

            {isSignIn ? (
              <label htmlFor="remember" className="text-sm text-zinc-400">
                Remember me
              </label>
            ) : (
              ""
            )}
          </div>

          <a
            href="/forgot-password"
            className="block text-sm text-zinc-400 hover:underline"
          >
            {isSignIn ? "Forgot password?" : ""}
          </a>
        </form>

        <div className="text-zinc-400 text-sm flex gap-1">
          {isSignIn ? "New To Netflix ? " : "Already a member ? "}
          <button
            className="text-white cursor-pointer hover:underline "
            onClick={toggleForm}
          >
            {isSignIn ? "Sign up now" : "Sig-In"}
          </button>
        </div>

        <div className="text-xs text-zinc-500">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a
          bot.{" "}
          <a href="/learn-more" className="text-blue-500 hover:underline">
            Learn more
          </a>
          .
        </div>
      </div>
    </div>
  );
}
