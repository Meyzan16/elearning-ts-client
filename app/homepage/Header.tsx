"use client";
import Link from "next/link";
import React, { FC, useContext, useEffect, useState } from "react";
import NavItems from "../../components/UI/NavItems/NavItems";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import Login from "@/components/UI/Auth/Login/Page";
import avatar from "../../public/assets/avatar.svg";

import { GlobalContext } from "@/context";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
import { FaSearch } from "react-icons/fa";
import ModalSidebar from "@/components/Modal/ModalSidebar";
import { SidebarMobile } from "@/components/sidebar/page";
import ModalAuth from "@/components//Modal/ModalAuth";


const Header = () => {
  const [active, setActive] = useState(false);

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

  useEffect(() => {
    if (!user) {
      if (data) {
        socialAuth({
          email: data?.user?.email,
          name: data?.user?.name,
          avatar: data?.user?.image,
        });
      }
    }
    if (isSuccess) {
      setOpenAlert({
        status: true,
        message: "Login successfully",
        severity: "success",
      });
    }
  }, [user, data]);

  if (typeof window != "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  return (
    <>
      <section className="w-full relative ">
        <div
          className={`${
            active
              ? " bg-white fixed top-0 left-0 w-full h-[90px] z-[80] border-b shadow-lg transition translate-y duration-300"
              : "w-full border-b h-[90px] z-[80]"
          }`}
        >
          <div className="container">
            <div className="w-full h-[80px]">
              <div className="flex items-center justify-between">
                <div className="hidden lg:flex gap-2">
                  <Link
                    href={"/"}
                    className={`text-[25px] font-Poppins font-[600]  leading-10 text-primary`}
                  >
                    RunLearning
                  </Link>
                </div>

                <NavItems isMobile={false} />

                <div className="lg:hidden flex justify-between items-center flex-wrap w-full">
                  <div className="flex gap-2">
                    <div className="rounded-full py-2 px-4 bg-primary ">
                      <HiOutlineMenuAlt3
                        size={25}
                        className="cursor-pointer text-white "
                        onClick={() =>
                          setOpenSidebar({ title: "mobile", show: true })
                        }
                      />
                    </div>

                    <div className="rounded-full py-2 px-4 bg-primary flex items-center">
                      <FaSearch
                        size={20}
                        className="cursor-pointer text-white "
                      />
                    </div>
                  </div>

                  {user ? (
                    <>
                      <div className="block">
                        <Image
                          src={user.avatar ? user.avatar : avatar}
                          alt="ImageCaption"
                          className="w-[40px] h-[40px] rounded-full cursor-pointer"
                          onClick={() =>
                            setOpenSidebar({ title: "mobile", show: true })
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <div
                      onClick={() =>
                        setComponentAuth({ showModal: true, route: "Login" })
                      }
                      className="cursor-pointer text-white rounded-full py-2 px-6 text-center bg-slate-500  hover:bg-primary hover:transition duration-200 ease-in font-Poppins  font-[600]"
                    >
                      Sign In
                    </div>
                  )}
                </div>
                {user ? (
                  <>
                    <div className="hidden xl:flex items-center justify-center gap-4">
                      <span className="font-Poppins text-lg text-slate-800 font-semibold">
                        Halo , {user.name.split(" ")[0]}
                      </span>
                      <Image
                        src={user.avatar ? user.avatar : avatar}
                        alt="ImageCaption"
                        className="w-[40px] h-[40px] rounded-full cursor-pointer"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden lg:flex  items-center gap-4">
                      <Link
                        href="/register"
                        className="cursor-pointer text-white rounded-full py-2 px-6 text-center bg-slate-500  hover:bg-primary hover:transition duration-200 ease-in font-Poppins font-[600]"
                      >
                        Sign Up
                      </Link>
                      <div
                        onClick={() =>
                          setComponentAuth({ showModal: true, route: "Login" })
                        }
                        className="cursor-pointer text-white rounded-full py-2 px-6 text-center bg-slate-500  hover:bg-primary hover:transition duration-200 ease-in font-Poppins  font-[600]"
                      >
                        Sign In
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {openSidebar.title === "mobile" && openSidebar.show == true && (
          <ModalSidebar
            component={SidebarMobile}
          />
        )}

        {componentAuth.route === "Login" && (
          <>
            {componentAuth.showModal && (
              <ModalAuth
                component={Login}
              />
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Header;
