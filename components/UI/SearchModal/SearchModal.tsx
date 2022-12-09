import { useStateContext } from "../../HBOProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchModal = (props: any) => {
  const globalState = useStateContext();
  const [popData, setPopData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const popData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=4c84c6329ec1b7a3dc0a99038a8f621a&language=en-US`
      );
      setPopData(popData.data.results.filter((item: any, i: any) => i < 14));
      setShowResults(false);
      console.log("popdata", popData.data.results);
    })();
  }, []);

  useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.searchOpen]);

  const handleInput = async (e: any) => {
    try {
      setText(e.target.value);
      let searchData = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=4c84c6329ec1b7a3dc0a99038a8f621a&language=en-US`
      );
      setSearchData(
        searchData.data.results.filter(
          (item: any, i: any) =>
            item.media_type === "tv" || item.media_type === "movie"
        )
      );
      setShowResults(true);
    } catch (error) {
      console.log(error);
    }
  };

  const clickedThumbnail = (type: any, id: any, media_type: any) => {
    if (type === "popular") {
      router.push(`/movie/${id}`);
      globalState.setSearchOpenAction(!globalState.searchOpen);
    }
    if (type === "search") {
      router.push(`/${media_type}/${id}`);
      globalState.setSearchOpenAction(!globalState.searchOpen);
    }
    // else if (type === "search" && media_type === 'tv') {
    //   router.push(`/tv/${id}`);
    //   globalState.setSearchOpenAction(!globalState.searchOpen);
    // } else{
    //   router.push(`/movie/${id}`);
    //   globalState.setSearchOpenAction(!globalState.searchOpen);
    // }
  };

  return (
    <div
      className={`search-modal ${globalState.searchOpen ? "search-modal--active" : ""
        }`}
    >
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          type="text"
          placeholder="search for a title"
          onChange={handleInput}
          value={text}
        />
        <button
          className="search-modal__close-btn"
          onClick={() =>
            globalState.setSearchOpenAction(!globalState.searchOpen)
          }
        >
          <i className="fas fa-times" />
        </button>
      </div>

      <h3 className="search-modal__title">{showResults && searchData.length >= 1 ? `Search Result for ${text}` : 'Popular Searches'} </h3>
      <div className="search-modal__thumbnails">
        {showResults && searchData.length >= 1 ? (
          <SearchResults
            searchData={searchData}
            clickedThumbnail={clickedThumbnail}
          />
        ) : (
          <PopularResults
            popData={popData}
            clickedThumbnail={clickedThumbnail}
          />
        )}
      </div>
    </div>
  );
};

const PopularResults = (props: any) => {
  return props.popData.map((item: any, index: any) => {
    return (
      <div
        key={index}
        className="search-modal__thumbnail"
        onClick={() => props.clickedThumbnail("popular", item.id)}
      >
        <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
        <div className="search-modal__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  });
};

const SearchResults = (props: any) => {
  return props.searchData.map((item: any, index: any) => {
    return (
      <div
        key={index}
        className="search-modal__thumbnail"
        onClick={() => props.clickedThumbnail("popular", item.id, item.media_type)}
      >
        <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
        <div className="search-modal__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  });
};

export default SearchModal;
