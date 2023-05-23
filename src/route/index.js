const express = require("express");
const router = express.Router();
const listRoute = require("./list.route");
const taskRoute = require("./task.route");


const defaultRoutes = [
  {
    path: '/lists',
    route: listRoute
  },
  {
    path: '/tasks',
    route: taskRoute
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;