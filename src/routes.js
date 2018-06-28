// import Home from "./views/Home";
// import WinePage from "./views/Wine";
// import Alt from "./views/Alt";
import Widgets from "./views/Widgets";
import WinePost from "./views/Posts/Wine";

export default [
  {
    path: "/",
    name: "widgets",
    component: Widgets
  },
  {
    path: "/:category/:hierarchy*/:id",
    name: "WinePost",
    props: true,
    component: WinePost
  }
];
