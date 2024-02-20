import Link from "next/link";
import React, { FC } from "react";
import NavItemsData from "@/data/NavItems";

interface Props {
  activeItem: number;
  isMobile: boolean;
}

const NavItems: FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden lg:flex">
        {NavItemsData &&
          NavItemsData.map((item, index) => (
            <Link href={`${item.url}`} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? " text-primary"
                    : " text-black"
                } text-[18px] px-6 font-Poppins font-[600] `}
              >
                {item.name}
              </span>
            </Link>
          ))}
      </div>

      {isMobile && (
        <div className="xl:hidden mt-5">
          <div className="w-full text-center py-6" >
            <Link
              href={"/"}
              className={`text-[25px] font-Poppins font-[500] text-black `}
            >
              E-Learning
            </Link>
          </div>
          {NavItemsData &&
            NavItemsData.map((item, index) => (
              <>
                <Link href="/" passHref>
                  <span
                    className={`${
                      activeItem === index
                        ? " text-primary"
                        : " text-black"
                    } block py-5 text-[18px] px-6 font-Poppins font-[600] `}
                  >
                    {item.name}
                  </span>
                </Link>
              </>
            ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
