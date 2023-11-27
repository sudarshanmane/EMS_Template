import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import EmployeeProfile from "./employeeprofile";
import ClientProfile from "./clientprofile";
import UserAssets from "./userassets";

const subscriptionroute = ({ match }) => (
  <Switch>
    <Redirect
      exact
      from={`${match.url}/`}
      to={`${match.url}/employee-profile`}
    />
    <Route path={`${match.url}/employee-profile`} component={EmployeeProfile} />
    <Route path={`${match.url}/client-profile`} component={ClientProfile} />
    <Route path={`${match.url}/user-assets-details`} component={UserAssets} />
  </Switch>
);

export default subscriptionroute;
