import React from 'react';
import { Button, Label } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import DynamicTextArea from './DynamicTextArea';

const RequestForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{ text: '' }}
        validationSchema={Yup.object({
          text: Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            setSubmitting(false);
          } catch (error) {
            setErrors({ auth: 'Invalid email or password' });
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errors }) => (
          <Form className="ui form" autoComplete="off">
            <DynamicTextArea name="text" />
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
              content="Send"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestForm;
