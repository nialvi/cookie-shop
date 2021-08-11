import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./ui/Header";
import { Home } from "./ui/Home";
import { Auth } from "./ui/Auth";
import { User } from "./ui/User";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
