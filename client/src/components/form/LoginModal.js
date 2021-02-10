import React from 'react';
import { Button, Label } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import DynamicInput from './DynamicInput';
import { logInWithEmail } from '../../firebase/firebaseService';
import ModalWrapper from '../modal/ModalWrapper';

const LoginModal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ModalWrapper size="tiny" header="Log in">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required(),
          })}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await logInWithEmail(values);
              setSubmitting(false);
              dispatch({ type: 'CLOSE_MODAL' });
            } catch (error) {
              setErrors({ auth: 'Invalid email or password' });
            }
          }}
        >
          {({ isSubmitting, isValid, dirty, errors }) => (
            <Form className="ui form" autoComplete="off">
              <DynamicInput name="email" placeholder="Email address" />
              <DynamicInput
                name="password"
                placeholder="Password"
                type="password"
              />
              {errors.auth && (
                <Label
                  basic
                  color="red"
                  style={{ marginBottom: '10px' }}
                  content={errors.auth}
                />
              )}
              <Button
                loading={isSubmitting}
                disabled={!isValid || !dirty || isSubmitting}
                type="submit"
                fluid
                size="large"
                color="green"
                content="Login"
              />
            </Form>
          )}
        </Formik>
      </ModalWrapper>
    </div>
  );
};

export default LoginModal;
