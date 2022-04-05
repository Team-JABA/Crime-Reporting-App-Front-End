import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Divider,
	Paper,
	Grid,
	Typography,
	Card,
	Button,
	CardContent,
	responsiveFontSizes,
	listItemIconClasses,
	Stack,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import ListComponent from './listComponent';
import Pagination from './Pagination';

const useStyles = makeStyles({
	boxContainer: {
		backgroundImage: 'url(https://source.unsplash.com/random/?neighborhood)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		width: '120%',
		height: '99%',
		margin: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	IncidentBox: {
		backgroundColor: 'pink',
		height: '90%',
		width: '90%',
	},
	incidentListContainer: {
		display: 'flex',
		backgroundColor: 'lightgray',
		width: '100%',
		height: 'auto',
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
	pagination: {
		display: 'flex',
		flexDirection: 'column',
		background: 'blue',
		justifyItems: 'top',
	},
	gridlistContainer: {
		background: 'yellow',
		display: 'flex',
		flexDirection: 'row',
	},
	gridCrimeContainer: {
		display: 'flex',
	},
});

export default function CrimeList() {
	const classes = useStyles();
	const { user } = useAuth0();
	const [crimeData, setCrimeData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostPerPage] = useState(12);

	useEffect(() => {
		setLoading(true);
		fetch(`${process.env.REACT_APP_API}/incident`)
			.then((response) => response.json())
			.then((data) => setCrimeData(...crimeData, data));
		setLoading(false);
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = crimeData.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<Box className={classes.boxContainer}>
			<Grid container className={classes.IncidentBox}>
				<Grid container>
					<Grid item md={5}>
						<ListComponent
							crimedata={currentPosts}
							loading={loading}
							classes={classes}
						/>
					</Grid>
					<Grid item md={1} className={classes.gridlistContainer}>
						<Pagination
							postsPerPage={postsPerPage}
							totalPosts={crimeData.length}
							classes={classes}
						/>
					</Grid>
				</Grid>
				<Grid container className={classes.gridCrimeContainer}>
					<Grid item md={5}>
						<Card>
							<CardContent>
								<Typography>Second Container</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

// This is where we need to display a Card for each crime the use has input via the ReportCrime Form. We will need to create a state to handle anytime this changes, Most likely a context that handles this globally. Anytime the use inputs a new crime, we need to add this to our crimes[] and map through that here, displaying each crime in its own seperate card. We will could also use a Hook to do a GET request to our db onload and pull all of the stores crimes associated to the user here.
