import React, { FC, useContext } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { GlobalContext } from "@/context";

const AlertComponents = () => {
  const { openAlert, setOpenAlert } = useContext(GlobalContext)!;

  const handleClose = () => {
    setOpenAlert({ status: false, message: "", severity: "" });
  };

  return (
    <div>
      <Snackbar
        open={openAlert.status}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={Slide}
        transitionDuration={{ enter: 200, exit: 300 }}
        className="mt-16"
      >
        <Alert
          onClose={handleClose}
          style={{
            fontSize: "1.25rem",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            borderRadius: "20px",
            maxWidth: "100vw", // Ubah ke '100vw' agar sesuai dengan max-w-screen-xl
          }}
          severity={openAlert.severity as AlertColor}
          variant="filled"
        >
          {openAlert.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertComponents;
