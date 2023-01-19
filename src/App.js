import React from "react";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {AuthProvider} from "./auth";
import {AboutPage, HomePage, NotFoundPage, ProfilePage} from "./pages";
import theme from "./assets/theme";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AuthProvider>
                <Routes>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </AuthProvider>
        </ThemeProvider>
    );
}


export default App;
