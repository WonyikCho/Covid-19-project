import React from 'react';
import Home from "./Pages/Home";
import Map from "./Pages/Map";
import Graph from "./Pages/Graph";
import Source from "./Pages/Source";
import Nav from "./Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return(
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/Map" component={Map} />
          <Route path="/Graph" component={Graph} />
          <Route path="/Source" component={Source} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
  
}

export default App;
