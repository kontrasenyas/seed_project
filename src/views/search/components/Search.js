import React  from "react";
import { Tab, Row, Col, Nav, NavItem } from "react-bootstrap";
import { SparklineContainer } from "../../../common/graphs/inline";

import {
  Stats,
  BigBreadcrumbs,
  WidgetGrid,
  JarvisWidget
} from "../../../common";

import GridResult from "./GridResult"

import { useState } from "react";

import createRowData from "./createRowData";

const defaultColumnProperties = {
  sortable: true,
  width: 120
};


const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
  const comparer = (a, b) => {
    if (sortDirection === "ASC") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else if (sortDirection === "DESC") {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  };
  return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
};

function GetData() {
  const data = [
    {
        "Country": "Ph",
        "City": "Tanza",
        "Location": "Cavite",
        "AirQuality": 9.5
    },
    {
      "Country": "Ph",
      "City": "Paranaque",
      "Location": "Manila",
      "AirQuality": 7
    },
  ]; // Api to get the result JSON

  return (
    <table className="table table-bordered table-striped responsive-utilities">
      <thead>
        <tr>
          <th>
            Country
          </th>
          <th>
            City
          </th>
          <th>
            Location
          </th>
          <th>
            Air Quality
          </th>
        </tr>
      </thead>
      <tbody>
      {data.map(obj => {
              return (
                <tr>
                  <td style={{backgroundColor: 'white'}}>{obj.Country}</td>
                  <td style={{backgroundColor: 'white'}}>{obj.City}</td>
                  <td style={{backgroundColor: 'white'}}>{obj.Location}</td>
                  <td style={{backgroundColor: 'white'}}>{obj.AirQuality}</td>
                </tr>
              );
            })}
      </tbody>
      
    </table> 
  );
}

export default class Search extends React.Component {
  render() {
    return (      
      <div id="content">
      <div className="row">
          <BigBreadcrumbs
            items={["Search"]}
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
        </div>       

        <SparklineContainer>
          <Tab.Container defaultActiveKey="first" id="search-results-tabs">
            <Row className="clearfix">            
              {/* <Col sm={12}>
                <Nav bsStyle="tabs" className="nav nav-tabs bordered">
                  <NavItem
                    className="pull-right hidden-mobile"
                    eventKey="first"
                  >
                    <span className="note">
                      About 24,431 results (0.15 seconds)
                    </span>
                  </NavItem>
                </Nav>
              </Col> */}
              <Col sm={12}>
              <form className="smart-form">
              <section>
                          <label className="label">Filter</label>

                          <div className="inline-group">
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                name="checkbox-inline"
                                defaultChecked
                              />
                              <i />
                              Country
                            </label>
                            <label className="checkbox">
                              <input type="checkbox" name="checkbox-inline" />
                              <i />
                              City
                            </label>
                            <label className="checkbox">
                              <input type="checkbox" name="checkbox-inline" />
                              <i />
                              Location
                            </label>
                          </div>
                        </section>  
                        </form>   
              </Col>
              <Col sm={12}>
              <div className="input-group input-group-lg hidden-mobile">
              <input
                          className="form-control input-lg"
                          type="text"
                          placeholder="Search ..."
                          id="search-project"
                        />
                        <div className="input-group-btn">
                          <button type="submit" className="btn btn-default">
                            &nbsp;&nbsp;&nbsp;
                            <i className="fa fa-fw fa-search fa-lg" />
                            &nbsp;&nbsp;&nbsp;
                          </button>
                        </div>
                        </div>
              </Col>
              <Col sm={12}>
                <GetData />    
              </Col>
            </Row>
          </Tab.Container>
        </SparklineContainer>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<Example initialRows={createRowData(50)} />, rootElement);