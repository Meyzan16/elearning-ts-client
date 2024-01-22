import React, {FC, useContext} from 'react'
import {Modal,Box} from "@mui/material";
import { GlobalContext } from '@/context';

type Props = {
    open: boolean;
    setOpen: (open: boolean)  => void;
    component: any;
    setRoute?:(route: string) => void;
}

const ModalLogin: FC<Props> = ({open,setOpen,setRoute, component:Component}) => {
  const {
    setComponentAuth,
    setPageLevelLoader
  } = useContext(GlobalContext)!;

  const handleClose = () => {
    setComponentAuth({ showModal: false, route: "" });
    setPageLevelLoader(false);
  };

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] lg:w-[1000px] bg-white  shadow rounded-[40px] outline-none">
            <Component setOpen={setOpen} setRoute={setRoute} />
        </Box>
    </Modal>
  )
}

export default ModalLogin;