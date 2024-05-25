'use client';

import AlertComponents from "@/components/UI/Alert/AlertComponents";
import ModalAuth from "@/components/container/Modal/ModalAuth";
import Verification from "@/components/pages/auth/Verification/Page";
import TemplateAuth from "@/components/template/auth/TemplateAuth";
import { GlobalContext } from "@/context";
import React, { useContext } from "react";

type Props = {};

const Register = (props: Props) => {
  const { openAlert, componentAuth } = useContext(GlobalContext)!

  return (
    <>
      <TemplateAuth
        Title="New Account"
        subTitle="Lengkapi form di bawah dengan"
        titleForm="Register"
        type="register"
      />
      {openAlert.status == true && (
        <AlertComponents />
      )}
      
      {componentAuth.route === "Verification" && (
        componentAuth.showModal && <ModalAuth component={Verification} />
      )}
    </>
  );
};

export default Register;
