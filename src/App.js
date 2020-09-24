import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignUp from './Components/Pages/SignUp';



function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Services' component={Services} />
        <Route path='/Products' component={Products} />
        <Route path='/SignUp' component={SignUp} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
