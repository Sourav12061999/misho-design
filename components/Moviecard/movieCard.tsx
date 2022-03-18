import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useLongstrConvt from "../../Hooks/useLongstrConvt";
interface Data {
  id: number;
  heading: string;
  about: string;
  image: string;
  rating: number;
  rate_count: number;
}
interface Props {
  data: Data;
}
export default function MovieCard(props: Props) {
  const { data } = props;
  const about = useLongstrConvt(data.about);
  return (
    <Card sx={{ maxWidth: 345, minHeight: "350px" }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w500/${data.image}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {about}
        </Typography>
      </CardContent>
    </Card>
  );
}
