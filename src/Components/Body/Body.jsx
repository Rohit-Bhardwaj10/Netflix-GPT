import React from 'react'
import Login from '../Login/Login'
import Browse from '../Browse/Browse'
import {BrowserRouter as Router , Route,Routes, Navigate} from 'react-router-dom'
import SignUp from '../SIgnUp/SignUp'



const Body = () => {

 
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    </Router>
  )
}

export default Body
