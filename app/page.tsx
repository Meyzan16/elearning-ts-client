"use client";
import React, { FC, useContext, useEffect, useState } from "react";
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

interface Props {}

const Page: FC<Props> = (props) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
        <div>
          <Heading
            title="E-Learning"
            description="ELearning is a platform for students to learn and get help from teachers"
            keywords="Programming, Mern , Redux , Machine Learning"
          />
          {/* <BannerPromo /> */}
          <Header activeItem={activeItem}  />
          <Hero />
          <Corporate />
          <KategoriKelas />
          <Benefit />
          <Kelas />
          <CatalogRilis />
          {/* <Reviews /> */}

         
        </div>
    </>
  );
};

export default Page;
