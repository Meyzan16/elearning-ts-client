"use client";

import Register from "./Register/Page";
import React, { FC, useContext, useState } from "react";
import Verification from "./Verification/Page";
import { GlobalContext } from "@/context";
import ModalAuth from "@/components/common/Modal/ModalAuth";
import Image from "next/image";
import bannerRegister from "@/public/assets/banner_register.png";

type Interface = {
  Title: string;
  subTitle: string;
  titleForm: string;
  type: string;
};

const GuardToVerification: FC<Interface> = ({ Title, titleForm, type }) => {
  const { componentAuth } = useContext(GlobalContext)!;

  return (
    <>
      <section>
        <div className="h-screen flex items-start">
          <div className=" relative w-1/4 h-full flex flex-col mr-12">
            <Image
              src={bannerRegister}
              alt="Banner"
              className="w-full h-full object-cover"
              width={500}
            />
          </div>

          <div className="lg:w-3/4 w-full">
            <div className="lg:max-w-screen-md mb-6 overflow-y-auto">
              <div className="my-4">
                <div className="font-Poppins text-[38px] font-bold text-primary">
                  {Title}
                </div>
                <div className="my-6 font-Poppins text-left text-xl text-slate-500">
                  Lengkapi form di bawah dengan
                  <span className="block">
                    menggunakan data Anda yang valid
                  </span>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-2xl">
                <div className="p-6 sm:p-12">
                  <div className="w-full">
                    <h1 className="title">{titleForm}</h1>
                    {type === "register" && (
                      <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
                        <Register />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {componentAuth.route === "Verification" && (
          <>
            {componentAuth.showModal && <ModalAuth component={Verification} />}
          </>
        )}
      </section>
    </>
  );
};

export default GuardToVerification;
