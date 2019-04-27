import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  
  render() {
    return (
          <BrowserRouter>
              <div>
                 <Navbar/>
              </div>
              <Switch>
                  <Route exact path="/" component={Dashboard}/>
                  <Route exact path="/project/:id" component={ProjectDetails}/>
                  <Route exact path="/signin" component={SignIn}/>
                  <Route exact path="/signup" component={SignUp}/>
                  <Route exact path="/create" component={CreateProject}/>
              </Switch>
          </BrowserRouter>
    );
  }
}

export default App;
