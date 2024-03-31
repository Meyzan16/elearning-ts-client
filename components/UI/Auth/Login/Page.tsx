"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { loginFormControls } from "@/utils/auth";
import InputComponent from "@/components/FormElements/InputComponent/InputComponent";
import { GlobalContext } from "@/context";
import ComponentLevelLoader from "@/components/common/Loader/Loader";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { signIn } from "next-auth/react";

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
  const {
    setComponentAuth,
    pageLevelLoader,
    setPageLevelLoader,
    setOpenAlert,
    openAlert,
  } = useContext(GlobalContext)!;
  
  const [login, { isSuccess, error, data }] = useLoginMutation();

  const formik = useFormik<Interface>({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      setPageLevelLoader(true);
      await login({ email, password });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const message = data.message || "Login successfully";
      setOpenAlert({ status: true, message: message, severity: "success" });
      setPageLevelLoader(false);
      setComponentAuth({ showModal: false, route: "" });
    }
    if (error) {
      if ("data" in error) { //jika ada data di dalam objeck error
        const errorData = error as any;
        setOpenAlert({
          status: true,
          message: errorData.data.message,
          severity: "error",
        });
        setPageLevelLoader(false);
      }
    }
  }, [isSuccess, error]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
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
                <FcGoogle
                  size={30}
                  className="cursor-pointer mr-2"
                  onClick={() => signIn("google")}
                />
              </div>
              <div className="w-full py-3 flex justify-center items-center border-2 border-primary rounded-xl  hover:bg-primary hover:text-white cursor-pointer">
                <AiFillGithub
                  size={30}
                  className="cursor-pointer text-black ml-2"
                  onClick={() => signIn("github")}
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
                <button
                  type="submit"
                  className="mt-4 btnSubmit"
                  // disabled={Object.keys(errors).length > 0}
                >
                  {pageLevelLoader === true ? (
                    <ComponentLevelLoader
                      text={"Login"}
                      color={"#ffffff"}
                      loading={pageLevelLoader}
                    />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>

              <div className="text-center pt-6  font-Poppins text-lg text-black">
                Not have your account ?{" "}
                <span className="text-primary pl-1 cursor-pointer">
                  Register
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
