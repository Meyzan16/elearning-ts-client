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

const CustomModal: FC<Props> = ({open,setOpen,setRoute, component:Component}) => {
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
        <Box className="py-12 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] bg-white rounded-xl shadow px-8 outline-none">
            <Component setOpen={setOpen} setRoute={setRoute} />
        </Box>
    </Modal>
  )
}

export default CustomModal;