"use client";

import React, { FC, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { RegisterFormControls } from "@/utils";
import InputComponent from "@/components/FormElements/InputComponent";
import { GlobalContext } from "@/context";

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
  const { setComponentAuth } = useContext(GlobalContext)!;

  const formik = useFormik<Interface>({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      console.log({ name, email, password });
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <section className="flex gap-24">
      <div className="lg:block hidden w-1/4">
        <img
          src={"/assets/banner_register.png"}
          alt="Banner"
          className="w-full h-full "
        />
      </div>

      <div className="w-3/4 mx-auto  lg:mx-0 lg:justify-start p-4 overflow-y-auto">
        <div className=" max-w-screen-md px-4 mb-6">
          <div className="my-4">
            <div className="font-Poppins text-[38px] font-bold text-primary">
              New Account
            </div>
            <div className="my-6 font-Poppins text-left text-xl text-slate-500">
              Lengkapi form di bawah dengan
              <span className="block">menggunakan data Anda yang valid</span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl">
            <div className="p-6 sm:p-12">
              <div className="w-full">
                <h1 className="title">Register</h1>

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
                    <input
                      type="submit"
                      value="Register"
                      className="inline-flex w-full items-center justify-center bg-teal-600 px-6 py-4 text-lg mt-4
                      text-white translate-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide rounded-full "
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
