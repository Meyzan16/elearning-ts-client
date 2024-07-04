import TitlePage from "@/components/UI/User/TitlePage";
import Editprofile from "@/components/pages/user/EditProfile/Editprofile";
import React from "react";

type Props = {};

const EditProfile = (props: Props) => {
  return (
    <div>
      <div className="space-y-4 text-sm font-medium text-gray-900 mb-8">
        <TitlePage
          title="Edit Profile"
          subTitle="Masukkan informasi yang valid agar proses belajar lebih mudah"
        />
      </div>

      <Editprofile />
    </div>
  );
};

export default EditProfile;
