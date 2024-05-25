import Heading from '@/components/UI/Heading/Heading';
import SidebarProfile from '@/components/UI/User/SidebarProfile';
import TitlePage from '@/components/UI/User/TitlePage';
import Header from '@/components/pages/home/Header';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

type Props = {
  children: React.ReactNode;
}

const TemplateUser = ({ children }: Props) => {
  const { user } = useSelector((state: any) => state.auth);
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
    <main>
      {/* <Protected> */}
      <Heading
        title="Profile"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Programming, Mern , Redux , Machine Learning"
      />
      <Header />

      <div className="container">
        <div className="w-full flex mx-auto md:mt-6 gap-10">
          <div
            className={`hidden 
              md:w-[300px] md:flex h-[650px] w-fit flex-col 
             bg-white bg-opacity-90 border-2 border-[#ffffff1d] rounded-3xl shadow-lg overflow-y-auto
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

          <section className="w-full min-h-screen flex-1 flex-col">
            {children}
          </section>
        </div>
      </div>
      {/* </Protected> */}
    </main>
  )
}

export default TemplateUser;