"use client";
import ModalAuth from "@/components/container/Modal/ModalAuth";
import ModalSidebar from "@/components/container/Modal/ModalSidebar";
import Login from "@/components/pages/auth/Login/Login";
import NavItems from "@/components/UI/NavItems/NavItems";
import {MenuMobile, MenuUserMobile}  from "@/components/container/Sidebar/MenuMobile";
import { GlobalContext } from "@/context";
import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useSelector } from "react-redux";
import avatar from "@/public/assets/avatar.svg";
import AfterLoginDekstop from "@/components/container/Sidebar/AfterLoginDekstop";

const Header: React.FC = () => {
  const {
    openSidebar,
    setOpenSidebar,
    componentAuth,
    setComponentAuth,
    setOpenAlert,
  } = useContext(GlobalContext)!;
  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();

  const [isHovered, setIsHovered] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 10 });

  const handleMouseEnter = (event: any) => {
    setIsHovered(true);
    const rect = event.target.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (!user && data) {
      socialAuth({
        email: data?.user?.email,
        name: data?.user?.name,
        avatar: data?.user?.image,
      });
    }
  }, [user, data, socialAuth]);

  useEffect(() => {
    if (isSuccess) {
      setOpenAlert({
        status: true,
        message: "Login successfully",
        severity: "success",
      });
    }
  }, [isSuccess, setOpenAlert]);

  const headerRef = useRef<HTMLHeadingElement>(null);
  const stickyHeaderFunc = () => {
    if (headerRef.current) {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeaderFunc);
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="w-full h-[80px] leading-[80px] flex items-center relative md:px-10 lg:px-8"
      >
        <div className="container font-Poppins flex items-center justify-between">
          {/* logo for dekstop right */}
          <div className="hidden md:flex">
            <div className="flex items-center gap-2">
              <span className="w-[45px] h-[45px]  bg-gradient-to-r from-primary to-gray-400 text-white text-lg font-[500] rounded-full flex items-center justify-center">
                M
              </span>
              <div className="lg:flex gap-2">
                <Link
                  href={"/"}
                  className={`text-[25px] font-Poppins font-[600]  leading-10 text-primary`}
                >
                  RunLearning
                </Link>
              </div>
            </div>
          </div>
          {/* logoo end */}

          {/* logo for mobile right */}
          <div className="md:hidden flex justify-between items-center flex-wrap w-full ">
            <div className="flex gap-2">
              <div className="rounded-full py-2 px-4 bg-primary ">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer text-white "
                  onClick={() =>
                    setOpenSidebar({ title: "menuMobile", show: true })
                  }
                />
              </div>

              <div className="rounded-full py-2 px-4 bg-primary flex items-center">
                <FaSearch size={20} className="cursor-pointer text-white " />
              </div>
            </div>
          </div>
          {/* logoo end */}

          {/* menu dekstop center */}
          <NavItems isMobile={false} />
          {/* menu end */}

          {/* for dekstop right */}
          <div className="hidden xl:flex items-center gap-4">
            <div className="rounded-full py-2 px-4 bg-primary flex items-center">
              <FaSearch size={20} className="cursor-pointer text-white " />
            </div>
            {user && user ? (
              <>
                <div className="hidden xl:flex items-center justify-center gap-4">
                  <span className="font-Poppins text-lg text-slate-800 font-semibold">
                    Halo , {user.name.split(" ")[0]}
                  </span>
                </div>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={user.avatar ? user.avatar : avatar}
                    alt="ImageCaption"
                    className="w-[40px] h-[40px] rounded-full cursor-pointer"
                  />
                  {isHovered && (
                    <AfterLoginDekstop modalPosition={modalPosition} />
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  className="flex items-center justify-center gap-2 text-stone-700 font-[600] border border-solid
                    border-smallTextColor py-2 px-4 rounded-full max-h-[40px] hover:bg-primary hover:border-primary hover:text-white hover:font-[500] ease-in duration-200"
                >
                  Sign Up
                </Link>
                <button
                  onClick={() =>
                    setComponentAuth({ showModal: true, route: "Login" })
                  }
                  className="flex items-center justify-center gap-2 text-stone-700 font-[600] border border-solid
                              border-smallTextColor py-2 px-4 rounded-full max-h-[40px] hover:bg-primary hover:border-primary hover:text-white hover:font-[500] ease-in duration-200"
                >
                  Sign In
                </button>
              </>
            )}
          </div>

          {/* for mobile right */}
          {user && user ? (
            <div
              className="md:hidden"
              onClick={() =>
                setOpenSidebar({ title: "menuUserMobile", show: true })
              }
            >
              <Image
                src={user.avatar ? user.avatar : avatar}
                alt="ImageCaption"
                className="w-[40px] h-[40px] rounded-full cursor-pointer"
              />
            </div>
          ) : (
            <div className="md:hidden">
              <button
                onClick={() =>
                  setComponentAuth({ showModal: true, route: "Login" })
                }
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-full max-h-[40px] w-28 bg-primary text-white ease-in duration-200 font-semibold"
              >
                Sign In
              </button>
            </div>
          )}

          {/* for Md-lg */}
          <div className="hidden md:flex lg:hidden">
            <div className="rounded-full py-2 px-4 bg-primary ">
              <HiOutlineMenuAlt3
                size={25}
                className="cursor-pointer text-white "
                onClick={() =>
                  setOpenSidebar({ title: "menuMobile", show: true })
                }
              />
            </div>
          </div>
        </div>
      </div>

      {openSidebar.title === "menuMobile" && openSidebar.show == true && (
        <ModalSidebar component={MenuMobile} />
      )}

      {openSidebar.title === "menuUserMobile" && openSidebar.show == true && (
        <ModalSidebar component={MenuUserMobile} />
      )}

      {componentAuth.route === "Login" && componentAuth.showModal && (
        <ModalAuth component={Login} />
      )}
    </>
  );
};

export default Header;
