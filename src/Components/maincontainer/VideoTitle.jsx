import React from 'react'
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute pt-[20%] px-14  text-white z-10 w-screen h-screen bg-gradient-to-r from-black' >
      <h1 className='text-4xl font-bold mb-2' >{title}</h1>
      <p className='text-md w-1/3' >{overview}</p>
      <div className='flex items-center gap-2'>
        <button className='bg-white text-black px-6 py-2 rounded-md text-xl font-bold mt-4 flex items-center gap-2'>
          <FaPlay /> Play
        </button>
        <button className='bg-gray-500 text-white px-6 py-2 rounded-md text-xl font-bold mt-4 flex items-center gap-2'>
          <FaInfoCircle /> More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
