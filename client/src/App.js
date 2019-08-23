import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Profile from './Components/Profile'
import Dashboard from './Components/Dashboard'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import NotFound from './Components/NotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
      <Route exact path ="/" component={Home}/>
      <Route path ="/dashboard" component={Dashboard}/>
      <Route path ="/profile" component={Profile}/>

      <Route path ="/signup" component={Signup}/>
      <Route path ="/login" component={Login}/>
      <Route path ="*" component={NotFound}/>

      </Switch>
    </Router>
    )
  }
}


// import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// import Profile from './Components/Profile'
// import Dashboard from './Components/Login'
// import Signup from './Components/Signup'
// import Login from './Components/Login'
// import Home from './Components/Home'
// import NotFound from './Components/NotFound';

// function App() {
//   return (
//     <Router>
//       <Switch>
//       <Route exact path ="/" component={Home}/>
//       <Route path ="profile" component={Profile}/>
//       <Route path ="dashbaord" component={Dashboard}/>
//       <Route path ="signup" component={Signup}/>
//       <Route path ="login" component={Login}/>
//       <Route path ="*" component={NotFound}/>

//       </Switch>
//     </Router>
//   );
// }

// export default App;
