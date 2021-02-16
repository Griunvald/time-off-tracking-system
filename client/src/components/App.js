import React from 'react';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';
import Home from './Home';
import ModalManager from './modal/ModalManager';
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/App.css';

const App = () => {
  return (
    <>
      <ModalManager />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Container className="root-container">
        <Route path="/" exact component={Home} />
      </Container>
    </>
  );
};

export default App;
