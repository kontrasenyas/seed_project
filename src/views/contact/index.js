import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const Contact = Loadable({
  loader: () => import("./components/Contact"),
  loading: Loading
});


export const routes = [
  {
    path:  "/contact",
    exact: true,
    name: "contact",
    component: Contact
  }
];
