import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MovieCard from "./movieCard";
export default function MovieSlider() {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
  );
}
