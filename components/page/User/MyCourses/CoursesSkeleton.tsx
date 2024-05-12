import KategoriKelasData from "@/data/KategoriKelas";
import Image from "next/image";
import React from "react";

type Props = {};

const CourseSkeleton = (props: Props) => {
  return (
    <div className="mt-4 animate-pulse">
      <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 xl:grid-cols-4 mx-auto  ">
        {KategoriKelasData &&
          KategoriKelasData.map((item, index) => (
            <div key={index}>
              <div className="aspect-square p-2 lg:aspect-none w-full bg-gray-200 shadow-lg shadow-slate-300 rounded-2xl mb-4 h-full">
                <div className='w-full h-4 bg-gray-200' />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseSkeleton;
