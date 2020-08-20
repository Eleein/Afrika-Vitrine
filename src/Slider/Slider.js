import React from "react";
import Slider from "react-slick";
import yellow from "./Images/2020-08-16 16_04_37-yellow woman.png";
import afrika from "./Images/2020-08-16 15_58_08-afrika-vitrine.png";
import another from "./Images/AnotherTest.png";
import shea from "./Images/14-best-shea-moisture-products.jpg";

export function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <h1>Here goes the Slides:</h1>
      <Slider {...settings}>
        <div>
          <img src={afrika} />
        </div>
        <div>
          <img src={yellow} />
        </div>
        <div>
          <img src={shea} />
        </div>
        <div>
          <img src={another} />
        </div>
      </Slider>
    </div>
  );
}
