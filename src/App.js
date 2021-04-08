import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "./utilities/Request";
import NRoute from "./utilities/NormalRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import "./assets/css/app.css";
import "./assets/css/css2.css";
const App = () => {
  const [isdarkmode, setisdarkmode] = useState(false);
  useEffect(() => {
    if (getLocalStorage("DarkMode") === "on") setisdarkmode(true);
  }, []);

  useEffect(() => {
    if (isdarkmode) {
      setLocalStorage("DarkMode", "on");
    } else {
      setLocalStorage("DarkMode", "off");
    }
  }, [isdarkmode]);
  return (
    <>
      <Router>
        <Switch>
          <NRoute path="/notfound" component={NotFound} />
          <NRoute
            path="/"
            component={Home}
            exact
            isdarkmode={isdarkmode}
            setisdarkmode={setisdarkmode}
          />
          <NRoute
            path="/login"
            component={Login}
            exact
            isdarkmode={isdarkmode}
            setisdarkmode={setisdarkmode}
          />

          <Redirect to="/notfound" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
