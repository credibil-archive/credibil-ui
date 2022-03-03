import * as React from 'react';

import { withCredential } from '@credibil/auth';

import Home from '@/Home';

const App = withCredential(() => {
    return (
        <Home />
    )
});

export default App;
