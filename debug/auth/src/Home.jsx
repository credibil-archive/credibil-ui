import * as React from 'react';

import { useVerifier } from '@credibil/auth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Home = () => {
    const [, actions] = useVerifier();

    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1">
                Home
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Boom! You have successfully logged in.
            </Typography>
            <Button variant="contained" onClick={() => actions.logout()}>
                Log out
            </Button>
        </Box>
    );
}

export default Home;