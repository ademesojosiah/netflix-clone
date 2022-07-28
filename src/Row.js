import React, { useEffect, useState } from 'react';
import './Row.css';

const Row = ({title, fetchUrl , isLargeRow = false}) => {
    const [movies,setMovies] = useState([]);



    useEffect(()=>{
    async function getData(){
        const response = await fetch(`https://api.themoviedb.org/3${fetchUrl}`);
        const data = await response.json();
        setMovies(data.results);
        return response;
    }
    getData();
    },[fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row_posters">
          {movies.map((movie)=>(
              ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path))&&(
              <img  key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          )))}
      </div>
    </div>
  )
} 

export default Row
