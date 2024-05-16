import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { ImCommand } from "react-icons/im";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("public/review.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <div>
      <div>
        <SectionTitle
          subHeader={"TESTIMONIALS"}
          paraHeader={"What Our Clients Say"}
        />
      </div>
      <div className="my-12">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonial.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex justify-center items-center flex-col text-center lg:px-[100px] space-y-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <ImCommand size={60} />
                <p className="mx-auto lg:w-[1090px]">{review.details}</p>
                <h2 className="text-[#CD9003] text-4xl font-semibold">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
