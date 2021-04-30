export default [
  {
    path: "/",
    name: "home",
    linkActiveClass: "active",
    component: () =>
      import(
        /* webpackChunkName: "dino-comp" */
        `@/modules/DynamicComponent/components`
      )
  }
];
