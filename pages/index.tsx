import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import { useRouter } from "next/router";
import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";


export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow
        title="Movies"
        type="large-h"
        endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
      />
      
      <MediaRow
        title="Series"
        type="small-h"
        endpoint="discover/tv?sort_by=popularity.desc&primary_release_year=2022"
      />
      <MediaRow
        title="Action"
        type="large-v"
        endpoint="discover/movie?with_genres=28&primary_release_year=2022"
      />
      <MediaRow
        title="Horror"
        type="small-v"
        endpoint="discover/movie?with_genres=27&primary_release_year=2022"
      />
      <MediaRow
        title="Animations"
        type="large-h"
        endpoint="discover/movie?with_genres=16&primary_release_year=2022"
      />
      <MediaRow
        title="Sci-fi"
        type="small-v"
        endpoint="discover/movie?with_genres=878&primary_release_year=2022"
      />
    </MainLayout>
  );
}

//API TO LOAD ALL DATA----setup through backend
//api.hbomax.com/api/homepage JSON with all of the data for that page

// API to load individuals
//api.hbomax.com/api/home/movies
//api.hbomax.com/api/home/series
//api.hbomax.com/api/home/action
