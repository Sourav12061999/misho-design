import React from "react";
import Carousel from "react-material-ui-carousel";
function Slider() {
  return (
    <Carousel
      sx={{
        width: "90vw",
        height: { xs: "100px", sm: "220px", md: "320px", lg: "350px" },
      }}
      animation="slide"
      indicators={true}
    >
      <img width={"100%"} src="slider1.png" alt="" />
      <img width={"100%"} src="slider2.png" alt="" />
      <img width={"100%"} src="slider3.png" alt="" />
    </Carousel>
  );
}

export default Slider;
