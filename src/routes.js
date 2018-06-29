import Home from "./views";
import WinePost from "./views/Wine";

export default [
  {
    path: "/",
    name: "widgets",
    component: Home
  },
  {
    path: "/:category+/:slug",
    name: "WinePost",
    props: true,
    component: WinePost
  }
];