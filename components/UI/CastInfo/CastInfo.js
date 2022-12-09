import { useState, useEffect } from 'react';
import axios from 'axios';


const CastInfo = (props) => {
    const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState([]);

  //   /discover/movie?with_genres=28&primary_release_year=2022
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.mediaType === 'movie' ? 'movie' : 'tv'}/${props.mediaId}/credits?&api_key=4c84c6329ec1b7a3dc0a99038a8f621a&language=en-US`
      )
      .then(function (response) {
        setCredits(response.data);
        setLoadingData(false);
        // handle success
        console.log("Success response for cast and crew");
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log("error response for cast and crew");
        console.log(error);
      });
  }, [props.updateData]);

  const showCast = () => {
    if(loadingData !== true){
      return credits.cast.map((item, index) => {
        return(
            <ul className="cast-info__crew" key={index}>
                    <li>{item.character}</li>
                    <li>{item.name}</li>
              </ul>
            )
        })
    } else{
      return(<div>Loading Cast</div>)
    }
   }

   const showCrew = () => {
    if(loadingData !== true){
      return credits.crew.map((item, index) => {
        return(
            <ul className="cast-info__crew" key={index}>
                    <li>{item.job}</li>
                    <li>{item.name}</li>
              </ul>
            )
        })
    } else{
      return(<div>Loading Crew</div>)
    }
   }

    return(
        <div className="cast-info">
            <div className="cast-info__group-title">
                Cast
            </div>
            <div className="cast-info__list">
                {showCast()}
              <div className="cast-info__group-title">
                Crew
            </div>
            <div className="cast-info__list">
              {showCrew()}
             </div>
        </div>
    </div>
    )
}

export default CastInfo;





