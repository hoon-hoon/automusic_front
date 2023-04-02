import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Board from "./pages/Board";
import Chart from "./pages/Chart";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Singup from "./pages/Singup";

<<<<<<< HEAD
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
=======
function LoginLayout() {
  return <Outlet />;
>>>>>>> b07a5f7a10ac7a07e33067c7965999f5d38dcd99
}

function BasicLayout() {
  return (
    <>
      <Header />
      <body style={{ marginTop: "80px" }}>
        <Outlet />
      </body>
    </>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
