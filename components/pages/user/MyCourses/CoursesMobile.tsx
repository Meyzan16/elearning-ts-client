"use client";

import MyDataCourses from "@/data/Courses";
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

const CoursesMobile = () => {
  return (
    <div className="mt-6">
      <div className="w-full mx-auto ">
        {MyDataCourses &&
          MyDataCourses.map((i: Props, index: number) => (
            <div key={index}>
              <div
                className="w-full rounded-2xl shadow-lg relative overflow-hidden mb-4
                          lg:max-w-3xl hover:scale-105 transition-all duration-500 p-4 h-full bg-white"
              >
                <div className="flex items-center mx-auto gap-4">
                  <div className="w-1/4 items-start">
                    <Image
                      src={i.img}
                      alt="ImageCaption"
                      className="w-full cursor-pointer rounded-2xl"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div
                    className="w-3/4 cursor-pointer font-bold text-xs  font-Poppins text-slate-700"
                  >
                    {i.title}

                    <div className="block pt-1">
                      <div className="w-full flex items-center gap-2">
                        <div className="w-5">
                          <Image
                            src="/assets/ic_check.svg"
                            alt="ischeck"
                            width={100}
                            height={100}
                          />
                        </div>
                        <p className="font-Poppins font-semibold text-xs text-dark">Akses Selamanya</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
      </div>
    </div>
  );
};

export default CoursesMobile;
