import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import Data from "@/app/Data/Data";



const Kelas = () => {
  

  return (
    <div className="mb-20 hidden sm:flex ">
      <div className="w-full">
        <div className="block text-center">
          <div className="text-primary font-Poppins text-lg font-semibold">
            Start learning today
          </div>
          <div className="text-3xl text-slate-800 font-Poppins pt-2 font-bold leading-relaxed ">
            Kelas Online BuildRunLearning.
            <span className="block mt-[2px]">Materi Paling Update.</span>
          </div>
        </div>

        <div className="mt-12 ">
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-5 ">
            {
              Data && Data.map((i,index) => (
                <div key={index}>
                  <div
                    className="banner-item  px-10 py-4 gap-8 bg-white flex items-center justify-center 
                                              overflow-hidden shadow-lg 
                                              shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4"
                  >
                    <figure className="flex items-center justify-center">
                      <Image
                        src={require(`../../../public/assets/${i.image}`)}
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
                </div>

              ))
            }
            
           

          </div>
        </div>

       <div className="mt-4 ">
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-5 ">
            {
              Data && Data.map((i,index) => (
                <div key={index}>
                  <div
                    className="banner-item  px-10 py-4 gap-8 bg-white flex items-center justify-center 
                                              overflow-hidden shadow-lg 
                                              shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4"
                  >
                    <figure className="flex items-center justify-center">
                      <Image
                        src={require(`../../../public/assets/${i.image}`)}
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
                </div>

              ))
            }
            
           

          </div>
        </div> 


      </div>
    </div>
  );
};

export default Kelas;
