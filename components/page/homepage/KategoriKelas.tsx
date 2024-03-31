'use client'

import React from "react";
import Image from "next/image";
import KategoriKelasData from "@/data/KategoriKelas";


const MenuKelas = () => {
  return (
    <section className=" mt-6 md:mb-20 md:flex md:px-12 lg:px-8">
      <div className="container">
        <div className="block">
     
          <div className="hidden lg:block">
            <div className="text-primary font-Poppins text-lg font-semibold">
              Start learning today
            </div>
            <div className="text-3xl text-slate-700 font-Poppins pt-2 font-bold leading-relaxed ">
              Kelas Online Design,
              <span className="block mt-[2px]">
                Development, dan Freelancer
              </span>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="text-primary font-Poppins font-[10px]">
              Explore More Skills
            </div>
            <div className="text-2xl text-slate-700 font-Poppins font-bold leading-relaxed ">
              Ketegori Pilihan{" "}
            </div>
          </div>
          
        </div>

        <div className="flex w-full ">
          <div className="w-full mt-4 md:mt-8">
            <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 xl:grid-cols-4 mx-auto  ">
              {KategoriKelasData &&
                KategoriKelasData.map((item, index) => (
                  <div key={index}>
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay={`${index * 100}`}
                      className="p-2 bg-white items-center justify-center overflow-hidden shadow-lg shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4 h-full"
                    >
                      <figure className="flex items-center justify-start pt-4 pl-4 ">
                        <Image
                         src={`/assets/${item.image}`}
                          alt=""
                          className="w-14"
                          width={100}
                          height={100}
                        />
                      </figure>

                      <h5 className="pl-4 pt-4 lg:pt-12 inline-block text-left font-bold font-Poppins fontTitle text-stone-700 ">
                        {item.title}
                        <p className="fontSubTitle text-slate-500 font-light">
                          {item.subtitle}
                        </p>
                      </h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuKelas;
