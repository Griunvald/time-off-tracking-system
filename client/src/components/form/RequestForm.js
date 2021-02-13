import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
// import { setSelectedDayRange } from '../../actions/calendarActions';

const RequestForm = () => {
  const dispatch = useDispatch();
  const selectedDayRange = useSelector((state) => state.calendar.range);
  console.log(selectedDayRange);
  return (
    <Calendar
      value={selectedDayRange}
      onChange={(v) => dispatch({ type: 'SET_SELECTED_DAY_RANGE', payload: v })}
      shouldHighlightWeekends
    />
  );
};

export default RequestForm;
