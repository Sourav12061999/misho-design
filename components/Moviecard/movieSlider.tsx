import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MovieCard from "./movieCard";
import { Typography } from "@mui/material";

interface Data {
  movieName: string;
  image: string;
  about: string;
  rating: number;
}
interface Props {
  heading: string;
  data: [Data];
}
export default function MovieSlider(props: Props) {
  const { heading, data } = props;
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          {heading}
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12} md={4} lg={3}>
            <MovieCard />
          </Grid>
          <Grid item sm={6} xs={12} md={4} lg={3}>
            <MovieCard />
          </Grid>
          <Grid item sm={6} xs={12} md={4} lg={3}>
            <MovieCard />
          </Grid>
          <Grid item sm={6} xs={12} md={4} lg={3}>
            <MovieCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
