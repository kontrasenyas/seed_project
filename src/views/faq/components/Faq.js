import React from "react";

import { BigBreadcrumbs, WidgetGrid, JarvisWidget } from "../../../common";

export default class Faq extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["FAQ"]}
            icon="users"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
        </div>
        <div className="row">
          {/* NEW WIDGET START */}
          <div className="col-sm-12">
            {/* widget content */}
            <div className="bs-example bs-example-type">
              <table className="table eg-1">
                <tbody>
                  <tr>
                    <td>
                      <h2>Question 1?</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et turpis pretium, interdum ipsum nec, tempus eros. Sed pellentesque condimentum orci at faucibus. Integer eget tortor at turpis aliquet tristique. Pellentesque ante metus, maximus vel dictum et, gravida nec diam. Praesent tempor vitae eros vel iaculis. Nunc sodales vitae ante sed porta. Maecenas aliquam non nisi ac vestibulum. Nulla volutpat, eros non euismod cursus, metus neque molestie eros, nec sodales nunc tortor rutrum turpis. Nullam leo enim, viverra vel maximus id, bibendum sit amet ipsum. Sed sit amet eros vel orci pharetra congue non eget justo. Nullam euismod imperdiet dolor, eget viverra urna auctor venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent fermentum eros sed metus molestie, at rutrum diam aliquet. Donec varius rhoncus erat gravida ornare.
                        </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>
    );
  }
}
