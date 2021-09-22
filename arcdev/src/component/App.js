import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./ui/Theme";
import Header from "./ui/header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home </div>} />
          <Route
            exact
            path="/services"
            component={() => <div>services </div>}
          />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>custom softare </div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>mobileapps </div>}
          />
          <Route exact path="/website" component={() => <div>website </div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution </div>}
          />
          <Route exact path="/about" component={() => <div>About </div>} />
          <Route exact path="/contact" component={() => <div>Contact </div>} />
          <Route
            exact
            path="/estimate"
            component={() => <div>Estimate </div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
