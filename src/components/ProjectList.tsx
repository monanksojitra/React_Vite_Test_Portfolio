import React, { useCallback, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TitelBox from "./TitelBox";
import { ListofProject } from "@/data/ProjectData";

interface ProjectListProps {}

const ProjectList: React.FC<ProjectListProps> = () => {
  // const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <div className="my-3 mt-10 " id="project">
      <TitelBox titel="Project's" css="my-3 text-lg md:text-3xl" />
      {/* <FaRegArrowAltCircleLeft
        size={30}
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-2 sm:left-6 translate-y-32 z-20 cursor-pointer"
      />
      <FaRegArrowAltCircleRight
        size={30}
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-2 sm:right-6 translate-y-32  z-20 cursor-pointer"
      /> */}
      <Swiper
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
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper scroll-smooth  overflow-x-scroll no-scrollbar "
      >
        {ListofProject.map((item, index: number) => (
          <SwiperSlide key={index}>
            <iframe
              className="no-scrollbar "
              src={item.linkedinEmbed}
              height="400"
              width={window.innerWidth > 450 ? "400" : "270"}
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectList;
