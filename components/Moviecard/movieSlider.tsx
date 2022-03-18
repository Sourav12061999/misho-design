import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import MovieCard from "./movieCard";
import { Typography } from "@mui/material";
interface Data {
  id: number;
  heading: string;
  about: string;
  image: string;
  rating: number;
  rate_count: number;
}
interface Props {
  heading: string;
  data: Array<Data>;
}
export default function MovieSlider(props: Props) {
  const { heading, data } = props;
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" color={"white"} gutterBottom>
          {heading}
        </Typography>
        {/* <Grid container spacing={2}>
          {data.map((element: Data) => (
            <Grid item key={element.id} sm={6} xs={12} md={4} lg={3}>
              <MovieCard data={element} />
            </Grid>
          ))}
        </Grid> */}
        <Carousel swipe animation="slide" indicators={false}>
          {data.map((element: Data) => (
            <React.Fragment key={element.id}>
              <MovieCard data={element} />
            </React.Fragment>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
