import { GlobalContext } from "@/context";
import Image from "next/image";
import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import avatar from "@/public/assets/avatar.svg";
import NavItems from "../../UI/NavItems/NavItems";

interface Props {}

export const MenuUserMobile = (props: Props) => {
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext)!;
  const { user } = useSelector((state: any) => state.auth);

  return (
    <main className="p-2">
      <div
        onClick={() => setOpenSidebar({ show: false, title: "" })}
        className="flex justify-end text-4xl text-black mt-4 "
      >
        <IoClose className="cursor-pointer" />
      </div>

      <div className="mt-6">
        <div className="flex items-center  gap-4">
          <div>
            <Image
              src={user.avatar ? user.avatar : avatar}
              alt="ImageCaption"
              className="w-[70px] h-[70px] rounded-full cursor-pointer"
            />
          </div>
          <div className="items-center font-Poppins gap-4">
            <div className="text-lg text-slate-800 font-semibold">
              Meyzan Al Yutra
            </div>
            <div className="text-slate-400 text-md">Full-Stack developer</div>
          </div>
        </div>

        <div className="mt-6">
         <NavItems isMobile={true} />
        </div>

        <button
          className="btnSubmitMobile mt-6"
        >
          Check Promo Tersedia
        </button>

      </div>


    </main>
  );
};
