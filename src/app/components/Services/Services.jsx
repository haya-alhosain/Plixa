"use client";
import "./Services.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import MainTitle from "@/app/components/mainTitle/MainTitle";
import { useEffect } from "react";

const servicesData = [
  {
    id: 1,
    title: "Domain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore ma...",
  },
  {
    id: 2,
    title: "Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore ma...",
  },
  {
    id: 3,
    title: "Domain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore ma...",
  },
  {
    id: 4,
    title: "Domain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore ma...",
  },
  {
    id: 5,
    title: "Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore ma...",
  },
  {
    id: 6,
    title: "Domain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore ma...",
  },
];
export default function Services() {
  function handleServiceActive(id, index) {
    const activeSlide = document.getElementById(index);
    const allSlides = document.querySelectorAll(".slide");
    allSlides.forEach((el) => el.classList.remove("swiper-slide-active"));
    activeSlide.classList.add("swiper-slide-active");
  }

  const AllServices = servicesData.map((el, index) => {
    return (
      <SwiperSlide
        key={el.id}
        id={`slide${index}`}
        onClick={() => handleServiceActive(el.id, `slide${index}`)}
        className="slide"
      >
        <div>
          <h3>{el.title}</h3>
          <p>{el.description}</p>
        </div>
        <button className="btn-primary">Coming soon</button>
      </SwiperSlide>
    );
  });
  return (
    <>
      <section id="services">
        <div className="container">
          <MainTitle
            title="What We Do"
            subtitle="We have a wide range of services that we are proud to show"
          />
          <div className="services-content">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  // spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  // spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  // spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  // spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper swiper"
            >
              {AllServices}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
