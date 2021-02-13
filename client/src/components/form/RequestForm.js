import React from 'react';
import { Form, Formik } from 'formik';
import { Button, Label } from 'semantic-ui-react';
import DynamicTextArea from './DynamicTextArea';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

// import { setSelectedDayRange } from '../../actions/calendarActions';

const RequestForm = () => {
  const dispatch = useDispatch();
  const selectedDayRange = useSelector((state) => state.calendar.range);
  console.log(selectedDayRange);
  return (
    <>
      <Calendar
        value={selectedDayRange}
        onChange={(v) =>
          dispatch({ type: 'SET_SELECTED_DAY_RANGE', payload: v })
        }
        shouldHighlightWeekends
      />

      <Formik
        initialValues={{ reason: '' }}
        validationSchema={Yup.object({
          reason: Yup.string(),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            console.log(values);
            setSubmitting(false);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errors }) => (
          <Form className="ui form" autoComplete="off">
            <DynamicTextArea
              name="reason"
              placeholder="Please, provide a reason for time off"
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
              disabled={!isValid || isSubmitting}
              type="submit"
              fluid
              size="large"
              color="green"
              content="Send"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RequestForm;
