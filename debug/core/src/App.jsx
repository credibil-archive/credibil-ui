import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Issue from '@/Issue';
import Present from '@/Present';

const App = () => {
    const [view, setView] = useState();

    return (
        <>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', my: 4 }}>
                <Button variant="contained" onClick={() => setView('issue')}>
                    Issue
                </Button>
                <Button variant="contained" onClick={() => setView('present')}>
                    Present
                </Button>
            </Stack>
            {view === 'issue' && <Issue />}
            {view === 'present' && <Present />}
            {!view &&
                <Typography sx={{ textAlign: 'center', mt: 2 }} gutterBottom variant='h4'>
                    Select option to test
                </Typography>
            }
        </>
    )
};

export default App;
