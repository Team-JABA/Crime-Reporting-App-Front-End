import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
	TextField,
	Button,
	Paper,
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Box,
	Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { useAuth0 } from '@auth0/auth0-react';
import Address from './Address';
import  {MapContext}  from '../../context/map';

const useStyles = makeStyles({
	boxContainer: {
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
		alignItems: 'center',
		backgroundColor: 'lightgray',
		width: '50%',
		height: '75%',
		borderRadius: 10,
		flexDirection: 'column',
	},
	form: {
		marginTop: '10px',
		marginBottom: '10px',
		width: '80%',
		height: '60%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	incident: {
		width: '100%',
		marginBottom: '10px',
	},
	description: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '10px',
		width: '100%',
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
	},
});

export default function ReportCrime() {
	const { user } = useAuth0();
	const classes = useStyles();
	const MapValues = useContext(MapContext);

	const date = new Date();
	const [month, day, year] = [
		date.getMonth(),
		date.getDate(),
		date.getFullYear(),
	];
	const [hour, minutes, seconds] = [
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
	];

	const zuluDate = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;

	const defaultValues = {
		userName: user.name,
		incidentOffense: '',
		incidentLat: '',
		incidentLon: '',
		incidentDate: zuluDate,
		incidentOffenseDescription: '',
	};

	const [formValues, setFormValues] = useState(defaultValues);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const convertAddress = async (address) => {
		setFormValues({
			...formValues,
			incidentLat: address.data.lat.toString().slice(0, 7),
			incidentLon: address.data.lng.toString().slice(0, 7),
		});
	};



	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post(
			`${process.env.REACT_APP_API}/incident`,
			formValues,
		);
		MapValues.setIncidentReport(
		[...MapValues.incidentReport,
		formValues]
		)

		setFormValues({
			...defaultValues,
		});
	};

	return (
		<Box className={classes.boxContainer}>
			<Paper className={classes.paperContainer}>
				<Typography>REPORT A CRIME</Typography>
				<Grid className={classes.form}>
					<form onSubmit={onSubmit}>
						<Grid className={classes.incident}>
							<Grid item>
								<FormControl fullWidth>
									<InputLabel id='demo-simple-select-label'>
										Incident Type
									</InputLabel>
									<Select
										name='incidentOffense'
										value={formValues.incidentOffense}
										label='Incident Type'
										onChange={handleChange}
									>
										<MenuItem value={'DUI'}>DUI</MenuItem>
										<MenuItem value={'ASSUALT'}>ASSUALT</MenuItem>
										<MenuItem value={'ROBBERY'}>ROBBERY</MenuItem>
										<MenuItem value={'BURGLARY'}>BURGLARY</MenuItem>
										<MenuItem value={'VANDALISM'}>VANDALISM</MenuItem>
										<MenuItem value={'KIDNAPPING'}>KIDNAPPING</MenuItem>
										<MenuItem value={'VEHICLE-THEFT'}>VEHICLE-THEFT</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
						<Grid item>
							<Address convertAddress={convertAddress} />
						</Grid>
						<Grid className={classes.description}>
							<Grid item>
								<TextField
									name='incidentOffenseDescription'
									value={formValues.incidentOffenseDescription}
									id='outlined-multiline-static'
									label='Incident Description'
									multiline
									rows={4}
									onChange={handleChange}
								/>
							</Grid>
						</Grid>
						<Grid item className={classes.button}>
							<Button type='submit' color='success' variant='contained'>
								Submit
							</Button>
						</Grid>
					</form>
				</Grid>
			</Paper>
		</Box>
	);
}

