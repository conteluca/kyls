import React from "react";
import {ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import {blue, green,} from '@mui/material/colors';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./auth";
import {LandingPage} from "./pages";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const theme = createTheme({
    palette: {
        primary: {
            main: blue[800],
        },
        secondary: {
            main: green[500],
        },
        white: {main: '#fff',},
        dark: {main: '#000',}
    },
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/*" element={<NotFoundPage/>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}


export default App;
