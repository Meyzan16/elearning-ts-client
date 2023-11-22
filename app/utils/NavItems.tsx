import Link from "next/link";
import React, { FC } from "react";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

interface Props {
  activeItem: number;
  isMobile: boolean;
}

const NavItems: FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden xl:flex">
        {navItemsData &&
          navItemsData.map((item, index) => (
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
          {navItemsData &&
            navItemsData.map((item, index) => (
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
