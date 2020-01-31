import React from "react";

import { Redirect, Route, Switch, Link } from "react-router-dom";

import Loadable from "react-loadable";
import { Loading } from "../../../../../common/navigation";

import {
  Stats,
  BigBreadcrumbs,
  WidgetGrid,
  JarvisWidget
} from "../../../../../common";

const MapView = Loadable({
  loader: () => import("./MapView"),
  loading: Loading
});

export default class Maps extends React.Component {
  static defaultProps = {
    styles: {
      colorful: { name: "Colorful", url: "assets/api/maps/colorful.json" }
    }
  };

  state = {
    current: this.props.params
  };

  render() {
    return (
      <div id="content">
        <div className="row">
          <div className="col-xs-12 hidden">
            {Object.keys(this.props.styles).map(key => {
              return (
                <Link
                  className="btn btn-default"
                  to={"/maps/colorful"}
                  key={"map-colorful"}
                >
                  {this.props.styles["colorful"].name}
                </Link>
              );
            })}
          </div>
          <hr />
        </div>

        <WidgetGrid>
          <div className="row">
            <article className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <JarvisWidget
                id="wid-id-0"
                editbutton={false}
                deletebutton={false}
                fullscreenbutton={false}
                color="white"
                style={{ marginBottom: 0 }}
              >
                <div>
                  <div className="widget-body no-padding">
                    <MapView/>
                    <Route path="/maps/colorful" component={MapView} />
                    <Switch>
                      
                      {/* <Redirect from="/maps" exact={true} to="/maps/colorful" /> */}
                    </Switch>
                  </div>
                </div>
              </JarvisWidget>
            </article>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
