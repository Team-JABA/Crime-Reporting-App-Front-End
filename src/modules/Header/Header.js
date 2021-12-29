import React from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutButton from '../Buttons/Logout';
import LoginButton from '../Buttons/Login';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function Header() {
	const pages = ['Home', 'CrimeList'];
	const settingsLogout = ['Profile', 'Dashboard', <LogoutButton />];
	const settingsLogin = ['Profile', 'Dashboard', <LoginButton />];
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		<AppBar position='static'>
			<Container maxWidth='false'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						Canary
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						Canary
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Link to={`/${page}`}>
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page}
								</Button>
							</Link>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								{!isAuthenticated ? (
									<Avatar alt='' />
								) : (
									<Avatar alt={user.name} src={user.picture} />
								)}
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{!isAuthenticated
								? settingsLogin.map((setting) => (
										<MenuItem key={setting} onClick={handleCloseNavMenu}>
											<Link to={`/${setting}`}>
												<Typography textAlign='center'>{setting}</Typography>
											</Link>
										</MenuItem>
								  ))
								: settingsLogout.map((setting) => (
										<MenuItem key={setting} onClick={handleCloseNavMenu}>
											<Link to={`/${setting}`}>
												<Typography textAlign='center'>{setting}</Typography>
											</Link>
										</MenuItem>
								  ))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Header;

// need to get Nav Links installed here so we can link to different pages in the application.
//I.E the profile, ReportCrime Page and the CrimeList Page
