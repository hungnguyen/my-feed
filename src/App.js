import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyFavorites from "./pages/MyFavorites";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/my-favorites">
          <MyFavorites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
