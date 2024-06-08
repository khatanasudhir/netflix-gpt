import React, { useEffect } from "react";
import Header from "./Header";
import { MOVIES_OPTIONS } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilis/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoviesOptions = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIES_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMoviesOptions();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
