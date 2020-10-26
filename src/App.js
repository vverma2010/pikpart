import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
