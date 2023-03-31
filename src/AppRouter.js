import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Board from "./pages/Board";
import Chart from "./pages/Chart";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Singup from "./pages/Singup";

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <body style={{marginTop:"80px"}}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/board" element={<Board />} />
                <Route path="/chart" element={<Chart />} />
                <Route path="/create" element={<Create />} />
                <Route path="/Singup" element={<Singup />} />

            </Routes>
            </body>
        </BrowserRouter>
    )
}

export default AppRouter;