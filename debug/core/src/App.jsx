import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@/theme';
import Viewport from '@/Viewport';
import Home from '@/views/Home';


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Viewport>
                <Home />
            </Viewport>
        </ThemeProvider>
    )
};

export default App;
