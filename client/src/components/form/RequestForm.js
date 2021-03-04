import React from 'react';
import { Button, Label, FormGroup, Header } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import DynamicTextArea from './DynamicTextArea';
import DynamicDateInput from './DynamicDateInput';
import firebase from '../../config/firebase';
import { toast } from 'react-toastify';
import { setSelectedDayRange } from '../../actions/calendarActions';

const toastOptions = {
  style: { backgroundColor: '#21BA45' },
};

const db = firebase.firestore();
const RequestForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div>
      <Formik
        initialValues={{ text: '', 'start date': '', 'end date': '' }}
        validationSchema={Yup.object({
          text: Yup.string(),
          'start date': Yup.string().required(),
          'end date': Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
          try {
            db.collection('users_requests')
              .doc(currentUser.email)
              .collection(currentUser.email)
              .doc()
              .set({
                startDate: values['start date'],
                endDate: values['end date'],
                text: values.text,
                status: 'pending',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                user: currentUser.displayName,
                email: currentUser.email,
              });

            setSubmitting(false);
            dispatch(setSelectedDayRange(values));
            resetForm();
            toast.success('Request sent!', toastOptions);
          } catch (error) {
            setErrors({ calendar: 'Invalid dates' });
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errors }) => (
          <Form className="ui form request-form" autoComplete="off">
            <Header
              as="h2"
              content="Choose desired time off dates using the date picker"
              textAlign="center"
              style={{ marginBottom: '30px' }}
            ></Header>
            <FormGroup widths="equal">
              <DynamicDateInput
                name="start date"
                dateFormat="MMMM d, yyyy"
                placeholderText="Select start date"
                label="Start date"
              />
              <DynamicDateInput
                name="end date"
                dateFormat="MMMM d, yyyy"
                placeholderText="Select end date"
                label="End date"
              />
            </FormGroup>
            <DynamicTextArea
              name="text"
              placeholder="Please, provide a reason"
              label="Reason (Optional)"
              className="text-area-font-size"
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
              size="big"
              color="green"
              content="Send request"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestForm;
