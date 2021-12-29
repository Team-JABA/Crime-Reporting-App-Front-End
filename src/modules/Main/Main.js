import React from 'react';
import Map from '../Map/Map';
import Profile from '../Profile/Profile';
import ReportCrime from '../ReportCrime/ReportCrime';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import { useAuth0 } from '@auth0/auth0-react';
import { Grid } from '@mui/material';

export default function Main() {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		<Grid container spacing={5} justifyContent={'space-around'} height={'100%'}>
			<Grid
				item
				xs={5}
				sx={{
					marginTop: '10px',
				}}
			>
				<Routes>
					<Route
						path='/'
						element={isAuthenticated ? <ReportCrime /> : <Login />}
					/>
					<Route
						path='/Home'
						element={isAuthenticated ? <ReportCrime /> : <Login />}
					/>
					<Route
						path='/CrimeList'
						element={<h1>CrimeList Component Goes Here</h1>}
					/>
					<Route path='/Profile' element={<Profile />} />
				</Routes>
			</Grid>
			<Grid item>
				<Map />
			</Grid>
		</Grid>
	);
}
