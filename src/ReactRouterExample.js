import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ReactNavigation from "./ReactNavigation";
import ReactHome from "./ReactHome";
import ReactRouter1 from "./ReactRouter1";
import ReactRouter2 from "./ReactRouter2";
import ReactRouterDescription from "./ReactRouterDescription"

const ReactRouterExample = () => {
  return (
   //Wrapping BrowserRouter around Navigation bar
    <BrowserRouter>
      <ReactNavigation />
      <Switch>
        {/* If directed to specified path then corresponding 
        component wil be loaded */}
        <Route exact path="/" component={ReactHome} />
        <Route exact path="/router1" component={ReactRouter1} />
        <Route exact path="/router2" component={ReactRouter2} />
        <Route exact path=  "/router2/:id" component={ReactRouterDescription}/>
      </Switch>
    </BrowserRouter>
  );
};

export default ReactRouterExample;

