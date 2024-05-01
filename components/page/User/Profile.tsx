import React, { FC, useState } from "react";
import SidebarProfile from "./Sidebar";

interface Props {
  user: any;
}

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [active, setActive] = useState(1);
  const logOutHandler = async () => {
    console.log("as");
  };

  if (typeof window != "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <div className="container">
      <div className="flex mx-auto">
        <div
          className={`w-[60px] 800px:w-[350px] h-[650px] bg-white bg-opacity-90 border-2 border-[#ffffff1d] rounded-3xl shadow-sm mt-[30px] mb-[30px]
                sticky ${scroll ? "top-[120px]" : "top-[30px] "} left-[30px]`}
        >
          <SidebarProfile
            user={user}
            avatar={avatar}
            active={active}
            setActive={setActive}
            logOutHandler={logOutHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
