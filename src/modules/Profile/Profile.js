import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Switch,
} from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';

export default function Profile() {
	const { user, isAuthenticated, isLoading } = useAuth0();

	const [checked, setChecked] = React.useState(['wifi']);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<List
			sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
			subheader={<ListSubheader>Settings</ListSubheader>}
		>
			<ListItem>
				<ListItemIcon>
					<WifiIcon />
				</ListItemIcon>
				<ListItemText id='switch-list-label-wifi' primary='Wi-Fi' />
				<Switch
					edge='end'
					onChange={handleToggle('wifi')}
					checked={checked.indexOf('wifi') !== -1}
					inputProps={{
						'aria-labelledby': 'switch-list-label-wifi',
					}}
				/>
			</ListItem>
			<ListItem>
				<ListItemIcon>
					<BluetoothIcon />
				</ListItemIcon>
				<ListItemText id='switch-list-label-bluetooth' primary='Bluetooth' />
				<Switch
					edge='end'
					onChange={handleToggle('bluetooth')}
					checked={checked.indexOf('bluetooth') !== -1}
					inputProps={{
						'aria-labelledby': 'switch-list-label-bluetooth',
					}}
				/>
			</ListItem>
		</List>
	);
}

// SImple profile section to display user information taken from Auth0

//Ive imported what is needed from Auth0 to reference the user information. Here Id simply like a small form that can update the state of the user map to display the home city of the user. This way when they open up the map for their user profiel the map is auto-targeted to their specific area of choice.
// This will require a form that does a backend api POST to the data base to update user location. There is a google-GeoCode API that can convert addresses to Lat: Lng: values which is what we need to store the data as in the DB in order to access this from the Map component.
