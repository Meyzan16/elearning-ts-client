"use client";
import React, { FC, useState } from "react";
import TemplateUser from "@/components/template/user/TemplateUser";

interface Props {
  children: React.ReactNode;
}

const UserLayout: FC<Props> = ({ children }) => {
  return (
    <TemplateUser children={children} />
  );
};

export default UserLayout;
