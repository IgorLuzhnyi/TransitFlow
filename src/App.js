import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import * as React from "react";

import Home from "./components/Home/Home";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
