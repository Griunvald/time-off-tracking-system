import React from 'react';
import RequestForm from './form/RequestForm';
import MyRequests from './MyRequests';
import AdminDashboard from './AdminDashboard';
import Intro from './Intro';
import { useSelector } from 'react-redux';

const Home = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  if (currentUser && currentUser.email === 'admin@mail.com') {
    return (
      <>
        <AdminDashboard />
      </>
    );
  } else if (currentUser) {
    return (
      <>
        <RequestForm />
        <MyRequests />
      </>
    );
  } else {
    return <Intro />;
  }
};

export default Home;
