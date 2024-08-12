import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navcontext = createContext();

export const NavContextProvider = ({ children }) => {
  const [nav, setNav] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(nav);
  }, [nav]);

  return (
    <Navcontext.Provider value={{ nav, setNav }}>
      {children}
    </Navcontext.Provider>
  );
};

export const useNavigateTo = () =>{
    return useContext(Navcontext)
}
