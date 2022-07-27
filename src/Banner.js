// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
// import requests from './Requests'

const Banner = () => {
  const [movie,setMovie] = useState([]);


  useEffect(()=>{
    async function fetchData(){
        const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=8e42ee1a9479f29a21cc0807854b49e5&with_networks=213");
        const data =  await response.json();
        setMovie(
            data.results[Math.floor(Math.random()* data.results.length)]   
        );
        return response
    }


    fetchData()
   
  },[])

console.log(movie);


 function truncate(string, n){
     if(string?.length>n){
        return `${string.substring(0, n - 1)}...`

    }else{
        return string;
    }
 }


  return (
   <header 
   className='banner'
   style={{
   backgroundSize: 'cover',
   backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
   backgroundPosition: 'center center'
   }}>
    <div className='banner_content'>
        <h1 className="banner_title">{movie?.name || movie?.original_name || movie?.name}</h1>
        <div className='banner_buttons'>
            <button className="banner_button">Play</button>
            <button className="banner_button">My list</button>
        </div>
        <h1 className="banner_description">{truncate(movie.overview,150)}</h1>
    </div>

    <div className="banner--fadeButton"/>

   </header>
  )
}

export default Banner;
