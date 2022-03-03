import * as React from 'react';

import FingerprintIcon from '@mui/icons-material/Fingerprint';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

// import LogoIcon from './CredibilIcon';

export const Header = ({ open, onClick }) => {
    return (
        <AppBar elevation={1} position="static" sx={{ padding: 1, }} color="transparent" data-cy="header">
            <MuiAppBar position="fixed" open={open}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mx: 4, height: '4rem' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={onClick}
                        edge="start"
                        sx={{ marginRight: 40, mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link href="/" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <FingerprintIcon alt="" sx={{ color: '#ffffff' }} />
                    </Link>
                    <Link underline="none" sx={{ display: 'flex', '& svg': { fontSize: '3rem' }, flexGrow: 1 }} href="/">
                        <Typography color="#fff" variant="h4">{import.meta.env.VITE_APP_NAME} SSI</Typography>
                    </Link>
                </Toolbar>
            </MuiAppBar>
        </AppBar >
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Header;
