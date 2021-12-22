import React from 'react';
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/lab';
import { TextField, TextareaAutosize } from '@mui/material';

export default function ReportCrime() {
	return (
		<>
			<LocalizationProvider>
				<DatePicker
					label='Incedent Date'
					renderInput={(params) => <TextField {...params} />}
				/>
				<TimePicker
					label='Incedent Time'
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

/// This file needs to be reworked. -> Not compiling right;
