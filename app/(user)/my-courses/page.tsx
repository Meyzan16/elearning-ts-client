"use client"
import CoursesUI from "@/components/page/User/MyCourses/Courses";
import CourseSkeleton from "@/components/page/User/MyCourses/CoursesSkeleton";
import TitlePage from "@/components/page/User/TitlePage";
import KategoriKelasData from "@/data/KategoriKelas";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MyCourses = () => {
  const [getShow,setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
        setShow(false)
    },1000)

    return () => clearInterval(interval);

  },[])
  

  return (
    <div className="flex w-full flex-col text-red-700">

      <div className="space-y-4 border-b border-gray-200 pb-4 text-sm font-medium text-gray-900">
          <TitlePage title="My Courses" subTitle="Upgrade terus ilmu dan pengalaman terbaru kamu di bidang teknologi" />
      </div>
      

      {getShow ? <CourseSkeleton /> : <CoursesUI />}
     
    </div>
  );
};

export default MyCourses;
