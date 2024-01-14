import React, { useState } from "react";

type Props = {};

const InfoPromo = ({
  modalPosition,
}: {
  modalPosition: { top: number; left: number };
}) => {
  const { top, left } = modalPosition;

  return (
    <>
      <div
        className="fixed z-80 bg-white shadow-primary shadow-opacity-70 shadow-md p-4 rounded-xl shadow-full flex flex-col items-center justify-center"
        style={{
          top: top,
          left: left,
          width: 280,
        }}
      >
        <div className="text-primary font-Poppins text-md font-semibold">
          Promo Patungan
        </div>
        <span className="max-w-full text-xs pt-1 w-full font-Poppins font-[400] text-slate-400">
          kamu bisa mengajak 4 teman secara opsional untuk mendapatkan special
          promo patungan 50k
        </span>
      </div>
    </>
  );
};

export default InfoPromo;
