import Home from "./views";
import Staff from "./views/Staff";
import StaffBio from "./views/Staff/Bio";
import WinePost from "./views/Wine/post";
import VineyardPage from "./views/Vineyards/page";

export default [
  { 
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "StaffList",
    path: "/people",
    component: Staff,
    props: {
      default: true,
      category: 28, // slug: 'people',
    },
  },
  { 
    name: "StaffBio",
    path: "/people/:slug",
    component: StaffBio,
    props: true,
  },
  {
    name: "VineyardPage",
    path: "/vineyards/:slug",
    component: VineyardPage,
    props: true,
  },
  { 
    name: "WinePost",
    path: "/:category+/:slug",
    component: WinePost,
    props: true,
  }
];