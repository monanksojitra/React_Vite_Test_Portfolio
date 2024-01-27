import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import TitelBox from "./TitelBox";
import { ListofProject } from "@/data/ProjectData";
import { FreeMode, Pagination } from "swiper/modules";
import Iframe from "react-iframe";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { useCallback, useRef } from "react";

const ProjectList = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="my-3 mt-10 " id="project">
      <TitelBox titel="Project's" css="my-3 text-lg md:text-3xl" />
      <FaRegArrowAltCircleLeft
        size={30}
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 translate-y-32 z-20"
      />
      <FaRegArrowAltCircleRight
        size={30}
        onClick={handleNext}
        className="absolute right-2 sm:right-6 translate-y-32  z-20"
      />
      <Swiper
        ref={sliderRef}
        breakpoints={{
          // when window width is >= 0px

          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          666: {
            slidesPerView: 2,
          },
          955: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          // when window width is >= 992px
        }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper scroll-smooth"
      >
        {ListofProject.map((item) => (
          <SwiperSlide>
            <iframe
              className="no-scrollbar"
              src={item.linkedinEmbed}
              height="300"
              width={window.innerWidth > 450 ?"400":"270"}
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectList;
