import { GlobalContext } from "@/context";
import Image from "next/image";
import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import avatar from "@/public/assets/avatar.svg";
import NavItems from "../../UI/NavItems/NavItems";

interface Props {}

export const MenuMobile = (props: Props) => {
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
            <div className="rounded-full w-full border-2 border-black py-2 px-4">
                <h3 className="text-slate-500 font-Poppins text-md">Mau belajar apa hari ini ?</h3>
            </div>
        </div>

       

        

      </div>


    </main>
  );
};
