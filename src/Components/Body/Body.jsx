import React, { useEffect } from "react";
import Login from "../Login/Login";
import Browse from "../Browse/Browse";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "../SIgnUp/SignUp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/UserSlice";

const Body = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default Body;
