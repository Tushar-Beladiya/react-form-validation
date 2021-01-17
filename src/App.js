import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Success from "./components/Success/Success";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <div>
              <Registration />
            </div>
          </div>
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
