import * as React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright=()=> {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" variant="body2" underline="hover" href="https://credibil.io">
                {`${import.meta.env.VITE_APP_NAME} SSI`}
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export  const Footer=() =>{
    return (
        <Box display="flex" component="footer" justifyContent="center"
            sx={{ py: 3, px: 2, mt: 'auto', ml: 'auto', mr: 'auto' }}
        >
            <Copyright />
        </Box >
    );
}

export default Footer;