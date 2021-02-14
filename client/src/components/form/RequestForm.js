import React from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

// import { setSelectedDayRange } from '../../actions/calendarActions';

const RequestForm = () => {
  const dispatch = useDispatch();
  const selectedDayRange = useSelector((state) => state.calendar.range);
  console.log(selectedDayRange);
  let isDisabled;
  if (selectedDayRange.from === null || selectedDayRange.to === null) {
    isDisabled = true;
  }
  return (
    <>
      <Calendar
        value={selectedDayRange}
        onChange={(v) =>
          dispatch({ type: 'SET_SELECTED_DAY_RANGE', payload: v })
        }
        shouldHighlightWeekends
      />
      <Form>
        <TextArea label="About" placeholder="Tell us more about you..." />

        <Button
          loading={false}
          disabled={isDisabled}
          type="submit"
          fluid
          size="large"
          color="green"
          content="Send"
        />
      </Form>
    </>
  );
};

export default RequestForm;
