import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';

const HomeScreen = ()=> {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner/>

        <Row
        title='NETFLIX ORIGINALS'
        fetchUrl = {"/discover/tv?api_key=8e42ee1a9479f29a21cc0807854b49e5&with_networks=213"}
        isLargeRow />
        <Row
        title='Trending Now'
        fetchUrl = {"/trending/all/week?api_key=8e42ee1a9479f29a21cc0807854b49e5&language=en-US"} />
        <Row
         title='Top Rated'
         fetchUrl ={ "/movie/top_rated?api_key=8e42ee1a9479f29a21cc0807854b49e5&language=en-US"} />
        <Row
         title='Action Movies'
         fetchUrl ={  "/discover/movie?api_key=8e42ee1a9479f29a21cc0807854b49e5&with_genres=28"} />
        <Row
         title='Comedy Movies'
         fetchUrl ={ "/discover/movie?api_key=8e42ee1a9479f29a21cc0807854b49e5&with_genres=35"} />
        <Row
         title='Horror Movies'
         fetchUrl ={ "/discover/movie?api_key=8e42ee1a9479f29a21cc0807854b49e5&with_genres=27"} />
        <Row
         title='Romance Movies'
         fetchUrl ={ "/discover/movie?api_key=8e42ee1a9479f29a21cc0807854b49e5&with_genres=10749"} />
        <Row
         title='Documentaries'
         fetchUrl ={ "/discover/movie?api_key=8e42ee1a9479f29a21cc0807854b49e5&with_genres=99"} />

      
    </div>
  )
}


export default HomeScreen;
