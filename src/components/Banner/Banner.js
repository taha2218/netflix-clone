import axios from "axios";
import React, { useEffect, useState } from "react";
import instance from "../../utils/axios/axios";
import requests from "../../utils/axios/Request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [startPlayback, setStartPlayback] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(string, limit) {
    return string?.length > limit
      ? string.substr(0, limit - 1) + " ..."
      : string;
  }

  const mouseEnter = async () => {
    const request = await instance.get(
      `/movie/${movie.id}/videos?api_key=afe4b36c99f69c00ac659cd5eaea8078&language=en-US`
    ).then(
      res => {
        setTrailerKey(res.data.results[0].key);
        console.log(trailerKey);}
    ).catch(
      err => console.log(err)
    );
    // setTimeout(() => {
    //   setStartPlayback(true);
    // }, 200);
  };

  const mouseLeave = () => {
    setTimeout(() => {
      setStartPlayback(false);
      setTrailerKey(null)
    }, 200);
  };

  useEffect(() => {
    if (trailerKey)
      setStartPlayback(true);
  }, [trailerKey])
  

  return (
    <div
      className="banner__container"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {startPlayback ? (
        <div className="playback">
          <iframe
            width="100%"
            height="100%"
            src= {`https://www.youtube.com/embed/${trailerKey}?controls=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      ) : (
        <header
          className="banner"
          style={{
            backgroundImage:
              movie.poster_path &&
              `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <h1 className="banner_description">
              {truncate(`${movie?.overview}`, 250)}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
          </div>
          <div className="banner__fadeBottom" />
        </header>
      )}
    </div>
  );
}

export default Banner;
