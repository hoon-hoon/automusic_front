import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Board from "./pages/Board";
import Chart from "./pages/Chart";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";

function LoginLayout() {
  return <Outlet />;
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
          <Route path="/Signup" element={<Signup />} />
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
