import React from "react";
import "./LandingPage.css";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import logo from "./images/LogoBlackTransparent.png";
import LoginPage from "./LoginPage";

const wiseWords = {
  quote:
    "An app designed to make you better at understanding what you have learned"
};

const show = () => {
  // const logo = document.getElementById("logo");
  const footer = document.getElementById("footer");
  // logo.classList.add("animated", "fadeOut", 'slow');
  footer.classList.add("animated", "fadeOut", "slow");
};

const hide = () => {
  // const logo = document.getElementById("logo");
  const footer = document.getElementById("footer");
  // logo.classList.remove("animated", "fadeOut", 'slow');
  footer.classList.remove("animated", "fadeOut", "slow");
  // logo.classList.add("animated", "fadeIn", 'slow');
  footer.classList.add("animated", "fadeIn", "slow");
};

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: "#f44336"
    }
  },
  shadows: ["none"]
});

const styles = theme => ({
  button: { margin: theme.spacing.unit }
});
const loadAnimation = () => {
  const logo = document.getElementById("logo");
  logo.classList.add("animated", "fadeIn", "slower");
};

const LandingPage = props => {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div
        onLoad={loadAnimation}
        style={{
          textAlign: "center"
        }}
      >
        <figure
          id="logo"
          style={{
            width: "200px",
            height: "120px",
            display: "inline-block",
            paddingTop: "2%"
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "auto",
              width: "100%"
            }}
          />
        </figure>
        <div
          id="logo"
          style={{
            fontFamily: "Roboto",
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "300",
            color: "#212121",
            letterSpacing: "6px",
            paddingLeft: "10px",
            paddingTop: "3%"
          }}
        >
        QUIZAPP
        </div>
        <div
          style={{
            fontFamily: "Roboto",
            textAlign: "center",
            paddingLeft: "35%",
            paddingRight: "35%",
            fontSize: "25px",
            fontWeight: "100",
            color: "#212121",
            paddingTop: "2%",
            wordBreak: "break-all"
          }}
          onMouseOver={hide}
          onMouseOut={show}
        >
          {wiseWords.quote}
        </div>
        <div
          style={{
            paddingTop: "3%"
          }}
        >
          <LoginPage buttonClicked="getStarted" />
        </div>
        <div
          style={{
            paddingTop: "5%",
            color: "#212121"
          }}
          id="footer"
        >
          <span
            style={{
              fontFamily: "Titillium Web",
              fontStyle: "normal",
              fontWeight: 200,
              fontSize: "15px",
              paddingRight: "3px"
            }}
          >
            | be
          </span>
          <span
            style={{
              fontFamily: "Titillium Web",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "15px",
              paddingRight: "3px"
            }}
          >
            smart
          </span>
          <span
            style={{
              fontFamily: "Titillium Web",
              fontStyle: "normal",
              fontWeight: 200,
              fontSize: "15px"
            }}
          >
            at learning |
          </span>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LandingPage);