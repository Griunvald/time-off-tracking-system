import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { setSelectedDayRange } from '../../actions/calendarActions';

const RequestForm = () => {
  const dispatch = useDispatch();
  const selectedDayRange = useSelector((state) => state.calendar.range);
  console.log(selectedDayRange);
  return <div>Reaues form</div>;
};

export default RequestForm;
