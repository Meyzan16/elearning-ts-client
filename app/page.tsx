"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/homepage/Header";
import Hero from "./components/homepage/Hero";
import Corporate from "./components/homepage/Corporate";
import KategoriKelas from "./components/homepage/KategoriKelas";
import Benefit from "./components/homepage/Benefit";
import Kelas from "./components/homepage/Kelas";
import CatalogRilis from "./components/homepage/CatalogRilis";
import BannerPromo from "./components/homepage/BannerPromo";
import Reviews from "./components/homepage/Reviews";
import { useSpring, animated } from "@react-spring/web";

interface Props {}

const BouncingBall = ({ show }: any) => {
  const [bounceCount, setBounceCount] = useState(0);

  const props = useSpring({
    to: async (next) => {
      while (bounceCount < 3) {
        await next({ y: 300, boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.3)" }); // Bayangan saat bola memantul
        await next({ y: 90, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }); // Hilangkan bayangan saat bola berada di atas
        setBounceCount((prevCount) => prevCount + 1);
      }
    },
    from: { y: 90 },
    reset: true,
  });

  return (
    <animated.div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "teal",
        transform: props.y.to((y) => `translate3d(0, ${y}px, 0)`),
      }}
    />
  );
};



const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const [showBall, setShowBall] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBall(true);
    }, 100); // Menampilkan setelah 1 detik

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHomePage(true);
    }, 3000); // Menampilkan halaman setelah 1 detik (1 detik bola + 3 detik penundaan tambahan)

    return () => clearTimeout(timeout);
  }, [showBall]);

  return (
    <>
      {!showHomePage ? (
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <BouncingBall show={showBall} />
        </div>
      ) : (
    
        <div>
          <Heading
            title="E-Learning"
            description="ELearning is a platform for students to learn and get help from teachers"
            keywords="Programming, Mern , Redux , Machine Learning"
          />
          <BannerPromo />
          <Header open={open} setOpen={setOpen} activeItem={activeItem} />
          <Hero />
          <Corporate />
          <KategoriKelas />
          <Benefit />
          <Kelas />
          <CatalogRilis />
          <Reviews />
        </div>
      )}
    </>
  );
};

export default Page;
