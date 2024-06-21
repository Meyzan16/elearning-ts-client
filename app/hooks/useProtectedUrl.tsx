"use client";

import React, { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const protectedRoutes = ["my-courses", "my-resume", "my-settings", "register", "backgrounds"];

export function ProtectedUrl ({children}: Props) { 
  const pathName = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    const normalizedPathName = pathName && pathName.startsWith("/") ? pathName.slice(1) : pathName;
    if (normalizedPathName && !protectedRoutes.includes(normalizedPathName)) {
        router.push("/not-found");
    }
  }, [pathName]);

  return <>{children}</>
};
