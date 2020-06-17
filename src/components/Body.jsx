import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Comp0 from "./Comp0";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import NotFound from "./NotFound";
import './Body.scss';

class Body extends Component {
  render() {
    return (
      <div className="body1">
        <Switch>
          <Route exact path="/" component={Comp0} />
          <Route path="/comp1" component={Comp1} />
          <Route path="/comp2" component={Comp2} />
          <Route path="/comp3/:item" component={Comp3} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Body;
