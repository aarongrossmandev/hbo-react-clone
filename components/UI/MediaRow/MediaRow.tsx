import { useState, useEffect } from "react";
import axios from "axios";
import {shuffleArray} from '../../Utilities';

const MediaRow = (props: any) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);
  
//   /discover/movie?with_genres=28&primary_release_year=2022
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/${props.endpoint}&api_key=4c84c6329ec1b7a3dc0a99038a8f621a&language=en-US`)
      .then(function (response) {
        setMoviesData(shuffleArray(response.data.results))
        setLoadingData(false);
        // handle success
        console.log('Success response for ' + props.title);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log('error response for ' + props.title);
        console.log(error);
      })
  }, []);

  const loopComp = (comp: any, digit: any) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  const showThumbnails = () => {
    
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
        return <Thumbnail movieData={movie} key={movies}/>
      });
  };
  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {showThumbnails()}

        {/* {loopComp(
                    (<Thumbnail />), 10)} */}
      </div>
    </div>
  );
};

const Thumbnail = (props: any) => {
  return (
    <div className="media-row__thumbnail">
      <img src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`}/>
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};

export default MediaRow;
