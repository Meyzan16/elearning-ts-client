'use client';

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import bwaTest from '@/public/assets/bwaTest.webp';
type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <>
      <div className="w-full mt-4 md:mt-0 md:py-16 md:px-12 lg:px-8 flex-col items-center justify-between  ">
        <div className=" lg:flex lg:justify-center lg:items-center lg:max-w-[1600px] md:max-w-4xl px-4 justify-center mx-auto  xl:gap-4">
          
          <div className="xl:mr-auto xl:place-self-center lg:col-span-5 lg:text-left ">
            <h1
              className="font-Poppins  max-w-2xl mb-2 md:mb-6 font-extrabold
            leading-relaxed text-2xl md:text-5xl lg:text-3xl xl:text-5xl items-center "
            >
              <span className="text-primary">Your Dream Career</span>
              <span className="block text-slate-800 md:text-primary lg:mt-3 xl:mt-6">
                Starts With Us
              </span>
            </h1>

            <p
              className="max-w-2xl mb-6 text-gray-500 lg:mb-8 text-md 
            xl:text-xl leading-10 font-Poppins"
            >
              RunLearning menyediakan kelas UI/UX design, Web Development, dan
              Freelancer untuk pemula.
            </p>

            <div className="hidden md:flex gap-2 justify-start">
              <button
                className="bg-primary px-6  xl:px-8 py-2 rounded-full  hover:shadow-xl "
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <span className="font-Poppins font-semibold md:text-base lg:text-lg">
                  Alur Belajar
                </span>
              </button>
              <button
                className="bg-slate-200 px-6  xl:px-8 py-2 rounded-full font-Poppins font-semibold hover:shadow-xl "
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <span className="text-black font-Poppins font-semibold md:text-base lg:text-lg">
                  Alur Belajar
                </span>
              </button>
            </div>

            <div className="md:hidden ">
              <div className="rounded-full bg-primary  flex items-center py-2 px-6 ">
                <span className=" font-Poppins text-white font-[12px] flex justify-star w-3/4">
                  Mau belajar apa hari ini ?
                </span>
                
                <div className="w-1/4  flex justify-end">
                  <FaSearch />
                </div>

              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="1200"
            className="hidden lg:col-span-7 lg:flex justify-end"
          >
            <Image
              src={bwaTest}
              alt="Header"
              className="object-contain xl:max-w-2xl md:max-w-xl h-[auto]"
            />
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Hero;
