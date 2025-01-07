import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MovieSlice";

const useFetch = ()=>{
  const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTJhNTRmOTFmMzZlMTMzODY0NjlhNzJhMTM4NjE3YiIsIm5iZiI6MTczNjE4NjQ2OS4xNzkwMDAxLCJzdWIiOiI2NzdjMWE2NTRmOTAwMWRjYTk3MjRkYmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SEudCVV5G3q1LH65OgNkdrzuSZIFUzL1Khg-9VkNSLQ'
    } 
  };

  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getTrendingMovies();  
  }, []);
}

export default useFetch;