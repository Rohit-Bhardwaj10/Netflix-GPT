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
      <MainContiner/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
