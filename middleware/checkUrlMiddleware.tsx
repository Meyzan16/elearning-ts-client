// app/middleware.ts

import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

export async function checkUrlMiddleware(url: string) {
  // Daftar rute yang ada di aplikasi Anda
  const existingRoutes = [
    "/my-resume", // Tambahkan semua rute yang ada di sini
    "/my-settings",
    "/register",
    "/my-courses",
    // tambahkan rute lain di sini
  ];

  // Jika rute tidak ditemukan dalam daftar, redirect ke halaman 404
  if (!existingRoutes.includes(url)) {
    return true;
  }

  return false;
}
