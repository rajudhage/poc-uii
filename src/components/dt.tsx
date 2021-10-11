import * as React from 'react';
import TextField, { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps } from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="start-date"
        endText="end-date"
        value={value}
        onChange={(newValue: React.SetStateAction<null[]>) => {
          setValue(newValue);
        }}
        renderInput={(startProps: (JSX.IntrinsicAttributes & StandardTextFieldProps) | (JSX.IntrinsicAttributes & FilledTextFieldProps) | (JSX.IntrinsicAttributes & OutlinedTextFieldProps), endProps: (JSX.IntrinsicAttributes & StandardTextFieldProps) | (JSX.IntrinsicAttributes & FilledTextFieldProps) | (JSX.IntrinsicAttributes & OutlinedTextFieldProps)) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}