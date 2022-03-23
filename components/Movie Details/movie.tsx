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
interface Props {
  details: MoviedetailsInterface;
}
function Movie(props: Props) {
  const { details } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <Poster image={details?.image} />
      <Details details={details} />
    </Box>
  );
}

export default Movie;
