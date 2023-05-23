import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xl: 1920,
      lg: 1200,
      md: 960,
      sm: 600,
      xs: 0,
    },
  },
  palette: {
    primary: {
      light: "#1f2a69",
      main: "#091242",
      dark: "#1c1f35",
    },
    secondary: {
      main: "#ffbe34",
      gradStart: "#ffb629",
      gradMid: "#ffda56",
      gradEnd: "#ffd7A6",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "'Rubik',sans-serif",
    h1: {
      fontSize: 50,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 35,
    },
    h4: {
      fontSize: 30,
      fontWeight: 500,
    },
    h5: {
      fontSize: 25,
    },
    h6: {
      fontSize: 20,
    },
  },
});
