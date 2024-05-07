import Image from "next/image";
import React, { FC } from "react";
import avatarDefault from "@/public/assets/avatar.svg";
import Link from "next/link";
import SidebarLinks from "@/data/SidebarUser";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
        className={`w-full gap-4 flex justify-center rounded-t-3xl items-center bg-opacity-70 py-4 cursor-pointer ${
          active === 1 ? "bg-primary" : "bg-transparent"
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
          {SidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname?.startsWith(`${item.route}/`);
            return (
              <Link
                href={item.route}
                key={item.label}
                className="flex gap-4 items-center p-4 rounded-lg justify-start font-semibold"
              >
                <Image
                  src={item.imgUrl}
                  alt={item.label}
                  width={30}
                  height={30}
                  className={`${isActive ? 'text-primary' : 'text-dark'}`}
                />
                <p className={`text-xl font-semibold ${isActive ? "text-primary": "text-dark"} `}>
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
