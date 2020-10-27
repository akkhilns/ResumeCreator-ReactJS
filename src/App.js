import React, { Component } from "react";
import { } from "react-router-dom";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const CreateResume = React.lazy(() => import('./views/CreateResume'));
const ListResume = React.lazy(() => import('./views/ListResume'));

const loading = () => <div className="text-center">Loading...</div>;

class App extends React.Component{

  render(){
    return (
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/" component={CreateResume} />
              <Route exact path="/list" component={ListResume} />
            </Switch>
          </React.Suspense>
        </Router>
    )
  }
}

export default App;
