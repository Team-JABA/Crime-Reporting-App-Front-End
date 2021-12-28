import React, { useState } from 'react';
import {
	TextField,
	Button,
	Paper,
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/system';
import axios from 'axios';

const useStyles = makeStyles({
	rootContainer: {
		backgroundImage: 'url(https://source.unsplash.com/random/?neighborhood)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		width: '110%',
		height: '99%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	paperContainer: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'lightgray',
		width: '50%',
		height: '75%',
		borderRadius: 10,
	},
	form: {
		marginTop: '10px',
	},
});

export default function ReportCrime() {
	const classes = useStyles();

	const defaultValues = {
		incident: '',
		address: '',
		time: '',
		city: '',
	};
	const [formValues, setFormValues] = useState(defaultValues);

	const handleChange = (e) => {
		console.log(e.target.value);
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
		console.log(formValues);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		let updatedAddress = await axios.get(
			`https://isnitch-team-jaba.herokuapp.com/?address=${formValues.address}`
		);
		console.log(updatedAddress);
		console.log(formValues);
	};

	return (
		<Box className={classes.rootContainer}>
			<Paper className={classes.paperContainer}>
				{/* <Typography component='h1' variant='h5'>
					Report A Crime
				</Typography> */}
				<form onSubmit={onSubmit}>
					<Grid className={classes.form}>
						<Grid item>
							<FormControl fullWidth>
								<InputLabel id='demo-simple-select-label'>
									Incident Type
								</InputLabel>
								<Select
									name='incident'
									value={formValues.incident}
									label='Incident Type'
									onChange={handleChange}
								>
									<MenuItem value={'90D'}>DUI</MenuItem>
									<MenuItem value={'13A'}>ASSUALT</MenuItem>
									<MenuItem value={'120'}>ROBBERY</MenuItem>
									<MenuItem value={'220'}>BURGLARY</MenuItem>
									<MenuItem value={'290'}>VANDALISM</MenuItem>
									<MenuItem value={'100'}>KIDNAPPING</MenuItem>
									<MenuItem value={'240'}>VEHICLE-THEFT</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item>
							<TextField
								id='name-input'
								name='address'
								label='Address'
								type='text'
								value={formValues.name}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Button type='submit'>Submit</Button>
				</form>
			</Paper>
		</Box>
	);
}

/// This file needs to be reworked. -> Not compiling right;
