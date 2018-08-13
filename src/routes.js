export default [
  { name: "BetaPage",
    path: "/beta/:slug",
    component: ()=> import("./views/page"),
    props: true,
  },

  {
    name: "HomePage",
    path: "/",
    component: ()=> import("./views"),
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
    path: "/vineyards/:permalink?/:slug",
    component: ()=> import("./views/Vineyards/page"),
    props: true,
  },

  {
    name: "Wine",
    path: "/wines",
    redirect:['our-wines'],
    component: ()=> import("./views/Wine"),
    children:[
      { path: '',
        name: 'WineGrid',
        component: ()=> import("@/views/Wine/grid"),
        // props: true,
      }
    ],
  },
  {
    name: "WinePost",
    path: "/:category+/:slug",
    component: ()=> import("./views/Wine/post"),
    props: true,
  },
];