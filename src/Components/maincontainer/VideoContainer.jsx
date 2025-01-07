import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerId } from "../../utils/MovieSlice";
import ReactPlayer from "react-player";

const VideoContainer = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerId = useSelector((store)=>store?.movies.trailerId);

  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTJhNTRmOTFmMzZlMTMzODY0NjlhNzJhMTM4NjE3YiIsIm5iZiI6MTczNjE4NjQ2OS4xNzkwMDAxLCJzdWIiOiI2NzdjMWE2NTRmOTAwMWRjYTk3MjRkYmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SEudCVV5G3q1LH65OgNkdrzuSZIFUzL1Khg-9VkNSLQ",
    },
  };

  const getVideo = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    console.log(json.results);
    const trailer = json.results.filter((video) => video.type === "Trailer");
    console.log(trailer[0].key);
    dispatch(addtrailerId(trailer[0].key));
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="w-screen h-screen absolute z-0 bg-black">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailerId}`}
        width="100%"
        height="100%"
        playing={true}
        controls={false}
        muted={true}
        loop={true}
        style={{ position: 'absolute', top: '0', left: '0' }}
        config={{
          youtube: {
            playerVars: {
              origin: window.location.origin,
              enablejsapi: 1
            }
          }
        }}
      />
    </div>
  );
};

export default VideoContainer;
