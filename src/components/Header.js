import "./Header.css";
import React from "react";
import { AppBar, Typography, Button, Divider } from "@mui/material";
import logo from "../asset/logo.png";

function Header() {
  return (
    <>
      <div id="header">
        <Typography align="left" position={"absolute"}>
          <a href="/">
            <img
              href="/"
              src={logo}
              style={{ marginTop: "0%", height: "40px" }}
            ></img>
          </a>
        </Typography>
        <Divider>
            
        </Divider>
        <Typography align="right" marginRight={"3vw"}>
          <a href="/login">로그인</a>
        </Typography>
      </div>
    </>
  );
}

export default Header;
