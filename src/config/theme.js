import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#2c2c2c",
        paper: "#1c1c1c",
      },
      text: {
        primary: "#fff",
        secondary: "#7c7c7c",
      },
    }
  });

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000",
      secondary: "#555",
    },
  },
});
