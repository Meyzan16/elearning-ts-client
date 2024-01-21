import Image from "next/image";
import React from "react";

type Props = {};

const Benefit = (props: Props) => {
  return (
    <div className="mb-20">
      <div className=" md:px-12 xl:max-w-screen-1300px mx-auto w-full lg:px-12 text-lg gap-8">
        <div className="w-full px-4  xl:flex mx-auto">

          <div className=" w-full hidden xl:flex xl:justify-center lg:items-center xl:w-1/2 lg:mr-12  ">
            <Image
              src={require("../../public/assets/benefit.png")}
              alt=""
              className="object-contain xl:max-w-3xl  md:max-w-xl  w-full mx-auto h-[auto]"
            />
          </div>

          <div className="  w-full xl:mx-auto xl:items-center-center xl:w-1/2 ">
            <div className="text-primary font-Poppins text-lg font-semibold lg:text-center xl:text-left">
              Start learning today
            </div>
            <div className="xl:text-3xl lg:text-2xl text-2xl text-slate-700 font-Poppins pt-2 font-bold leading-10 lg:text-center xl:text-left ">
              Privileges Dari RunLearning
              <span className="xl:block mt-4 lg:ml-2 xl:ml-0 ">Karir Semakin Tumbuh</span>
            </div>

            <div className="pt-4">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src={require("../../public/assets/ic_check.svg")}
                  alt="ischeck"
                />
                <p className="font-Poppins leading-7 text-slate-600">
                  Akses BuildWithAngga selamanya
                </p>
              </div>

              <div className="flex justify-start items-center gap-2 mt-4">
                <Image
                  src={require("../../public/assets/ic_check.svg")}
                  alt="ischeck"
                />
                <p className="font-Poppins leading-7 text-slate-600">
                  Free materi update kelas
                </p>
              </div>
              <div className="flex justify-start items-center gap-2 mt-4">
                <Image
                  src={require("../../public/assets/ic_check.svg")}
                  alt="ischeck"
                />
                <p className="font-Poppins leading-7 text-slate-600">
                  Real-world projects Freelancer
                </p>
              </div>
              <div className="flex justify-start items-center gap-2 mt-4">
                <Image
                  src={require("../../public/assets/ic_check.svg")}
                  alt="ischeck"
                />
                <p className="font-Poppins leading-7 text-slate-600">
                  Forum UI/UX design & Web Development
                </p>
              </div>
              <div className="flex justify-start items-center gap-2 mt-4">
                <Image
                  src={require("../../public/assets/ic_check.svg")}
                  alt="ischeck"
                />
                <p className="font-Poppins leading-7 text-slate-600">
                  Privileges kelas online lainnya
                </p>
              </div>
                <button className="px-4 py-2 bg-primary rounded-full font-Poppins mt-4 font-semibold">
                  Join Now
                </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Benefit;
