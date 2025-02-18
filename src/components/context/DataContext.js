import { createContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "../../config/theme";
import { ThemeProvider } from "@mui/material";

export const DataContext = createContext();



export const DataProvider = ({ children }) => {
    
const [toggleTheme, setToggleTheme] = useState("light");

const theme = useMemo(() => (toggleTheme === "dark" ? darkTheme : lightTheme), [toggleTheme]);

  return (
    <DataContext.Provider value={{ toggleTheme, setToggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DataContext.Provider>
  )
};
