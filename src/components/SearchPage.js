import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

const SearchPage = () => {
  const [movieName, setMovieName] = useState([]);
  const [searchDatas, setSearchData] = useState("");
  const [selectMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US&query=${searchDatas}`
    );
    setMovieName(response.data.results);
  };

  const selectMovies = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="container">
      {selectMovie ? (
        <MovieDetail movie={selectMovie} />
      ) : (
        <SearchMovies
          movieName={movieName}
          searchDatas={searchDatas}
          setSearchData={setSearchData}
          searchMovies={searchMovies}
          selectMovies={selectMovies}
        />
      )}
    </div>
  );
};

function refreshPage() {
  window.location.reload(false);
}

const SearchMovies = ({
  movieName,
  searchDatas,
  setSearchData,
  searchMovies,
  selectMovies,
}) => {
  return (
    <div >
      <form className="home_Search_Container" onSubmit={searchMovies}>
        <input className="home_Search"
          type="text"
          value={searchDatas}
          placeholder="Movie Name"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button className="home_SearchButton" type="submit">Search</button>
        <button className="refresh-Button" onClick={refreshPage}>Click to reload!</button>
      </form>
      <div className="movies_Details">
        {movieName.map((movie) => (
          <div className="movie_Line" key={movie.id} onClick={() => selectMovies(movie)}>
             <img 
             className="home-Image"
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt={movie.title}
              height="150px"
            />
            <div className="movie-Name" >{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieDetail = ({ movie }) => {
    const navigate=useNavigate();
    const navigatetoo=()=>{
        navigate('/')
    }

    const [like,setlike]=useState(100)
    const [dislike,setdislike]=useState(4)
    
    
    const [likeactive,setlikeactive]=useState(false);
    const [dislikeactive,setdislikeactive]=useState(false)
    
    function likef(){
        if(likeactive){
            setlikeactive(false)
            setlike(like-1)
        }
        else{
            setlikeactive(true)
            setlike(like+1)
            if(dislikeactive){
                setdislikeactive(false)
                setlike(like+1)
                setdislike(dislike-1)
            }
        }
    }
    
    function dislikef(){
        if(dislikeactive){
            setdislikeactive(false)
            setdislike(dislike-1)
        }
        else{
            setdislikeactive(true)
            setdislike(dislike+1)
            if(likeactive){
                setlikeactive(false)
                setdislike(dislike+1)
                setlike(like-1)
            }
        }
    }



  return (
    <div className="single_Movie_Details">
    <button className="single-refresh-Button" onClick={refreshPage}>Back to search</button>
        
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                height="200px"
                className="image"
            />
            <h2 className="single_Movie_Details_Header">{movie.title}</h2>
            <p className="single_Movie_Details_Overview">{movie.overview}</p>
            <p className="single_Movie_Details_release_date">Release Date: {movie.release_date}</p>
            
            <button onClick={likef} className="like-Button">Like{like}</button>
            <button onClick={dislikef} className="dislike-Button">Dislike {dislike}</button>

            <button onClick={navigatetoo} className="return_Home_Button">Return to Home</button>
        
    </div>
  );
};

export default SearchPage;