import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Main from "./pages/Main";

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <body style={{marginTop:"80px"}}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            </body>
        </BrowserRouter>
    )
}

export default AppRouter;