import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsContext } from "next";
import styles from "../../styles/Home.module.css";
function Moviedetails() {
  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta
          name="description"
          content="This a  movie app made by Sourav Das"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </>
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
  const res2 = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.movie_id}/videos?api_key=84bd2ca964c1790070846809a1b4300b&language=en-US`
  );
  let data2 = await res2.json();
  let data2_filtered = data2.results.filter((el: any) => {
    return (
      el.site === "Youtube" && (el.type === "Teaser" || el.type === "Trailer")
    );
  });
  return {
    props: {
      details: {
        title: data.original_title,
        image: data.poster_path,
        rating: data.vote_average,
        rateCount: data.vote_count,
        about: data.overview,
        genere: data.genere,
        homepage: data.homepage,
      },
      videos: data2_filtered.length ? data2_filtered : data2.results[0],
    },
    revalidate: 43200,
  };
};
