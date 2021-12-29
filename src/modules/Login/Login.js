import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Buttons/Login';

const useStyles = makeStyles({
	rootContainer: {
		backgroundImage: 'url(https://source.unsplash.com/random/?neighborhood)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		width: '115%',
		height: '99%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		borderRadius: 10,
	},
	paperContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: 'lightgray',
		width: '50%',
		height: '25%',
		borderRadius: 10,
	},
});

export default function Login() {
	const classes = useStyles();
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	const handleSubmit = () => {};
	return (
		<Box className={classes.rootContainer}>
			<CssBaseline />
			<Box className={classes.paperContainer}>
				<Avatar>
					{!isAuthenticated ? (
						<Avatar alt='' />
					) : (
						<Avatar alt={user.name} src={user.picture} />
					)}
				</Avatar>
				<Typography component='h1' variant='h5'>
					Welcome to ISnitch! Please Sign-in
				</Typography>
				<Box
					component='form'
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1, backgroundColor: 'lightgray', width: '25%' }}
				>
					<LoginButton />
				</Box>
			</Box>
		</Box>
	);
}

// This component loads the Login Homepage

//	sx={{
// 	marginTop: 1.3,
// 	display: 'flex',
// 	flexDirection: 'column',
// 	alignItems: 'center',
// 	justifyContent: 'center',
// 	backgroundImage:
// 		'url(https://source.unsplash.com/random/?neighborhood)',
// 	backgroundRepeat: 'no-repeat',
// 	backgroundSize: 'cover',
// 	width: '92vh',
// 	height: '87vh',
// }}
