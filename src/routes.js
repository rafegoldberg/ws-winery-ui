export default [
  {
    name: "HomePage",
    path: "/",
    component: ()=> import("./views"),
  },
  {
    path: '/home',
    redirect: to=> '/'
  },

  {
    name: "Staff",
    path: "/people",
    component: ()=> import("./views/People"),
    props: {
      default: true,
      type: "taxonomy", // slug: 'people',
    },
  },
  {
    name: "Bio",
    path: "/people/:slug",
    component: ()=> import("./views/People/Bio"),
    props: true,
  },

  {
    name: "Vineyards",
    path: "/vineyards/",
    component: ()=> import("./views/Vineyards"),
    props: {
      type: 'categories',
      parent: 73,
      include: [25,26],
    },
  },
  {
    name: "VineyardPage",
    path: "/vineyards/:slug",
    alias: [ "/estate-vineyards/:slug", "/growers-vineyards/:slug" ],
    component: ()=> import("./views/Vineyards/page"),
    props: true,
  },

  {
    name: "WinePost",
    path: "/wine/:slug",
    component: ()=> import("./views/Wine/post"),
    props: true,
  },

  {
    name: "Wine",
    path: "/wine",
    component: ()=> import("./views/Wine"),
  },

  { name: "Page",
    path: "/:slug",
    component: ()=> import("./views/page"),
    props: true,
  },
];