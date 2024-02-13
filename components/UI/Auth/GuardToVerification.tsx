'use client';

import Register from "./Register/Page";
import React, { FC, useContext, useState } from "react";
import Verification from "./Verification/Page";
import { GlobalContext } from "@/context";
import ModalVerification from "@/components/Modal/ModalVerification";

type Interface = {
  Title: string;
  subTitle: string;
  titleForm: string;
  type: string;
};

const GuardToVerification: FC<Interface> = ({
  Title,
  subTitle,
  titleForm,
  type,
}) => {
    const { componentAuth,setComponentAuth } = useContext(GlobalContext)!;

  return (
    <>
      <section className="flex gap-24 ">
        <div className="lg:block hidden w-1/4 overflow-hidden">
          <img
            src={"/assets/banner_register.png"}
            alt="Banner"
            className="w-full h-full "
          />
        </div>

        <div className="w-3/4 mx-auto  lg:mx-0 lg:justify-start p-4 ">
          <div className=" max-w-screen-md px-4 mb-6 overflow-y-auto">
            <div className="my-4">
              <div className="font-Poppins text-[38px] font-bold text-primary">
                {Title}
              </div>
              <div className="my-6 font-Poppins text-left text-xl text-slate-500">
                Lengkapi form di bawah dengan
                <span className="block">menggunakan data Anda yang valid</span>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl">
              <div className="p-6 sm:p-12">
                <div className="w-full">
                  <h1 className="title">{titleForm}</h1>
                  {type === "register" && <Register />}
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          componentAuth.route === "Verification" && (
            <>
            {
              componentAuth.showModal && (
                <ModalVerification 
                open={componentAuth.showModal}
                setOpen={componentAuth.showModal}
                setRoute={componentAuth.route}
                component={Verification}
                />
                )
              }
              </>  
          )
      } 
      </section>
    </>
  );
};

export default GuardToVerification;
