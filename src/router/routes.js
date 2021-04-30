const allRoutes = [];

const requireRoutes = require.context("../modules", true, /routes.js$/);
requireRoutes.keys().forEach(fileName => {
  const routes = requireRoutes(fileName).default;
  if (routes instanceof Array) {
    allRoutes.push(...routes);
  }
});

export default allRoutes;
