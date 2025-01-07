import React, { useEffect } from 'react'
import Header from '../Header/Header'
import useFetch from '../../Hooks/useFetch';
import MainContiner from '../maincontainer/MainContiner';
import SecondaryContainer from '../secondarycontainer/SecondaryContainer';

const Browse = () => {
  useFetch();
  return (
    <div>
      <Header/>
      <div className="relative">
        <MainContiner/>
      </div>
      <div className="relative z-20 text-white">
        <SecondaryContainer/>
      </div>
    </div>
  )
}

export default Browse
