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
      <center><p>
          <strong>A Project by </strong>{" "}
          <a
            href="http://github.com/w3Abhishek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhishek
          </a>{" "}
          and{" "}
          <a
            href="http://github.com/piyushsuthar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Piyush
          </a>
        </p>
        <p>
          In Association with{" "}
          <strong>
            <a
              href="https://srijankasankalp.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.ibb.co/wwhLzGk/Srijan-Logo.png" alt="" width="163" height="39" />
            </a>
          </strong>
        </p></center>
      <div style={{
        width:"100%",
        padding:"5em 0em"
        }}/>
    </div>
  );
}

export default App;
