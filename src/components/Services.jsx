import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/mountain.jpg";
import img2 from "../assets/beautyofnature.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
        // showIndicators={false}
      >
        <div>
          <img src={img1} alt="item1" />
          <p className="fullstack">Mountains</p>
        </div>

        <div>
          <img src={img2} alt="item2" />
          <p className="fullstack">this is real beauty</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
