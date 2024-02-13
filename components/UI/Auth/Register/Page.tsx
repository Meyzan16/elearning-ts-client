"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { RegisterFormControls } from "@/utils";
import InputComponent from "@/components/FormElements/InputComponent";
import { GlobalContext } from "@/context";
import ComponentLevelLoader from "@/components/Loader/Page";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import Alert from '@mui/material/Alert';
import BasicAlerts from "@/components/Alert/page";
import CustomizedSnackbars from "@/components/Alert/page";

type Interface = {
  name: string;
  email: string;
  password: string;
  [key: string]: any;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password").min(6),
});

const Register = () => {
    const {
      setComponentAuth,
      pageLevelLoader,
      setPageLevelLoader,
      openAlert,
      setOpenAlert
    } = useContext(GlobalContext)!;

  const [register, {data,error,isSuccess}] = useRegisterMutation();

  useEffect(() => {
    if(isSuccess){
      const message = data?.message || "Registaration successfully";  
      setOpenAlert({status: true, message:message, severity:"success"});
      setComponentAuth({ showModal: true, route: "Verification" });
      setPageLevelLoader(false);
    }
    if(error) {
      if("data" in error) {
        const errorData = error as any; 
        setOpenAlert({status: true, message:errorData.data.message, severity:"error"});
        setPageLevelLoader(false);
      }
    }
  },[isSuccess, error])

  const formik = useFormik<Interface>({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      setPageLevelLoader(true);
      const data = {
        name,email,password
      }
      await register(data);

    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <div className="my-6 flex justify-center  items-center gap-4">
        <div className="w-full py-3 flex justify-center items-center border-2 border-primary rounded-xl hover:bg-primary hover:text-white cursor-pointer">
          <FcGoogle size={30} className="cursor-pointer mr-2" />
        </div>
        <div className="w-full py-3 flex justify-center items-center border-2 border-primary rounded-xl  hover:bg-primary hover:text-white cursor-pointer">
          <AiFillGithub size={30} className="cursor-pointer text-black ml-2" />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {RegisterFormControls.map((item, index) =>
          item.componentType === "input" ? (
            <InputComponent
              key={index}
              id={item.id}
              label={item.label}
              placeholder={item.placeholder}
              type={item.type}
              value={values[item.id]}
              onChange={handleChange}
              errors={touched[item.id] && errors[item.id]}
              touched={touched[item.id]}
            />
          ) : null
        )}

        <div className="w-full mt-8">
          <button type="submit" className="btnSubmit mt-4">
            {pageLevelLoader === true ? (
              <ComponentLevelLoader
                text={"Registering"}
                color={"#ffffff"}
                loading={pageLevelLoader}
              />
            ) : (
              "Register"
            )}
          </button>

          
        </div>
      </form>

      {
        openAlert.status == true && (
          <>
            <CustomizedSnackbars />
          </>
        )
      }
    </>
  );
};

export default Register;
