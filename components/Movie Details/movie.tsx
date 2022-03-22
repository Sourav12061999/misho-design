import React from "react";
import { Box } from "@mui/system";
import Poster from "./poster";
import Details from "./details";

interface MoviedetailsInterface {
  title: string;
  image: string;
  rating: number;
  rateCount: number;
  about: string;
  homepage: string;
}
interface videoInterface {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
interface Props {
  details: MoviedetailsInterface;
  videos: Array<videoInterface>;
}
function Movie(props: Props) {
  const { details, videos } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <Poster image={details?.image} />
      <Details videos={videos} details={details} />
    </Box>
  );
}

export default Movie;
