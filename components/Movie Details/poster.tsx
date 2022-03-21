import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

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
  videos: Array<videoInterface>;
  image: string;
}
function Poster(props: Props) {
  const { videos, image } = props;
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
