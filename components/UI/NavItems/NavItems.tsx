import Link from "next/link";
import React, { FC } from "react";
import { NavItemsData, usersNavOptions } from "@/data/NavItems";

interface Props {
  isMobile: boolean;
}

const NavItems: FC<Props> = ({ isMobile }) => {
  return (
    <>
      <div className="hidden lg:flex">
        {NavItemsData &&
          NavItemsData.map((item, index) => (
            <Link href={`${item.url}`} key={index} passHref>
              <span
                className="text-black text-[18px] px-6 font-Poppins font-[600]"
              >
                {item.name}
              </span>
            </Link>
          ))}
      </div>

      {isMobile && (
        <div className="xl:hidden">
          
          {usersNavOptions &&
            usersNavOptions.map((item, index) => (
              <div key={index} className="mb-2">
                <Link href="/" passHref>
                  <span
                      className="text-slate-600 text-[14px] font-Poppins font-semibold cursor-pointer"
                  >
                    {item.name}
                  </span>
                </Link>
              </div>
            ))}
          
        </div>
      )}
    </>
  );
};

export default NavItems;
