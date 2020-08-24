import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Teft } from "./Teft";
import { Circles } from "./Circles";
import { PurpleCircles } from "./PurpleCircles";
import { Squares } from "./Squares";
import { Triangles } from "./Triangles";
import { NoMatch } from "./NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Footer } from "./components/Footer";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function pxToRem(value) {
  return `${value / 10}rem`;
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <div className="page-container">
            <div className="content-wrap">
              <NavigationBar />
              <Breadcrumbs />
              <Switch>
                <Route exact from="/" component={Teft} />
                <Route exact path="/circles" component={Circles} />
                <Route exact path="/squares" component={Squares} />
                <Route exact path="/triangles" component={Triangles} />
                <Route
                  path="/circles/purplecircles"
                  component={PurpleCircles}
                />
                <Route exact component={NoMatch} />
              </Switch>
            </div>
            <hr />
            <Footer />
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;

// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  typography: {
    fontFamily: `Arial, Helvetica, sans-serif;`,
  },
  breakpoints,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: pxToRem(24),
        [breakpoints.up("xs")]: {
          fontSize: pxToRem(20),
          fontWeight: "bold",
        },
      },
      h2: {
        fontSize: pxToRem(20),
        [breakpoints.up("xs")]: {
          fontSize: pxToRem(16),
        },
      },
      subtitle1: {
        fontSize: pxToRem(16),
        [breakpoints.up("xs")]: {
          fontSize: pxToRem(14),
        },
      },
      body1: {
        fontSize: pxToRem(14),

        [breakpoints.up("xs")]: {
          fontSize: pxToRem(12),
        },
      },
      body2: {
        fontSize: pxToRem(12),

        [breakpoints.up("xs")]: {
          fontSize: pxToRem(10),
        },
      },
      caption: {
        fontSize: pxToRem(10),

        [breakpoints.up("xs")]: {
          fontSize: pxToRem(8),
        },
      },
    },
  },
});
