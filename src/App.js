import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import * as React from "react";

import Header from "./components/Header/Header";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
}

export default App;
