import "./Header.css";
import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

function Header() {

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "red",
    },
  });

  const StyledTab = styled((props) => (
    <Tab disableRipple component={NavLink} to={props.to} {...props} />
  ))(({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "black",
    "&.Mui-selected": {
      color: "red",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  }));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const currentPathname = window.location.pathname;

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
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="full width tabs example"
              variant="fullWidth"
              indicatorColor="secondary"
              className="StyledTab"
            >
              <StyledTab
                label="HOME"
                to="/"
                selected={currentPathname === "/"}
              />
              <StyledTab
                label="CREATE"
                to="/create"
                selected={currentPathname === "/create"}
              />
              <StyledTab
                label="CHART"
                to="/chart"
                selected={currentPathname === "/chart"}
              />
              <StyledTab
                label="BOARD"
                to="/board"
                selected={currentPathname === "/board"}
              />
            </StyledTabs>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation="vertical"/>
          </Grid>
          <Grid item xs={2}>
            <Link href="/Login">
            <Button
              id="loginBtn"
              variant="contained"
            >
              LOGIN
            </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Header;
