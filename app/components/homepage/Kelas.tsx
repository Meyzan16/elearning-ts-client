"use client";
import Image from "next/image";
import Data from "@/app/Data/Data";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const Kelas = () => {
  const isLG = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const isXL = useMediaQuery({ minWidth: 1280 });

  // Set slidesPerView sesuai dengan lebar layar
  const slidesPerView = isLG ? 3 : isXL ? 5 : 1;

  return (
    <div className="mb-20 hidden lg:flex ">
      <div className=" w-full items-center justify-center ">
        <div className="flex flex-col  gap-8 w-full justify-center items-center">
          <div className="text-center">
            <div className="text-primary font-Poppins text-lg font-semibold">
              Mastering Freelancer Tools
            </div>
            <div className="text-3xl text-slate-700 font-Poppins pt-2 font-bold leading-relaxed ">
              Kelas Online BuildRunLearning.
              <span className="block mt-[2px]">Teknologi terbaru</span>
            </div>
          </div>

          <Swiper
            slidesPerView={slidesPerView}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            modules={[Autoplay]}
            className="w-full  "
          >
            {Data.slice(0, 6).map((i, index) => (
              <SwiperSlide key={index}>
                <div
                  className="py-4 bg-white flex justify-center items-center gap-4 overflow-hidden  hover:scale-105 transition-all duration-500 rounded-2xl"
                  style={{ marginRight: "20px" }} // Tambahkan properti style dengan marginRight
                >
                  <figure className="">
                    <Image
                      src={require(`../../../public/assets/skills/${i.image}`)}
                      alt={`${i.title}`}
                      className="w-16"
                    />
                  </figure>
                  <h5
                    className="items-center justify-center text-left 
                                  font-bold font-Poppins  text-medium text-lg  sm:text-xl text-stone-700 "
                  >
                    {i.title}
                    <p className="font-Poppins text-slate-400 text-sm font-[46] pt-1">
                      {i.subTitle}
                    </p>
                  </h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            slidesPerView={slidesPerView}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={4000}
            modules={[Autoplay]}
            className="w-full"
          >
            {Data.slice(6, 12).map((i, index) => (
              <SwiperSlide key={index}>
                <div
                  className="py-4 bg-white flex justify-center items-center gap-4 overflow-hidden  hover:scale-105 transition-all duration-500 rounded-2xl"
                  style={{ marginRight: "20px" }} // Tambahkan properti style dengan marginRight
                >
                  <figure className="">
                    <Image
                      src={require(`../../../public/assets/skills/${i.image}`)}
                      alt={`${i.title}`}
                      className="w-16"
                    />
                  </figure>
                  <h5
                    className="items-center justify-center text-left 
                                  font-bold font-Poppins  text-medium text-lg  sm:text-xl text-stone-700 "
                  >
                    {i.title}
                    <p className="font-Poppins text-slate-400 text-sm font-[46] pt-1">
                      {i.subTitle}
                    </p>
                  </h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Kelas;
