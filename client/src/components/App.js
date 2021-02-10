import React from 'react';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';
import Home from './Home';
import ModalManager from './modal/ModalManager';
import { Container } from 'semantic-ui-react';
import '../CSS/App.css';

const App = () => {
  return (
    <>
      <ModalManager />
      <Navbar />
      <Container className="root-container">
        <Route path="/" exact component={Home} />
      </Container>
    </>
  );
};

export default App;
