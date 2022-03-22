import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

interface Props {
  image: string;
}
function Poster(props: Props) {
  const { image } = props;
  return (
    <Box sx={{ width: "50%", height: "500px" }}>
      <Card>
        <CardMedia
          component="img"
          alt="Poster"
          height="500px"
          image={`https://image.tmdb.org/t/p/w500/${image}`}
        />
      </Card>
    </Box>
  );
}

export default Poster;
