import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full py-16 md:px-10 lg:px-0  flex-col items-center justify-between  ">

      <div className="lg:flex lg:justify-center lg:items-center lg:max-w-[1400px] md:max-w-4xl px-4 justify-center mx-auto  xl:gap-4">

        <div className="xl:mr-auto xl:place-self-center lg:col-span-5 lg:text-left  ">
          <h1
            className="font-Poppins text-primary max-w-2xl mb-6 font-extrabold
          leading-relaxed text-3xl md:text-5xl lg:text-3xl xl:text-5xl items-center "
          >
            Your Dream Career
            <span
              className="block lg:mt-3 xl:mt-6"
            >
              Starts With Us
            </span>
          </h1>
          
          <p className="max-w-2xl mb-6 text-gray-500 lg:mb-8 text-sm font-[600] l xl:text-xl leading-relaxed font-Poppins">
            BuildRunLearning menyediakan kelas UI/UX design, Web Development,
            dan Freelancer untuk pemula.
          </p>

          <div className="flex gap-2 justify-start">
            <button 
              className="bg-primary px-6  xl:px-8 py-2 rounded-full  hover:shadow-xl "
              data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200"
            >
                <span className="font-Poppins font-semibold md:text-base lg:text-lg">
                Alur Belajar
                </span>
          
            </button>
            <button 
              className="bg-slate-200 px-6  xl:px-8 py-2 rounded-full font-Poppins font-semibold hover:shadow-xl "
              data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200"
            >
                <span className="text-black font-Poppins font-semibold md:text-base lg:text-lg">
                Alur Belajar
                </span>
          
            </button>
          </div>
          
        </div>

        <div  data-aos="zoom-in" data-aos-duration="1200" className="hidden lg:col-span-7 lg:flex justify-end">
          <Image
            src={require("../../../public/assets/bwaTest.webp")}
            alt="Header"
            className="object-contain xl:max-w-2xl md:max-w-xl h-[auto]"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
