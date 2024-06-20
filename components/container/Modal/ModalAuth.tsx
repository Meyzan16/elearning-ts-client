'use client';
import React, {FC, useContext} from 'react'
import {Modal,Box} from "@mui/material";
import { GlobalContext } from '@/context';

interface Props {
    component: any;
    setRoute?:(route: string) => void;
}

const ModalAuth:FC<Props> = ({component:Component}) => {
  const {
    setComponentAuth,
    componentAuth,
    setPageLevelLoader
  } = useContext(GlobalContext)!;

  const handleClose = () => {
    setComponentAuth({ showModal: false, route: "" });
    setPageLevelLoader(false);
  };

  return (
    <Modal
        open={componentAuth.showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[90%]
            ${componentAuth.route === 'Verification' ? 'md:w-[480px]' : 'lg:w-[1000px]'} bg-white  shadow rounded-[40px] outline-none`}>
            <Component setOpen={componentAuth.showModal} setRoute={componentAuth.route} />
        </Box>
    </Modal>
  )
}

export default ModalAuth;