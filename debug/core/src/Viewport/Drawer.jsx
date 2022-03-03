import * as React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const drawerWidth = 240;
const mainMenu = [
    { title: 'Request Credential', icon: <PersonAddIcon />, action: "/" },
    { title: 'Insights', icon: <InboxIcon /> },
    // { title: 'Transactions', icon: <AttachMoneyIcon /> }
];

const Header = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const DrawerHeader = ({ children }) => {
    return (
        <Header>
            {children}
        </Header>
    );
}
DrawerHeader.propTypes = {
    children: PropTypes.node,
}

export const Drawer = ({ open, onClick }) => {

    const handleClick = (action) => {
        if (typeof (action) === 'string') {
            // navigate(action)
            window.location.href = action;
        } else {
            action();
        }
    }

    return (
        <MuiDrawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={onClick}>
                    <ChevronLeftIcon />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {mainMenu.map((item) =>
                    <ListItem key={item.title} button onClick={() => handleClick(item.action)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                )}
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Log out" />
                </ListItem>
            </List>
        </MuiDrawer>
    );
}
Drawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Drawer;