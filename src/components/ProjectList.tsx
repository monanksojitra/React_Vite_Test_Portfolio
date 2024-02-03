import React, { useCallback, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import TitelBox from "./TitelBox";
import { ListofProject } from "@/data/ProjectData";

interface ProjectListProps {}

const ProjectList: React.FC<ProjectListProps> = () => {
  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = useCallback(() => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slideNext();
    }
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
        ref={(instance) => {
          if (instance) {
            sliderRef.current = instance;
          }
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          666: {
            slidesPerView: 2,
          },
          955: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper scroll-smooth"
      >
        {ListofProject.map((item, index: number) => (
          <SwiperSlide key={index}>
            <iframe
              className="no-scrollbar"
              src={item.linkedinEmbed}
              height="300"
              width={window.innerWidth > 450 ? "400" : "270"}
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectList;
