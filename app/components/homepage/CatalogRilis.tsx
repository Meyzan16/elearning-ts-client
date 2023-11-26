import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CatalogRilisData from "@/app/Data/CatalogRilis";
import StarRating from "../UI/Rating";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Promo from "../UI/Promo";

type Props = {
   image: string
    title: string
    promo?: number
    price: number
    iconInfo?: boolean
    rating: any
    countUser: number
};

const CatalogRilis = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className=" hidden mb-20  md:flex ">
      <div className="container">
        <div className="block">
          <div className="text-primary font-Poppins text-lg font-semibold">
            Become Freelancer
          </div>
          <div className="text-3xl text-slate-800 font-Poppins pt-2 font-bold leading-relaxed ">
            Kelas BuildRunLearning Unggulan
            <span className="block mt-[2px]">
              Belajar Development & Development
            </span>
          </div>
        </div>

        <div className="flex w-full ">
          <div className="w-full mt-8">
            <div className="w-full grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4 mx-auto  ">
              {CatalogRilisData &&
                CatalogRilisData.map((i: Props, index: number) => (
                  <div key={index}>
                    <div
                      className="rounded-2xl shadow-lg relative overflow-hidden mb-10 sm:mb-0
                        lg:max-w-3xl"
                    >
                      <img
                        src={i.image}
                        alt="ImageCaption"
                        className="w-full cursor-pointer"
                      />
                      <div className="px-6">
                        <div
                          className={`mt-2 cursor-pointer font-bold text-xl mb-2 text-slate-700 ${
                            isHovered !== index ? "line-clamp-2" : ""
                          }`}
                          onMouseEnter={() => setIsHovered(index)}
                          onMouseLeave={() => setIsHovered(null)}
                        >
                          {i.title}
                        </div>

                        {/* Promo, Price, and Icon Info section */}
                        <div className={`pt-2 font-Poppins ${i.promo ? 'text-slate-500': 'text-black'} text-base flex items-center`}>
                          {i.promo && (
                            <>
                              <Promo promo={i.promo} />
                            </>
                          )}
                          Rp.{" "}
                          {i.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          {i.iconInfo && (
                            <span className="ml-2 bg-primary py-1 px-3 text-white font-Poppins rounded-full">
                              i
                            </span>
                          )}
                        </div>

                        {/* rating section */}
                        <div
                          className={`mt-8 mb-4 flex items-center justify-between`}
                        >
                          <div className="flex justify-start items-center gap-2">
                            <StarRating rating={i.rating} />

                            <div className="flex items-center justify-center text-slate-600 font-[600] ">
                              (
                              <span className="font-Poppins text-sm mr-2 text-center flex items-center justify-center mt-1">
                                {i.countUser
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </span>
                              <span className="flex items-center">
                                <HiOutlineUserGroup className="text-primary text-lg" />
                                )
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogRilis;
