import * as React from "react";
import Box from "@mui/material/Box";
import MovieCard from "./movieCard";
import { Typography } from "@mui/material";
import useArraydevider from "../../Hooks/useArraydevider";
import CardBox from "./cardBox";
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
  const { smarr, mdarr, lgarr, xsarr } = useArraydevider(data || []);
  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" color={"white"} gutterBottom>
          {heading}
        </Typography>
        <CardBox data={lgarr} size="lg" />
        <CardBox data={mdarr} size="md" />
        <CardBox data={smarr} size="sm" />
        <CardBox data={xsarr} size="xs" />
      </Box>
    </Box>
  );
}
