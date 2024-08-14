import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navcontext = createContext();

export const NavContextProvider = ({ children }) => {
  const [nav, setNav] = useState("/");
  const [title, setTitle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(nav);
  }, [nav]);

  return (
    <Navcontext.Provider value={{ nav, setNav, title, setTitle }}>
      {children}
    </Navcontext.Provider>
  );
};

export const useNavigateTo = () => {
  return useContext(Navcontext);
};
