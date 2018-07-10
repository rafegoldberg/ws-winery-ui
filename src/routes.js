import Home from "./views"

import Staff from "./views/Staff"
import StaffBio from "./views/Staff/Bio"

import WinePost from "./views/Wine/post"
// import WineArchive from "@/components/modules/Wine/archive"
import WineArchive from "./views/Wine/archive"

import Vineyards from "./views/Vineyards"
import VineyardPage from "./views/Vineyards/page"

import HistoryPage from "./views/pages/history"

export default [
  {
    name: "Home",
    path: "/",
    component: Home,
  },

  {
    name: "History",
    path: "/history",
    component: HistoryPage,
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