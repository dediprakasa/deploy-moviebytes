import React from "react";
import routeConfig from "../routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "../components";

const functionName = (props) => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {routeConfig.map((route, index) => (
            <CustomRoute key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

const CustomRoute = (route) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Route
        path={route.path}
        render={(props) => <route.component {...props} />}
      />
    </React.Suspense>
  );
};

export default functionName;
