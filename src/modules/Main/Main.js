import React from 'react';
import Map from '../Map/Map';
import { Grid } from '@mui/material';
import Profile from '../Profile/Profile';
import ReportCrime from '../ReportCrime/reportCrime';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import { useAuth0 } from '@auth0/auth0-react';

export default function Main() {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		<Grid
			container
			spacing={2}
			justifyContent={'space-between'}
			height={'100%'}
		>
			<Grid item xs={5}>
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
