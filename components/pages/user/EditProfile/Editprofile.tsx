"use client";

import InputComponent from "@/components/UI/InputComponent/InputComponent";
import ComponentLevelLoader from "@/components/UI/Loader/Loader";
import SelectComponent from "@/components/UI/SelectComponent/SelectComponent";
import { GlobalContext } from "@/context";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { RegisterFormControls } from "@/utils/auth";
import { UpdateUser } from "@/utils/userprofile";
import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import * as Yup from "yup";

interface Interface {
  name: string;
  email: string;
  password: string;
  [key: string]: any;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password").min(6),
});

const Editprofile = () => {
  const {
    setComponentAuth,
    componentLevelLoader,
    setComponentLevelLoader,
    setOpenAlert,
  } = useContext(GlobalContext)!;

  const [register, { data, error, isSuccess }] = useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = data.message
        ? data.message
        : "Registaration successfully";
      setOpenAlert({ status: true, message: message, severity: "success" });
      setComponentAuth({ showModal: true, route: "Verification" });
      setComponentLevelLoader({ loading: false, id: "register" });
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        setOpenAlert({
          status: true,
          message: errorData.data.message,
          severity: "error",
        });
        setComponentLevelLoader({ loading: false, id: "register" });
      }
    }
  }, [isSuccess, error]);

  const formik = useFormik<Interface>({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      setComponentLevelLoader({ loading: true, id: "register" });
      const data = {
        name,
        email,
        password,
      };
      await register(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="flex gap-4 max-w-5xl">
      <div className="w-2/3 bg-white rounded-2xl">
        <div className=" px-10 py-6">
          <form onSubmit={handleSubmit}>
            {UpdateUser.map((item, index) =>
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
              ) : item.componentType === "select" ? (
                <SelectComponent
                  key={item.id}
                  options={item.options}
                  label={item.label}
                  onChange={handleChange}
                  value={values[item.id]}
                />
              ) : null
            )}

            <div className="w-full mt-8">
              <button type="submit" className="btnSubmit mt-4">
                {componentLevelLoader.loading === true &&
                componentLevelLoader.id === "register" ? (
                  <ComponentLevelLoader
                    text={"Registering"}
                    color={"#ffffff"}
                    loading={componentLevelLoader.loading}
                  />
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-1/3 max-h bg-red-500"></div>
    </div>
  );
};

export default Editprofile;
