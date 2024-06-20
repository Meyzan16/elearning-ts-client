"use client";
import { GlobalContext } from "@/context";
import { Box, Modal } from "@mui/material";
import Slide from '@mui/material/Slide';
import Switch from '@mui/material/Switch';
import React, { FC, useContext, useEffect, useState } from "react";

interface Props {
  component: any;
};

const ModalSidebar: FC<Props> = ({ component: Component }) => {
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext)!;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
      setChecked(openSidebar.show);
  }, [openSidebar.show]);

  const handleClose = () => {
      setChecked(false);
      setOpenSidebar({ ...openSidebar, show: false });
  };
  
  return (
    <>
      <Modal
        open={openSidebar.show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Slide direction="up" in={openSidebar.show} mountOnEnter unmountOnExit>
          <Box
            className={`md:hidden fixed bottom-0 left-0 right-0 top-[15%] -translate-y-1/2 bg-white shadow-lg rounded-t-[50px] p-4 transform  ${
              openSidebar.show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <Component setOpen={openSidebar.show} />
          </Box>
        </Slide>
      </Modal>
    </>
  );
};

export default ModalSidebar;
