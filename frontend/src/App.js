import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { HomePage, Final11Page } from "./pages";
import { AppContextProvider } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./shared";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/final11" element={<Final11Page />} />
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
