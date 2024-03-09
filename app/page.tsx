"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "../components/UI/Heading/Heading";
import Header from "./homepage/Header";
import Hero from "./homepage/Hero";
import Corporate from "./homepage/Corporate";
import KategoriKelas from "./homepage/KategoriKelas";
import Benefit from "./homepage/Benefit";
import Kelas from "./homepage/Kelas";
import CatalogRilis from "./homepage/CatalogRilis";
import BannerPromo from "./homepage/BannerPromo";
import Reviews from "./homepage/Reviews";
import { useSpring, animated } from "@react-spring/web";
import { GlobalContext } from "@/context";
import { QAS } from "./homepage/QAS";
import { useSelector } from "react-redux";
import CatalogRilisAfterLogin from "./homepage/CatalogRilisAfterLogin";

interface Props {}

const Page: FC<Props> = (props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { user } = useSelector((state: any) => state.auth);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <div>
        <Heading
          title="E-Learning"
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming, Mern , Redux , Machine Learning"
        />
        {/* <BannerPromo /> */}
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
      </div>
    </>
  );
};

export default Page;
