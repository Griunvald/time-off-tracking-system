import React from 'react';
import RequestForm from './form/RequestForm';
import MyRequests from './MyRequests';
import AdminDashboard from './AdminDashboard';
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
    return null;
  }
};

export default Home;
