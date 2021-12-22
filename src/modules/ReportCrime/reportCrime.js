import React from 'react';
import ReactDOM from 'react-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider'; 

<LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="Incedent Date"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
   <TimePicker
    label="Incedent Time"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
  <TextareaAutosize
    aria-label="empty textarea"
    placeholder="Empty"
    style={{ width: 200 }}
  />
</LocalizationProvider>