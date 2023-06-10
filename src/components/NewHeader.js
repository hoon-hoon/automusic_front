import "./newHeader.css";
import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Divider,
  Box,
  Grid,
  Link,
  Tabs,
  Tab,
} from "@mui/material";
import logo from "../asset/logo.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { API_BASE_URL } from "../AppConfig";
import axios from "axios";

function NewHeader() {
  const [nickname, setNickname] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [page, setPage] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const userId = localStorage.getItem("USER");
  console.log(userId);


  // React.useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("USER"));
  //   if (!user) {
  //     setIsLoggedin(false);
  //     console.log("실패");
  //   } else {
  //     setNickname(user.nickname);
  //     setIsLoggedin(true);
  //     console.log(user);
  //   }
  // }, []);

  // React.useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const response = await axios.post(
  //         `${API_BASE_URL}/isLogin`,
  //         {},
  //         {
  //           withCredentials: true, // 쿠키를 서버에 전송하기 위해 필요한 옵션
  //         }
  //       );
  
  //       if (response.status === 200) {
  //         setNickname(userId);
  //         setIsLoggedin(true);
  //       }
  //     } catch (error) {
  //       setIsLoggedin(false);
  //       console.log(error);
  //       console.log("실패");
  //     }
  //   };
  
  //   checkLoginStatus();
  // }, []);
  

  useEffect(() => {
    const path = window.location.pathname;
    let index = 0;

    if (path === '/') {
      index = 0;
    } else if (path === '/create') {
      index = 1;
    } else if (path === '/chart') {
      index = 2;
    } else if (path === '/board') {
      index = 3;
    }

    setPage(index);
  }, [location]);

  const logoutClicked = (event) => {
    localStorage.removeItem("USER");
    window.location.replace("/");
  }

  return (
    <div className="header">
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          width: "100vw",
          borderRadius: 1,
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={1}>
            <Typography
              align="left"
              style={{
                height: "40px",
                width: "fullWidth",
              }}
            >
              <Link href="/">
                <img
                  href="/"
                  src={logo}
                  style={{ marginTop: "0%", height: "40px" }}
                ></img>
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <div class="back color-3">
              <div class="row columns">
                <ul class="menu tab">
                  <li><a href="/" className={page === 0 ? 'active' : ''} data-hover="Home" ><span>Home</span></a></li>
                  <li><a href="/create" className={page === 1 ? 'active' : ''} data-hover="Create" ><span>Create</span></a></li>
                  <li><a href="/chart" className={page === 2 ? 'active' : ''} data-hover="Chart" ><span>Chart</span></a></li>
                  <li><a href="/board" className={page === 3 ? 'active' : ''} data-hover="Board" ><span>Board</span></a></li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation="vertical" style={{ "height": "50px" }} />
          </Grid>
          <Grid item xs={2} sx={{ paddingLeft: '0px !important', paddingTop: '65px !important' }}>
            {isLoggedin ? (<div id="loggedInDiv">
              <Typography>{nickname}님</Typography>
              <Button id="mypageBtn" variant="contained">Mypage</Button>
              <Button id="logoutBtn" variant="contained" onClick={logoutClicked}>LogOut</Button>
            </div>
            ) : (
              <div id="loggedOutDiv">
                <Link href="/src/component/Login">
                  <Button
                    id="loginBtn"
                    variant="contained"
                  >
                    LOGIN
                  </Button>
                </Link>
              </div>
            )}

          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default NewHeader;
