import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#232626",
        paper: "#292d2e",
      },
      text: {
        primary: "#fff",
        secondary: "#7c7c7c",
        highlight: "#9fe871"
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
      secondary: "#fff",
      highlight: "#21a8f7"
    },
  },
});
