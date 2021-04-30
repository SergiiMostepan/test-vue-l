export default [
  {
    path: "/grouping",
    name: "grouping",
    linkActiveClass: "active",
    component: () =>
      import(
        /* webpackChunkName: "grouping" */
        `@/modules/Grouping/components`
      )
  }
];
