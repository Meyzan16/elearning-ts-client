"use client";

import React, { FC, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { loginFormControls } from "@/utils";
import InputComponent from "../FormElements/InputComponent";
import { GlobalContext } from "@/context";

type Interface = {
  email: string;
  password: string;
  [key: string]: any;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password").min(6),
});

const Login = () => {
  const { setComponentAuth } = useContext(GlobalContext)!;

  const formik = useFormik<Interface>({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log({ email, password });
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full ">
      <div className="flex">
        <div className="lg:block hidden w-1/2 ">
          <img
            src={"/assets/banner_login.png"}
            alt="Banner"
            className="w-full h-full object-cover rounded-l-[40px]"
          />
        </div>

        <div className="lg:w-1/2 w-full px-12 py-12 mx-auto lg:mx-0 ">
          <h1 className="title">Login</h1>

          <div className="my-6 flex justify-center  items-center gap-4">
            <div className="w-full py-3 flex justify-center items-center border-2 border-primary rounded-xl hover:bg-primary hover:text-white cursor-pointer">
              <FcGoogle size={30} className="cursor-pointer mr-2" />
            </div>
            <div className="w-full py-3 flex justify-center items-center border-2 border-primary rounded-xl  hover:bg-primary hover:text-white cursor-pointer">
              <AiFillGithub
                size={30}
                className="cursor-pointer text-black ml-2"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {loginFormControls.map((item, index) =>
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

            <div className="w-full mt-5">
              <input
                type="submit"
                value="Login"
                className="inline-flex w-full items-center justify-center bg-teal-600 px-6 py-4 text-lg mt-4
                              text-white translate-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide rounded-full "
                // disabled={Object.keys(errors).length > 0}
              />
            </div>

            <div className="text-center pt-6  font-Poppins text-lg text-black">
              Not have your account ?{" "}
              <span className="text-primary pl-1 cursor-pointer">Register</span>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
