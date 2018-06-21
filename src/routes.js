import Home from "./views/Home";
import WinePage from "./views/Wine";
import Widgets from "./views/Widgets";
import Alt from "./views/Alt";

export default [
  {
    path: "/front",
    name: "front",
    component: Home
  },
  {
    path: "/",
    name: "widgets",
    component: Widgets
  },
  {
    path: "/wp-list",
    name: "wplist",
    component: Alt
  },
  {
    path: "/wine-page",
    name: "WinePage",
    component: WinePage
  },
];
