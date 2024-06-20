'use client';
import React, { createContext, useState } from "react";

interface SidebarState {
  show: boolean;
  title: string;
};

interface AlertState {
  status: boolean;
  message: string;
  severity: string;
};

interface ComponentAuthState {
  showModal: boolean;
  route: string;
};

interface ComponentLoaderState {
  loading: boolean;
  id: string;
};

type ContextType = {
  openSidebar: SidebarState;
  setOpenSidebar: React.Dispatch<React.SetStateAction<SidebarState>>;
  componentAuth: ComponentAuthState;
  setComponentAuth: React.Dispatch<React.SetStateAction<ComponentAuthState>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  componentLevelLoader: ComponentLoaderState;
  setComponentLevelLoader: React.Dispatch<React.SetStateAction<ComponentLoaderState>>;
  pageLevelLoader: boolean;
  setPageLevelLoader: React.Dispatch<React.SetStateAction<boolean>>;
  openAlert: AlertState;
  setOpenAlert: React.Dispatch<React.SetStateAction<AlertState>>;
};

export const GlobalContext = createContext<ContextType | null>(null);

export default function GlobalState({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState<SidebarState>({
    show: false,
    title: "",
  });

  const [componentAuth, setComponentAuth] = useState<ComponentAuthState>({
    showModal: false,
    route: "",
  });

  const [openAlert, setOpenAlert] = useState<AlertState>({
    status: false,
    message: "",
    severity: "",
  });

  const [pageLevelLoader, setPageLevelLoader] = useState(false);

  const [componentLevelLoader, setComponentLevelLoader] = useState<ComponentLoaderState>({
    loading: false,
    id: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        componentAuth,
        setComponentAuth,
        showModal,
        setShowModal,
        componentLevelLoader,
        setComponentLevelLoader,
        pageLevelLoader,
        setPageLevelLoader,
        openAlert,
        setOpenAlert,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
