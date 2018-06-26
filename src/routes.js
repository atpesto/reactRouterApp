import JavaScript from "./components/JavaScript";
import React from "./components/React";
import ReactRouter from "./components/ReactRouter";
import Redux from "./components/Redux";

const routes = [
  {
    id: 1,
    path: '/javascript',
    component: JavaScript,
  },
  {
    id: 2,
    path: '/react',
    component: React,
  },
  {
    id: 3,
    path: '/react-router',
    component: ReactRouter,
  },
  {
    id: 4,
    path: '/redux',
    component: Redux,
  }
];

export default routes;