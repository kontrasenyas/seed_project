import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const Faq = Loadable({
  loader: () => import("./components/Faq"),
  loading: Loading
});


export const routes = [
  {
    path:  "/faq",
    exact: true,
    name: "faq",
    component: Faq
  }
];
