"use client";

import Register from "../../pages/auth/Register/Page";
import React, { FC } from "react";
import Image from "next/image";
import bannerRegister from "@/public/assets/banner_register.png";

interface Interface {
  Title: string;
  subTitle: string;
  titleForm: string;
  type: string;
};

const Auth: FC<Interface> = ({ Title, subTitle, titleForm, type }) => {
  return (
    <section>
      <div className="h-screen ">
        {/* <div className=" relative w-1/4 h-full flex flex-col mr-12">
          <Image
            src={bannerRegister}
            alt="Banner"
            className="w-full h-full object-cover"
            width={500}
          />
        </div> */}

        <div className="flex justify-center items-center  ">
          <div className="mb-6 xl:w-[40%] md:w-[70%]">
            <div className="my-4">
              <div className="font-Poppins text-[38px] font-bold text-primary text-center">
                {Title}
              </div>
              <div className="my-6 font-Poppins text-center text-xl text-slate-500">
                {subTitle}
                <span className="block">
                  menggunakan data Anda yang valid
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl">
              <div className="p-6 sm:p-12">
                <div className="w-full">
                  <h1 className="title">{titleForm}</h1>
                  {type === "register" && (
                    <div className="overflow-y-auto ">
                      <Register />
                    </div>
                  )}

                  {type === "background" && (
                    <div className="overflow-y-auto">
                      <div className="text-dark">
                        testing backgroud
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Auth;
