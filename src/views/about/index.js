import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const About = Loadable({
  loader: () => import("./components/About"),
  loading: Loading
});


export const routes = [
  {
    path:  "/about",
    exact: true,
    name: "about",
    component: About
  }
];
