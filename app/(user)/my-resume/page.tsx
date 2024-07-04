import TitlePage from "@/components/UI/User/TitlePage";
import PageResume from "@/components/pages/user/MyResume/Page";
import React from "react";

const MyResume = () => {
  return (
    <>
      <div className="space-y-4 text-sm font-medium text-gray-900 mb-8">
        <TitlePage
          title="My Resume"
          subTitle="Mari bagikan karya terbaik kamu dan dapat pekerjaan IT"
        />
      </div>

      <PageResume />
    </>
  );
};

export default MyResume;
