"use client";

import React, { FC, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { RegisterFormControls } from "@/utils";
import InputComponent from "../FormElements/InputComponent";
import { GlobalContext } from "@/context";

type Props = {
  setRoute: (route: string) => void;
};

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

const Register: FC<Props> = ({ setRoute }) => {
  const {
    setComponentAuth,
  } = useContext(GlobalContext)!;

  const formik = useFormik<Interface>({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      console.log({ name, email, password });
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className="title">Register</h1>

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
              errors={errors[item.id]}
              touched={touched[item.id]}
            />
          ) : null
        )}

        <div className="w-full mt-5">
          <input
            type="submit"
            value="Register"
            className="inline-flex w-full items-center justify-center bg-teal-600 px-6 py-4 text-lg mt-4
                      text-white translate-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide rounded-full "
            
          />
        </div>

        <div className="text-center pt-6  font-Poppins text-lg text-black">
          Already your account ?{" "}
          <span
            className="text-primary pl-1 cursor-pointer"
            onClick={() =>  setComponentAuth({showModal:true , route:"Login"})} 
          >
            Login
          </span>
        </div>


      </form>
    </div>
  );
};

export default Register;
