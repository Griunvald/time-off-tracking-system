import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.js';
import Protected from './Protected';
import Navbar from './Navbar';
import '../CSS/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/protected" component={Protected} />
    </div>
  );
};

export default App;
