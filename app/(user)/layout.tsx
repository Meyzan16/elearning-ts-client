"use client";
import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "@/components/UI/Heading/Heading";
import Header from "@/components/page/Homepage/Header";
import Profile from "@/components/page/User/Profile";
import { useSelector } from "react-redux";
import SidebarProfile from "@/components/page/User/Sidebar";

interface Props {
  children: React.ReactNode;
}

const UserLayout: FC<Props> = ({ children }) => {
  const { user } = useSelector((state: any) => state.auth);
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [active, setActive] = useState(1);
  const logOutHandler = async () => {
    console.log("as");
  };

  if (typeof window != "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <main>
      <Protected>
        <Heading
          title="Profile"
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming, Mern , Redux , Machine Learning"
        />
        <Header />

        <div className="container">
          <div className=" w-full flex mx-auto mt-6 gap-10">
            <div
              className={`max-sm:hidden md:w-[500px] lg:w-[400px] left-0 top-0 flex h-[650px] w-fit flex-col justify-between
               bg-white bg-opacity-90 border-2 border-[#ffffff1d] rounded-3xl shadow-lg overflow-y-auto
                sticky ${scroll ? "top-[120px]" : "top-[30px] "} left-[30px]`}
            >
              <SidebarProfile
                user={user}
                avatar={avatar}
                active={active}
                setActive={setActive}
                logOutHandler={logOutHandler}
              />
            </div>
            
            <section className="w-full">
              <div>{children}</div>
            </section>

            
          </div>
        </div>
      </Protected>
    </main>
  );
};

export default UserLayout;
