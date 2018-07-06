import Home from "./views";

import Staff from "./views/Staff";
import StaffBio from "./views/Staff/Bio";

import WinePost from "./views/Wine/post";
import WineArchive from "@/components/modules/Wine/archive";

import Vineyards from "./views/Vineyards";
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
    name: "Vineyards",
    path: "/vineyards/",
    component: Vineyards,
    props: {
      type: 'categories',
      parent: 73,
      include: [25,26],
    },
  },
  // {
  //   name: "VineyardsSubList",
  //   path: "/vineyards/:category",
  //   component: VineyardsList,
  //   props: true,
  // },
  {
    name: "VineyardPage",
    path: "/vineyards/:permalink?/:slug",
    component: VineyardPage,
    props: true,
  },
  
  {
    name: "WineArchive",
    path: "/category/:category",
    component: WineArchive,
    props: true,
  },
  {
    name: "WinePost",
    path: "/:category+/:slug",
    component: WinePost,
    props: true,
  },
];