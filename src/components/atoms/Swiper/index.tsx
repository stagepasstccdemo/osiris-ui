import { Swiper as SwiperReact } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { responsiveSwiperSettings } from "./responsiveSettings";

export const Swiper = ({ breakPoints, children }: any) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const coverflowEffect = {
    rotate: screenSize < 768 ? 2 : 0,
    stretch: 0,
    depth: 100,
    modifier: screenSize < 768 ? 2 : 0,
  };

  return (
    <SwiperReact
      effect="coverflow"
      grabCursor
      breakpoints={breakPoints || responsiveSwiperSettings}
      slidesPerView="auto"
      coverflowEffect={coverflowEffect}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      style={{
        zIndex: "auto",
      }}
    >
      {children}
    </SwiperReact>
  );
};
