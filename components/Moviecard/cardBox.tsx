import React from "react";
import { Box } from "@mui/material";
import MovieCard from "./movieCard";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
interface Data {
  id: number;
  heading: string;
  about: string;
  image: string;
  rating: number;
  rate_count: number;
}
interface Props {
  size: "xs" | "sm" | "md" | "lg";
  data: Array<Array<Data>>;
}
function cardBox(props: Props) {
  const { size, data } = props;
  console.log(size);

  console.log(data);

  const displayXS = {
    display: { xs: "block", sm: "none" },
  };
  const displaySM = {
    display: { xs: "none", sm: "block", md: "none" },
  };
  const displayMD = {
    display: { xs: "none", sm: "none", md: "block", lg: "none" },
  };
  const displayLG = {
    display: { xs: "none", lg: "block" },
  };
  let displayCurr: any;
  if (size === "xs") {
    displayCurr = displayXS;
  } else if (size === "sm") {
    displayCurr = displaySM;
  } else if (size === "md") {
    displayCurr = displayMD;
  } else {
    displayCurr = displayLG;
  }
  return (
    <Carousel
      sx={{
        ...displayCurr,
        width: "90vw",
        height: "350px",
      }}
      animation="slide"
      indicators={false}
    >
      {data.map((el) => (
        <Grid container spacing={2}>
          {el.map((element: Data) => (
            <Grid item key={element.id} sm={6} xs={12} md={4} lg={3}>
              <MovieCard data={element} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
}

export default cardBox;
