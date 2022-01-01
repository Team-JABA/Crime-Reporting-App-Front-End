import React, { useState, useContext } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import  { MapContext }  from '../../context/map';


const useStyles = makeStyles({
	paperContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 10,
		marginRight: '10px',
		width: '100%',
		marginBottom: '10px',
	},
	button: {
		height: '50%',
		width: '100px',
	},
});

function Location(props) {
	const classes = useStyles();
	const [address, setAddress] = useState('');
	const MapValues = useContext(MapContext);


	const handleSubmit = async () => {
		if (!address.value) {
			alert('Enter Valid Address');
		}
		try {
			let latlngAddress = await axios.get(
				`${process.env.REACT_APP_API}/api/address/?address=${address.value}`,
			);

			MapValues.setLocation({
				lat: latlngAddress.data.lat,
				lng: latlngAddress.data.lng,
			});

			let userLocation = `${latlngAddress.data.lat}, ${latlngAddress.data.lng}`;
			props.handleSaveUser(userLocation);
		} catch (e) {
			new Error('no valid address', e);
		}
	};

	const handleAddress = (e) => {
		const { value } = e.target;

		setAddress({
			value,
		});
	};

	return (
		<Box className={classes.paperContainer}>
			<TextField
				id='name-input'
				name='address'
				label='Address'
				type='text'
				onChange={handleAddress}
			/>
			<Button
				color='primary'
				variant='contained'
				className={classes.button}
				type='button'
				onClick={() => {
					handleSubmit();
				}}
			>
				Save
			</Button>
		</Box>
	);
}

export default Location;
