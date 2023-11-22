import React from "react";
import Image from "next/image";
type Props = {};

const MenuKelas = (props: Props) => {
  return (
    <div className="pb-16 hidden sm:flex ">
      <div className="container">
        <div className="block">
          <div className="text-primary font-Poppins text-lg font-semibold">
            Start learning today
          </div>
          <div className="text-4xl text-primary font-Poppins pt-2 font-bold leading-relaxed ">
            Kelas Online Design,
            <span className="block mt-[2px]">Development, dan Freelancer</span>
          </div>
        </div>

        <div className="flex w-full ">
          <div className="w-full mt-8">
            <div className="w-full grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4 mx-auto  ">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="p-2 bg-white   items-center justify-center 
                                    overflow-hidden shadow-lg 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4"
              >
                <figure className="flex items-center justify-start pt-4 pl-4 ">
                  <Image
                    src={require("../../../public/assets/kelas_koding.svg")}
                    alt=""
                    className="w-14"
                  />
                </figure>

                <h5
                  className="pl-4 pt-12 inline-block text-left  
                                    font-bold font-Poppins  text-medium text-lg  sm:text-xl text-stone-700 "
                >
                  Kelas Koding
                  <p className="text-base text-slate-500 font-semibold">Bikin website & aplikasi</p>
                </h5>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="p-2 bg-white   items-center justify-center 
                                    overflow-hidden shadow-lg 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4"
              >
                <figure className="flex items-center justify-start pt-4 pl-4 ">
                  <Image
                    src={require("../../../public/assets/kelas_koding.svg")}
                    alt=""
                    className="w-14"
                  />
                </figure>

                <h5
                  className="pl-4 pt-12 inline-block text-left  
                                    font-bold font-Poppins  text-medium text-lg  sm:text-xl text-stone-700 "
                >
                  Kelas Koding
                  <p className="text-base text-slate-500 font-semibold">Bikin website & aplikasi</p>
                </h5>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="p-2 bg-white   items-center justify-center 
                                    overflow-hidden shadow-lg 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4"
              >
                <figure className="flex items-center justify-start pt-4 pl-4 ">
                  <Image
                    src={require("../../../public/assets/kelas_koding.svg")}
                    alt=""
                    className="w-14"
                  />
                </figure>

                <h5
                  className="pl-4 pt-12 inline-block text-left  
                                    font-bold font-Poppins  text-medium text-lg  sm:text-xl text-stone-700 "
                >
                  Kelas Koding
                  <p className="text-base text-slate-500 font-semibold">Bikin website & aplikasi</p>
                </h5>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="p-2 bg-white   items-center justify-center 
                                    overflow-hidden shadow-lg 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4"
              >
                <figure className="flex items-center justify-start pt-4 pl-4 ">
                  <Image
                    src={require("../../../public/assets/kelas_koding.svg")}
                    alt=""
                    className="w-14"
                  />
                </figure>

                <h5
                  className="pl-4 pt-12 inline-block text-left  
                                    font-bold font-Poppins  text-medium text-lg  sm:text-xl text-stone-700 "
                >
                  Kelas Koding
                  <p className="text-base text-slate-500 font-semibold">Bikin website & aplikasi</p>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuKelas;
