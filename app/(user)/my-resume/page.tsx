import TitlePage from "@/components/page/User/TitlePage";
import KategoriKelasData from "@/data/KategoriKelas";
import Image from "next/image";
import React from "react";

const MyResume = () => {
  return (
    <div className="flex w-full flex-col text-red-700">

      <div className="space-y-4 border-b border-gray-200 pb-4 text-sm font-medium text-gray-900">
          <TitlePage title="My Resume" subTitle="Mari bagikan karya terbaik kamu dan dapat pekerjaan IT" />
      </div>
      

      <div className="mt-4">
        <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 xl:grid-cols-4 mx-auto  ">
          {KategoriKelasData &&
            KategoriKelasData.map((item, index) => (
              <div key={index}>
                <div
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
  );
};

export default MyResume;
