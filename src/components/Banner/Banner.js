import axios from "axios";
import React, { useEffect, useState } from "react";
import instance from "../../utils/axios/axios";
import requests from "../../utils/axios/Request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, limit) {
    return string?.length > limit
      ? string.substr(0, limit - 1) + " ..."
      : string;
  }

  return (
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
            { movie?.title || movie?.name || movie?.original_name }
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(`${movie?.overview}`, 250)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
