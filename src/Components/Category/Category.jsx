import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Slide1 from "../../../public/home/slide1.jpg";
import Slide2 from "../../../public/home/slide2.jpg";
import Slide3 from "../../../public/home/slide3.jpg";
import Slide4 from "../../../public/home/slide4.jpg";
import Slide5 from "../../../public/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeader={"ORDER ONLINE"}
        paraHeader={"From 11:00am to 10:00pm"}
      />
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="my-12">
            <img className="w-full" src={Slide1} alt="" />
            <h2 className="lg:text-3xl text-base text-center text-white -mt-12 uppercase">
              Salads
            </h2>
          </SwiperSlide>
          <SwiperSlide className="my-12">
            <img className="w-full" src={Slide2} alt="" />
            <h2 className="lg:text-3xl text-base text-center text-white -mt-12 uppercase">
              Soups
            </h2>
          </SwiperSlide>
          <SwiperSlide className="my-12">
            <img className="w-full" src={Slide3} alt="" />
            <h2 className="lg:text-3xl text-base text-center text-white -mt-12 uppercase">
              pizzas
            </h2>
          </SwiperSlide>
          <SwiperSlide className="my-12">
            <img className="w-full" src={Slide4} alt="" />
            <h2 className="lg:text-3xl text-base text-center text-white -mt-12 uppercase">
              desserts
            </h2>
          </SwiperSlide>
          <SwiperSlide className="my-12">
            <img className="w-full" src={Slide5} alt="" />
            <h2 className="lg:text-3xl text-base text-center text-white -mt-12 uppercase">
              Pasta
            </h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
