import React from 'react';
import { Button, Label } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import DynamicTextArea from './DynamicTextArea';
import DynamicDateInput from './DynamicDateInput';
import firebase from '../../config/firebase';
import { toast } from 'react-toastify';

const db = firebase.firestore();
const RequestForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div>
      <Formik
        initialValues={{ text: '', 'start date': '', 'end date': '' }}
        validationSchema={Yup.object({
          text: Yup.string().required(),
          'start date': Yup.string().required(),
          'end date': Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
          try {
            db.collection('requests').doc(currentUser.email).set({
              startDate: values['start date'],
              endDate: values['end date'],
              text: values.text,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setSubmitting(false);
            dispatch({ type: 'SET_SELECTED_DAY_RANGE', payload: values });
            resetForm();
            toast.success('Request sent!');
          } catch (error) {
            setErrors({ calendar: 'Invalid dates' });
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errors }) => (
          <Form className="ui form" autoComplete="off">
            <DynamicDateInput
              name="start date"
              dateFormat="MMMM d, yyyy"
              placeholderText="Select start date"
            />
            <DynamicDateInput
              name="end date"
              dateFormat="MMMM d, yyyy"
              placeholderText="Select end date"
            />
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
