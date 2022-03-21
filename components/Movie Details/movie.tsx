import React from "react";
import { Box } from "@mui/system";
import Poster from "./poster";
import Details from "./details";
function Movie() {
  return (
    <Box sx={{ display: "flex" }}>
      <Poster />
      <Details />
    </Box>
  );
}

export default Movie;
