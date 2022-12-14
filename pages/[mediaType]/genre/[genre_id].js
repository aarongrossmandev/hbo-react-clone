import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../../../components/HBOProvider";
import { useRouter } from "next/router";
import MainLayout from "../../../components/Layouts/MainLayout";
import FeaturedMedia from "../../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../../components/UI/MediaRow/MediaRow";
import AuthCheck from "../../../components/AuthCheck";
import GenreNav from "../../../components/UI/GenreNav/GenreNav";
import axios from 'axios';
import { shuffleArray } from "../../../components/Utilities";

export default function MediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter();

  const showRandomMedia = () => {
    let thumbType;
    return props.genresData.map((item, index) => {
        thumbType = shuffleArray(globalState.thumbTypes)[0]
        return(
        <MediaRow
        updateData={props.query.genre_id}
        title={item.name}
        type={thumbType}
        endpoint={`discover/${props.query.mediaType}?with_genres=${props.query.genre_id}&sort_by=popularity.desc&primary_release_year=2021&page=${index + 1}`}
        key={item.id}
      />
        )
    })
  }

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/original${props.featuredData.backdrop_path}`}
        title={props.query.mediaType === 'movie' ? props.featuredData.title : props.featuredData.name}
        linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
        type="single"
        mediaType={props.query.mediaType}
        mediaId={props.featuredData.id}
      />
      <GenreNav mediaType={props.query.mediaType} genresData={props.genresData} />
      
      {showRandomMedia()}
    
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
    let genresData;
    let featuredData;
    try{
      genresData = await axios.get(
        `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=4c84c6329ec1b7a3dc0a99038a8f621a&language=en-US`,
      );
      featuredData = await axios.get(
        `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2022&with_genres=${context.query.genre_id}&api_key=4c84c6329ec1b7a3dc0a99038a8f621a&language=en-US`,
      );
      console.log("genresData");
      console.log(genresData.data);

    } catch(error){
        console.log("error");
      console.log(error);
    }
    return {
      props: { 
        genresData: genresData.data.genres, 
        featuredData: shuffleArray(featuredData.data.results)[0],
        query: context.query,
        },
      //will be passed to the page component as props
    };
  }