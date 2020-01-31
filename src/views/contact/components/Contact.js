import React from "react";

import { BigBreadcrumbs, WidgetGrid, JarvisWidget } from "../../../common";
import countries from "../../../common/forms/commons/countries";
import Maps from "./maps/components/Maps"

export default class Contact extends React.Component {
  onClick = e => {
    e.preventDefault();
  };

  static defaultProps = {
    countries
  };

  onSubmit(e) {
    e.preventDefault();
    console.log("checkout submit stuff");
  }

  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Contact Us"]}
            icon="users"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
        </div>
        <fieldset>
          <div className="row">
            
          </div>
        </fieldset>    
        <form
        id="checkout-form"
        className="smart-form"
        noValidate="novalidate"
        onSubmit={this.onSubmit}
      >
        <fieldset>
          <div className="row">
            <section className="col col-6">
              <label className="input">
                {" "}
                <i className="icon-prepend fa fa-user" />
                <input type="text" name="fname" placeholder="First name" />
              </label>
            </section>
            <section className="col col-6">
              <label className="input">
                {" "}
                <i className="icon-prepend fa fa-user" />
                <input type="text" name="lname" placeholder="Last name" />
              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-6">
              <label className="input">
                {" "}
                <i className="icon-prepend fa fa-envelope-o" />
                <input type="email" name="email" placeholder="E-mail" />
              </label>
            </section>
            <section className="col col-6">
              <label className="input">
                {" "}
                <i className="icon-prepend fa fa-phone" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  data-smart-masked-input="(999) 999-9999"
                />
              </label>
            </section>
          </div>
          <div className="row">
          <section className="col col-6">
              <label className="input">
                {" "}
                <i className="icon-prepend fa fa-envelope" />
                <input
                  type="tel"
                  name="postal"
                  placeholder="Postal Code"
                  data-smart-masked-input="1234"
                  maxLength="4"
                />
              </label>
            </section>
               
          </div>
        </fieldset>

        <fieldset>
          <section>
            <label className="textarea">
              <textarea rows="3" name="info" placeholder="Inqueries" />
            </label>
          </section>
        </fieldset>
        <footer>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </footer>
      </form>
      <Maps />
      </div>
    );
  }
}
