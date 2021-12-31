import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';

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

function Address(props) {
	const classes = useStyles();
	const [address, setAddress] = useState('');

	const handleSubmit = async () => {
		console.log('address submit');
		console.log(address.value);
		if (!address.value) {
			alert('Enter Valid Address');
		}
		try {
			let updatedAddress = await axios.get(
				`https://isnitch-team-jaba.herokuapp.com/api/address/?address=${address.value}`,
			);
			props.convertAddress(updatedAddress);
		} catch (e) {
			new Error('no valid address', e);
		}
	};

	const handleAddress = (e) => {
		const { value } = e.target;
		console.log(value);
		setAddress({
			value,
		});
		console.log(address);
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

export default Address;
