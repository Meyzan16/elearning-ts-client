'use client';

import AlertComponents from "@/components/common/Alert/AlertComponents";
import GuardToVerification from "@/components/interface/Auth/GuardToVerification";
import { GlobalContext } from "@/context";
import React, { useContext } from "react";

type Props = {};

const Page = (props: Props) => {
  const {openAlert} = useContext(GlobalContext)!

  return (
    <>
      <GuardToVerification
        Title="New Account"
        subTitle="Lengkapi form di bawah dengan"
        titleForm="Register"
        type="register"
      />

      {openAlert.status == true && (
        <>
          <AlertComponents />
        </>
      )}
    </>
  );
};

export default Page;
