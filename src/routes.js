import JavaScript from "./components/JavaScript";
import React from "./components/React";
import ReactRouter from "./components/ReactRouter";
import Redux from "./components/Redux";

const routes = [
  {
    path: '/javascript',
    component: JavaScript,
  },
  {
    path: '/react',
    component: React,
  },
  {
    path: '/react-router',
    component: ReactRouter,
  },
  {
    path: '/redux',
    component: Redux,
  }
];

export default routes;