import { Route, Switch } from "react-router-dom";
import { Filter, Home, Rank } from "./pages";

const PagesRouter = () => (
  <Switch>
    <Route path="/filter">
      <Filter />
    </Route>

    <Route path="/" exact>
      <Home />
    </Route>

    <Route path="/rank">
      <Rank />
    </Route>
  </Switch>
);

export default PagesRouter;
