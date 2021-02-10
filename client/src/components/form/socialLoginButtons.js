import React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modalActions';
import { socialLogin } from '../../firebase/firebaseService';

export const SocialLogin = () => {
  const dispatch = useDispatch();

  const handleSocialLogin = (provider) => {
    dispatch(closeModal());
    socialLogin(provider);
  };
  return (
    <>
      <Button
        onClick={() => handleSocialLogin('facebook')}
        icon="facebook"
        fluid
        color="facebook"
        content="Login with Facebook"
        style={{
          marginBottom: '10px',
        }}
      />
      <Button
        onClick={() => handleSocialLogin('google')}
        icon="google"
        fluid
        color="google plus"
        content="Login with Google"
        style={{
          marginBottom: '10px',
        }}
      />
    </>
  );
};

export default SocialLogin;
