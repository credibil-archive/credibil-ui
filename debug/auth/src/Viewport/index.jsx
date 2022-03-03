import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import Drawer, { DrawerHeader } from './Drawer';
import Footer from './Footer';
import Header from './Header';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: `${drawerWidth}px`
        }),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3, 0),
        },
    }),
);

export const Viewport = ({ children }) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}
        >
            <Header open={open} onClick={handleDrawerOpen} />
            <Drawer open={open} onClick={handleDrawerClose} />
            <Main open={open}>
                <DrawerHeader />
                <Container maxWidth="md">
                    {children}
                </Container>
            </Main>
            <Footer />
        </Box>
    );
}

export default Viewport;

Viewport.propTypes = {
    children: PropTypes.node.isRequired,
}