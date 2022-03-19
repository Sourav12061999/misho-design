import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsContext } from "next";
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
      movie_id
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
  console.log(data);

  return {
    props: {},
    revalidate: 43200,
  };
};
