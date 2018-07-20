import Home from "./views"

import Staff from "./views/People"
import StaffBio from "./views/People/Bio"

import Wine from "./views/Wine"
import WineGrid from "@/components/modules/Wine/grid"

import WinePost from "./views/Wine/post"

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
    props: { default: true, type:"pages" }
  },

  {
    name: "Staff",
    path: "/people",
    component: Staff,
    props: {
      default: true,
      type: "taxonomy", // slug: 'people',
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
    name: "Wine",
    path: "/wine/:page?",
    redirect:['our-wines'],
    component: Wine,
    children:[
      { path: '',
        name: 'WineGrid',
        component: WineGrid,
        props: true,
      }
    ],
  },
  {
    name: "WinePost",
    path: "/:category+/:slug",
    component: WinePost,
    props: true,
  },
];