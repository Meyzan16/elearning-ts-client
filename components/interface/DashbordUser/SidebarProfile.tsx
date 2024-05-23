import Image from "next/image";
import React, { FC } from "react";
import avatarDefault from "@/public/assets/avatar.svg";
import Link from "next/link";
import SidebarLinks from "@/data/SidebarUser";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { HiOutlineHome } from "react-icons/hi2";

interface Props {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logOutHandler: any;
}

const SidebarProfile: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logOutHandler,
}) => {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <div
        className={`w-full gap-4 flex justify-center rounded-t-3xl items-center bg-opacity-70 py-4 cursor-pointer ${active === 1 ? "bg-primary" : "bg-transparent"
          }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={user.avatar || avatar ? user.avatar || avatar : avatarDefault}
          alt=""
          width={50}
          height={50}
        />
        <div>
          <h5 className="font-Poppins text-white text-lg font-semibold">
            Meyzan Al Yutra
          </h5>
          <h5 className="font-Poppins text-slate-50 text-sm font-medium ">
            Fullstack Developer
          </h5>
        </div>
      </div>

      <div className="px-6 py-10 flex justify-center">
        <div className="flex flex-1 flex-col">
          {SidebarLinks.map((item, index) => {
            const isActive = pathname === item.route || pathname?.startsWith(`${item.route}/`);
            return (
              <div key={index}>

                <Link
                  href={item.route}
                  key={item.label}
                  className={`flex gap-4 items-center px-2  rounded-xl justify-start font-semibold ${isActive ? "bg-primary py-4" : "py-4"}`}
                >
                  <Image
                    src={item.imgUrl}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                  <p className={`text-lg text-slate-400 ${!isActive && 'hover:text-black'}   font-semibold ${isActive && "text-white"} `}>
                    {item.label}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
