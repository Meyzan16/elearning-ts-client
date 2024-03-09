import Image from "next/image";
import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import avatar from "../../public/assets/avatar.svg";
import { GlobalContext } from "@/context";
import { useSelector } from "react-redux";
import Link from "next/link";

interface Props {}

export const QAS = (props: Props) => {
  return (
    <div className="container">
      <div className="rounded-xl bg-white shadow-lg shadow-slate-300 mb-6">

        <div className="mt-6 px-2 py-3">
          <div className="flex items-center  justify-between ">
            <div className="flex items-center gap-4">
              <div>
                <Image
              src={require("../../public/assets/ic_konsultasi.svg")}
                  alt="ImageCaption"
                  className="w-[50px] h-[50px] rounded-full cursor-pointer"
                />
              </div>
              <div className="items-center font-Poppins">
                <div className="text-[16px] text-slate-800 font-semibold">
                  Need Advice ?
                </div>
                <div className="text-slate-400 text-[12px] font-semibold">
                  Konsultasi dulu yuk
                </div>
              </div>
            </div>

            <button>
              <div className="rounded-full bg-slate-300 px-6 py-2 justify-end">
                <span className="font-Poppins text-md text-black">
                  Chat
                </span>
              </div>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};
