import React, { useEffect, useState } from 'react';
import './Row.css';

const Row = ({title,fetchUrl , isLargeRow = false}) => {
    const [movies,setMovies] = useState([]);



    useEffect(()=>{
    async function getData(){
        const response = await fetch(`${fetchUrl}`);
        const data = response.json();
        setMovies(data.results);
        return response;
    }
    getData();
    },[fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      {movies.map((movie)=>{
        return <img src={`"https://image.tmdb.org/t/p/original/${isLargeRow ? movie.backdrop_path : movie.backdrop_path}"`} alt={movies.name} />
      })}
    </div>
  )
}

export default Row
