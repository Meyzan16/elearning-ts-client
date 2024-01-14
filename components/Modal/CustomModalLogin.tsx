import React, {FC, useContext} from 'react'
import {Modal,Box} from "@mui/material";
import { GlobalContext } from '@/context';

type Props = {
    activeItem: any;
    open: boolean;
    setOpen: (open: boolean)  => void;
    component: any;
    setRoute?:(route: string) => void;
}

const ModalLogin: FC<Props> = ({open,setOpen,setRoute, component:Component}) => {
  const {
    setComponentAuth,
  } = useContext(GlobalContext)!;

  return (
    <Modal
        open={open}
        onClose={() => setComponentAuth({showModal: false, route:""})}
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