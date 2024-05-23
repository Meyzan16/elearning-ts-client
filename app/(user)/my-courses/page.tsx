"use client"
import CoursesUI from "@/components/page/user/MyCourses/Courses";
import CourseSkeleton from "@/components/page/user/MyCourses/CoursesSkeleton";
import TitlePage from "@/components/interface/DashbordUser/TitlePage";
import React, { useEffect, useState } from "react";
import CoursesMobile from "@/components/page/user/MyCourses/CoursesMobile";
import CustomSelection from "@/components/interface/DashbordUser/CustomSelection";
import useWindowSize from "@/components/common/UseWindows/UseWindowsSize";

const MyCourses = () => {
  const [getShow, setShow] = useState(true)
  const { width } = useWindowSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false)
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  const isMobile = width !== undefined && width <= 768;

  return (
    <div className="flex w-full flex-col">

      <div className="space-y-4 border-b border-gray-200 pb-4 text-sm font-medium text-gray-900">
        <TitlePage title="My Courses" subTitle="Upgrade terus ilmu dan pengalaman terbaru kamu di bidang teknologi" />
      </div>
      <CustomSelection />

      {getShow ? <CourseSkeleton /> : (
        isMobile ? (
          <CoursesMobile />
        ) : (
          <CoursesUI />
        )
      )}

    </div>
  );
};

export default MyCourses;
