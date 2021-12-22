import React from 'react';
import {
	DatePicker,
	TimePicker,
	AdapterDateFns,
	LocalizationProvider,
} from '@mui/lab';
import { TextField, TextareaAutosize } from '@mui/material';

export default function ReportCrime() {
	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
					label='Incedent Date'
					value={value}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
				<TimePicker
					label='Incedent Time'
					value={value}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
				<TextareaAutosize
					aria-label='empty textarea'
					placeholder='Empty'
					style={{ width: 200 }}
				/>
			</LocalizationProvider>
		</>
	);
}
