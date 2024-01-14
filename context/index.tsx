"use client";
import { createContext, useEffect, useState } from "react";

type ContextType = {
    showModal: boolean;
    setShowModal: (open: boolean) => void;
    componentLevelLoader: any;
    setComponentLevelLoader: any;
    componentAuth:any,
    setComponentAuth:any
};


export const GlobalContext = createContext<ContextType | null>(null);;

export default function GlobalState({ children }: { children: React.ReactNode }) {
    const [showModal, setShowModal] = useState(false);
    const [componentAuth, setComponentAuth] = useState({
      showModal: false,
      route: "",
    });

    const [componentLevelLoader, setComponentLevelLoader] = useState({
      loading: false,
      id: "",
    });
    return (
        <GlobalContext.Provider
          value={{
            componentAuth,
            setComponentAuth,
            showModal,
            setShowModal,
            componentLevelLoader,
            setComponentLevelLoader
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
    }