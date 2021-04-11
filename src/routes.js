import React from "react";

const routeConfig = [
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import("./pages/HomePage")),
  },
  {
    path: "/detail/:movieId",
    exact: false,
    component: React.lazy(() => import("./pages/DetailPage")),
  },
];

export default routeConfig;
