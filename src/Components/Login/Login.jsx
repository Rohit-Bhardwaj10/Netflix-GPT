import React from 'react'
import Header from '../Header/Header'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <Header/>
      <div className='bg-gradient-to-b from-black'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg" alt="fill screen"  className=''/>
      </div>
      <LoginForm/>
    </div>
  
  )
}

export default Login
