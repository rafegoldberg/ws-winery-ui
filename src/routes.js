import Home from "./views";

import Staff from "./views/Staff";
import StaffBio from "./views/Staff/Bio";

import WinePost from "./views/Wine/post";

import VineyardsList from "./views/Vineyards/list";
import VineyardPage from "./views/Vineyards/page";

export default [
  {
    name: "Home",
    path: "/",
    component: Home,
  },

  {
    name: "Staff",
    path: "/people",
    component: Staff,
    props: {
      default: true,
      category: 28, // slug: 'people',
    },
  },
  {
    name: "Bio",
    path: "/people/:slug",
    component: StaffBio,
    props: true,
  },

  {
    name: "VineyardsList",
    path: "/vineyards/",
    component: VineyardsList,
    props: {
      default: true,
      type: 'categories',
      parent: 73,
      include: [25,26],
    },
  },
  {
    name: "VineyardsSubList",
    path: "/vineyards/:category",
    component: VineyardsList,
    props: true,
  },
  {
    name: "VineyardPage",
    path: "/vineyards/:permalink+/:slug",
    component: VineyardPage,
    props: true,
    // props: {
    //   default: true,
    //   type:'categories'
    // },
  },

  
  {
    name: "WinePost",
    path: "/:category+/:slug",
    component: WinePost,
    props: true,
  }
];