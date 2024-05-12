"use client";

import MyDataCourses from "@/data/Courses";
import KategoriKelasData from "@/data/KategoriKelas";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  title: string;
  img: string;
  kategoriAccess: IKategoriAccess[];
}

interface IKategoriAccess {
  name: string;
  value: string;
}

const CoursesUI = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 10, left: 0 });

  const handleHover = (index: any, event: any) => {
    setHoveredIndex(index);
    const rect = event.target.getBoundingClientRect();
    setModalPosition({ top: rect.bottom, left: rect.left - 80 });
  };

  return (
    <div className="mt-6 ">
      <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 xl:grid-cols-4 mx-auto  ">
        {MyDataCourses &&
          MyDataCourses.map((i: Props, index: number) => (
            <div key={index}>
              <div
                className="rounded-2xl shadow-lg relative overflow-hidden mb-10 sm:mb-0
                          lg:max-w-3xl hover:scale-105 transition-all duration-500 p-6 h-full bg-white"
              >
                <img
                  src={i.img}
                  alt="ImageCaption"
                  className="w-full cursor-pointer rounded-2xl"
                />
                <div className="pt-4">
                  {/* title */}
                  <div
                    className={`mt-4 cursor-pointer font-bold lg:text-base xl:text-2xl font-Poppins 
                    mb-2 text-slate-700 ${
                      isHovered !== index ? "line-clamp-2" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    {i.title}
                  </div>
                </div>

                {i.kategoriAccess.map((kategori, kategoriIndex) => (
                  <div key={kategoriIndex}>
                    <p className="font-Poppins text-slate-400 text-lg">
                      Kelas {kategori.name}
                    </p>
                  </div>
                ))}
                
                <div className="mt-6">
                    <div className="flex items-center gap-4">
                        <Image 
                          src="/assets/ic_check.svg"
                          alt="ischeck"
                          width={30}
                          height={30}
                        />
                        <p className="font-Poppins font-semibold text-md md:text-lg text-dark">Akses Selamanya</p>
                    </div>
                </div>


              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CoursesUI;
