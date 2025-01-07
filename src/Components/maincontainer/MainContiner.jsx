import React from 'react'
import {useSelector} from "react-redux"
import VideoContainer from './VideoContainer'
import VideoTitle from './VideoTitle'
import Header from '../Header/Header'
const MainContiner = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if(!movies) return;

  const mainmovie = movies[0];
  console.log(mainmovie);

  const {original_title, overview , id} = mainmovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer movieId={id}/>
      <h1 className='text-white text-2xl font-bold'>MainContainer</h1>
    </div>
  )
}

export default MainContiner
