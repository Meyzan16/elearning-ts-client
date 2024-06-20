import MyDataCourses from "@/data/Courses";
import React from "react";

const CourseSkeleton = () => {
  return (
    <div className="mt-4 animate-pulse">
      <div className="md:w-full md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-4 md:mx-auto  ">
        {MyDataCourses &&
          MyDataCourses.map((item, index) => (
            <div key={index}>
              <div className="aspect-square p-2 lg:aspect-none w-full bg-gray-200 shadow-lg shadow-slate-300 rounded-2xl mb-4 h-20 md:h-full">
                <div className='w-full bg-gray-200' />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseSkeleton;
