import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';

import { FormField } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';

const DynamicDateInput = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => setFieldValue(field.name, value)}
      />
    </FormField>
  );
};

export default DynamicDateInput;
// {
//   meta.touched && meta.error ? (
//     <Label basic color="red">
//       {meta.error}
//     </Label>
//   ) : null;
// }
