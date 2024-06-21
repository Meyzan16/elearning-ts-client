"use client";
import { GlobalContext } from "@/context";
import { Box, Modal } from "@mui/material";
import Slide from '@mui/material/Slide';
import React, { FC, useContext, useEffect, useState } from "react";


interface Props {
    component: any;
  };

export const ModalSearchDekstop:FC<Props> = ({ component: Component }) => {
    const {
        setOpenSearch,
        openSearch,
        setPageLevelLoader
      } = useContext(GlobalContext)!;
    
      const handleClose = () => {
        setOpenSearch({ show: false, title: "" });
        setPageLevelLoader(false);
      };


      return (
        <Modal
            open={openSearch.show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`absolute top-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[90%]
                lg:max-w-4xl bg-white  shadow rounded-[40px] outline-none`}>
                <Component setOpen={openSearch.show}  />
            </Box>
        </Modal>
      )
}