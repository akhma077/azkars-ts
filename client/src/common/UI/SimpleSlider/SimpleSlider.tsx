import * as React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation, Pagination } from "swiper";

interface SimpleSliderProps {
  children: JSX.Element;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      speed={500}
      modules={[Navigation, EffectFade, Pagination]}
      loop
      effect="cube"
      pagination
    >
      <SwiperSlide>{children}</SwiperSlide>
    </Swiper>
  );
};

export default SimpleSlider;
