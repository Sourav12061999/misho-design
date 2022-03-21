import React from "react";
import { Box, Button } from "@mui/material";
import { FaPlay } from "react-icons/fa";
function Poster() {
  return (
    <Box>
      <Box></Box>
      <Box>
        <Button variant="contained" startIcon={<FaPlay />}>
          Watch
        </Button>
      </Box>
    </Box>
  );
}

export default Poster;
