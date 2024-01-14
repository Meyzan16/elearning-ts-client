"use client";
import Link from "next/link";
import React, { FC, useContext, useState } from "react";
import NavItems from "../../components/UI/NavItems/NavItems";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import ModalLogin from "../../components/Modal/CustomModalLogin";
import Login from  "../../components/Auth/Login";

import { GlobalContext } from "@/context";

type Props = {
  activeItem: number;
};

const Header: FC<Props> = ({ activeItem }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const {
    componentAuth,
    setComponentAuth,
  } = useContext(GlobalContext)!;

  if (typeof window != "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpenSidebar(false);
      }
    }
  };

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? " bg-white fixed top-0  left-0 w-full h-[90px] z-[80] border-b shadow-lg transition translate-y duration-300"
            : "w-full border-b h-[90px] z-[80]"
        }`}
      >
        <div className="w-[95%] 800px:w-[95%] m-auto py-2 h-full ">
          <div className="w-full h-[80px] flex items-center justify-between p-3 ">
            <div className="flex gap-2">
              <Link
                href={"/"}
                className={`text-[25px] font-Poppins font-[600]  leading-10 text-primary`}
              >
                RunLearning
              </Link>
            </div>

            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />

              <div className="xl:hidden rounded-full py-2 px-4 bg-primary">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer text-white "
                  onClick={() => setOpenSidebar(true)}
                />
              </div>

              {/* <HiOutlineUserCircle
                  size={25}
                  className="hidden 800px:block cursor-pointer dark:text-white text-black"
                  onClick={() =>  setOpen(true)}
                /> */}
            </div>

            <div className="hidden xl:flex  items-center gap-4">
              <Link href="/register" className="cursor-pointer text-white rounded-full py-2 px-6 text-center bg-slate-500  hover:bg-primary hover:transition duration-200 ease-in font-Poppins font-[600]">
                Sign Up
              </Link>
              <div onClick={() =>  setComponentAuth({showModal:true , route:"Login"})} className="cursor-pointer text-white rounded-full py-2 px-6 text-center bg-slate-500  hover:bg-primary hover:transition duration-200 ease-in font-Poppins  font-[600]">
                Sign In
              </div>
            </div>

            
          </div>
        </div>

        {/* mobile sidebar */}
        {openSidebar && (
          <>
            <div
              className="xl:hidden fixed w-full h-screen top-0 left-0 z-[99999] bg-[#00000024]"
              onClick={handleClose}
              id="screen"
            >
              <div className="w-[70%] fixed z-[999999999] h-screen bg-white  top-0 right-0">
                <NavItems activeItem={activeItem} isMobile={true} />
                <HiOutlineUserCircle
                  size={25}
                  className="cursor-pointer ml-5 my-2 text-black mb-4"
                  // onClick={() => setShowModal(true)}
                />
              </div>
            </div>
          </>
        )}

      </div>
      
       {
          componentAuth.route === "Login" && (
            <>
            {
              componentAuth.showModal && (
                <ModalLogin 
                open={componentAuth.showModal}
                setOpen={componentAuth.showModal}
                setRoute={componentAuth.route}
                activeItem={activeItem}
                component={Login}
                />
                )
              }
              </>  
          )
      } 

    </div>
  );
};

export default Header;
