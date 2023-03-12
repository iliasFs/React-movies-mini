import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//c1ab2ba6

const API_URL = "http://www.omdbapi.com?apikey=c1ab2ba6";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  // const searchMovies = async (title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`)
  //   const data = await response.json()

  //   console.log(data)

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  };

  const movie1 = {
    Title: "Superman, Spiderman or Batman",
    Year: "2011",
    imdbID: "tt2084949",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
