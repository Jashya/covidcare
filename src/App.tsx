import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import LeadMenu from "./Components/leadMenu";
import { About, Disclaimer, Home, SubmitLeads } from "./Pages/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

const RouteWrapped = ({ path, component: Component, ...args }: any) => (
  <Route path={path} {...args}>
    <Component />
    {path === "/" || path === "/resource" ? null : <LeadMenu />}
  </Route>
);

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <RouteWrapped path="/" exact component={Home} />
            <RouteWrapped path="/resource" component={Home} />
            <RouteWrapped path="/about" exact component={About} />
            <RouteWrapped path="/disclaimer" exact component={Disclaimer} />
            <RouteWrapped path="/submit-leads" exact component={SubmitLeads} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
