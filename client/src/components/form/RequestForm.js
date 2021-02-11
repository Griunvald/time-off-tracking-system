import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

const RequestForm = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  return (
    <DatePicker
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      inputPlaceholder="Select a day range"
      shouldHighlightWeekends
    />
  );
};

export default RequestForm;
