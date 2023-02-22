import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import ContextApi from "./ContextApi/ContextApi";
import LoginForm from "./components/Login/Login";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const isLoginScreen = window.location.pathname === "/login";
  return (
    <ContextApi>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {window.location.pathname === "/" ? (
              <Routes>
                <Route path="/" element={<LoginForm />} />
              </Routes>
            ) : (
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<Team />} />
                    <Route path="/vendors" element={<Contacts />} />
                    <Route path="/users/:name" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/vendors/:name" element={<Calendar />} />
                    <Route path="/geography" element={<Geography />} />
                  </Routes>
            )}
            {/* <Routes>
              <Route path="/" element={<LoginForm />} />
            </Routes> */}
            {/* <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Team />} />
                <Route path="/vendors" element={<Contacts />} />
                <Route path="/users/:name" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/vendors/:name" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main> */}
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ContextApi>
  );
}

export default App;
