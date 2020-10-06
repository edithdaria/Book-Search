import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Search from "./components/Search";
import Saved from "./components/Saved";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path={["/", "/search"]} component={Search}/>
      <Route exact path={"/saved"} component={Saved}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
