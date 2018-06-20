import Home from "./views/Home";
import Widgets from "./views/Widgets";

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
];
