import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.js';

import Navbar from './Navbar';
import '../CSS/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Home} />
    </div>
  );
};

export default App;
