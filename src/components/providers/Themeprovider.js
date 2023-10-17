"use client"

import { AppContext } from "@/contextapi/ContextProvider";
import { useContext } from "react";


export const ThemeProvider = ({ children }) => {
  const {theme} = useContext(AppContext);
  
  return (
    <div className={theme} >
      {children}
     </div>
  );
}
