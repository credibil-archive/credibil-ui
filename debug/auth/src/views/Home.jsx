import * as React from 'react';

import Typography from '@mui/material/Typography';

export const Home = () => {
    return (
        <>
            <Typography variant="h1">
                Home
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Boom! You have successfully logged in.
            </Typography>
        </>
    );
}

export default Home;