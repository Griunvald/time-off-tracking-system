import React from 'react';
import { Header } from 'semantic-ui-react';

const Intro = () => {
  return (
    <div className="promo-container">
      <Header as="h2" className="promo-header">
        Manage your time-off requests with a few clicks!
      </Header>
      <img src="/images/promo.png" alt="promo" />
    </div>
  );
};

export default Intro;
