"use client";
import React, { FC, useContext, useEffect, useState } from "react";
import Heading from "../components/UI/Heading/Heading";
// import Header from "./homepage/Header";
import Hero from "../components/page/Homepage/Hero";
import Corporate from "../components/page/Homepage/Corporate";
import KategoriKelas from "../components/page/Homepage/KategoriKelas";
import Benefit from "../components/page/Homepage/Benefit";
import Kelas from "../components/page/Homepage/Kelas";
import CatalogRilis from "../components/page/Homepage/CatalogRilis";
import BannerPromo from "../components/page/Homepage/BannerPromo";
import Reviews from "../components/page/Homepage/Reviews";
import { useSpring, animated } from "@react-spring/web";
import { GlobalContext } from "@/context";
import { QAS } from "../components/page/Homepage/QAS";
import { useSelector } from "react-redux";
import CatalogRilisAfterLogin from "../components/page/Homepage/CatalogRilisAfterLogin";
import Header from "../components/page/Homepage/Header";
import AlertComponents from "@/components/common/Alert/AlertComponents";

interface Props {}

const Homepage: FC<Props> = (props) => {
  const {openAlert} = useContext(GlobalContext)!
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // const token = useSelector((state: any) => state.auth);
  const {user} = useSelector((state: any) => state.auth);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <>
        <Heading
          title="E-Learning"
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming, Mern , Redux , Machine Learning"
        />
        {/* <BannerPromo /> */}
        {/* <Header /> */}
        <Header />  
        
        {isMobile ? (
          <>
            <Hero />
            <KategoriKelas />
            <QAS />
          </>
        ) : (
          <> 
            {!user && <Hero />}
            {!user && <Corporate />}
            {!user && <KategoriKelas />}
            {!user && <Benefit />}
            {user && <CatalogRilisAfterLogin />}
            <Kelas />
            {!user && <CatalogRilis />}
          </>
        )} 
        {/* <Reviews /> */}


        {openAlert.status == true && (
          <AlertComponents />
      )}
    </>
  );
};

export default Homepage;
