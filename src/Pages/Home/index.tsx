import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "../../Components/Container";

import NavCards from "./NavCard";
import ResourcePage from "./resoursePage";

interface Props {}

export default function Home({}: Props) {
  return (
    <Container>
      <NavCards />
      <Switch>
        <Route exact path="/resource/oxygen">
          <ResourcePage type="Oxygen" />
        </Route>
        <Route exact path="/resource/plasma">
          <ResourcePage type="Plasma" />
        </Route>
        <Route exact path="/resource/medicines">
          <ResourcePage type="Medicines" />
        </Route>
        <Route exact path="/resource/food">
          <ResourcePage type="Food" />
        </Route>
        <Route exact path="/resource/hospital">
          <ResourcePage type="Hospital" />
        </Route>
        <Route>
          <ResourcePage type="Mixed" />
        </Route>
      </Switch>
    </Container>
  );
}
