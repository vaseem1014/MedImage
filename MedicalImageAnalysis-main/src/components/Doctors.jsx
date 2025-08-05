import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      img: "/src/assets/img/doc1.jpg",
      name: "Michael R.",
      review: "This AI-powered analysis helped detect my lung condition early, giving me peace of mind!",
    },
    {
      img: "/src/assets/img/doc2.jpg",
      name: "Dr. Sophia M.",
      review: "This tool provides quick and reliable results, assisting me in better diagnosis.",
    },
    {
      img: "/src/assets/img/doc3.jpg",
      name: "Dr. Arjun Patel",
      review: "Incorporating AI into medical imaging is a game-changer, and this platform leads the way!",
    },
    {
      img: "/src/assets/img/doc4.jpg",
      name: "Emma L.",
      review: "User-friendly interface and detailed analysis reports. A must-have for early disease detection!",
    },
    {
      img: "/src/assets/img/doc5.jpg",
      name: "Rajiv N.",
      review: "Highly impressed with the accuracy of this AI model. It’s truly innovative!",
    },
    {
      img: "/src/assets/img/doc6.jpg",
      name: "Sophia Wilson",
      review: "The AI model provided insights my doctor found useful. Excellent innovation!",
    }
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">What Our Users Say</h1>
          <p className="mt-2 text-center lg:text-start">Real experiences from patients, doctors, and researchers using our AI-powered medical analysis platform.</p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer flex flex-col justify-center items-center p-4"
              key={index}
            >
              <img src={testimonial.img} alt={testimonial.name} className="h-24 w-24 rounded-full mb-4" />
              <h1 className="font-semibold text-xl mt-5">{testimonial.name}</h1>
              <p className="pt-2 text-center mt-5">"{testimonial.review}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
