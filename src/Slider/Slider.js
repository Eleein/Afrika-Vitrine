import React from "react";
import Slider from "react-slick";
import { Image } from "./Image/Image";
import handmade from "./Images/handmade.jpg";
import kunst from "./Images/kunst.jpg";
import schmuck from "./Images/schmuck.jpg";
import woodart from "./Images/woodart.jpg";

const imagesList = [
  { id: 1, src: handmade },
  { id: 2, src: kunst },
  { id: 3, src: schmuck },
  { id: 4, src: woodart },
];

export function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {imagesList.map((photo) => (
          <Image key={photo.id} src={photo.src} />
        ))}
      </Slider>
    </div>
  );
}
