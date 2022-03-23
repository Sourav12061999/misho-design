import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Movie from "../../components/Movie Details/movie";
import MovieSlider from "../../components/Moviecard/movieSlider";
interface MoviedetailsInterface {
  title: string;
  image: string;
  rating: number;
  rateCount: number;
  about: string;
  homepage: string;
}
interface Similarmovie {
  id: number;
  heading: string;
  about: string;
  image: string;
  rating: number;
  rate_count: number;
}
interface Props {
  details: MoviedetailsInterface;
  similar: Array<Similarmovie>;
}
function Moviedetails(props: Props) {
  const { details, similar } = props;
  return (
    <div>
      <Head>
        <title>Movie App</title>
        <meta
          name="description"
          content="This a  movie app made by Sourav Das"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ width: "90%", margin: "auto" }}>
        <Movie details={details} />
        <MovieSlider heading="Similar Movies" data={similar} />
      </main>
    </div>
  );
}
export default Moviedetails;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { movie_id: "524434" },
      },
    ],
    fallback: true,
  };
}
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.movie_id}?api_key=84bd2ca964c1790070846809a1b4300b&language=en-US`
  );
  let data = await res.json();

  const similarRes = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.movie_id}/similar?api_key=84bd2ca964c1790070846809a1b4300b&language=en-US&page=1`
  );
  let similar = await similarRes?.json();
  similar = similar?.results.map((el: any) => {
    return {
      id: el?.id,
      heading: el.title,
      about: el?.overview,
      image: el.poster_path,
      rating: el.vote_average,
      rate_count: el.vote_count,
    };
  });
  const details: MoviedetailsInterface = {
    title: data.original_title,
    image: data.poster_path,
    rating: data.vote_average,
    rateCount: data.vote_count,
    about: data.overview,
    homepage: data.homepage,
  };
  return {
    props: {
      details,
      similar: similar || {},
    },
    revalidate: 43200,
  };
};
