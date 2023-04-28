import { Swiper as SwiperReact } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { responsiveSwiperSettings } from "./responsiveSettings";

export const Swiper = ({ children }) => {
  const getScreenSize = () => {
    return window.innerWidth;
  };

  return (
    <SwiperReact
      effect="coverflow"
      grabCursor
      breakpoints={responsiveSwiperSettings}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: getScreenSize() < 768 ? 2 : 0,
        stretch: 0,
        depth: 100,
        modifier: getScreenSize() < 768 ? 2 : 0,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
    >
      {children}
    </SwiperReact>
  );
};
