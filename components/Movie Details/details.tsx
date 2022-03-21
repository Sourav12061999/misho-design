import React from "react";
import Box from "@mui/material/Box";
import { FaPlay } from "react-icons/fa";
import { Button } from "@mui/material";
function Details() {
  //
  return (
    <Box sx={{ width: "50%", border: "1px solid red", height: "500px" }}>
      <Box sx={{ width: "40%", margin: "auto", mt: "10px" }}>
        <Button variant="contained" startIcon={<FaPlay />}>
          Watch
        </Button>
      </Box>
    </Box>
  );
}

export default Details;
