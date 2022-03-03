import * as React from 'react'

import AuthProvider from '@credibil/auth'
import ReactDOM from 'react-dom'

import App from '@/App'

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider
            verifier={import.meta.env.VITE_VERIFIER}
            vcType={import.meta.env.VITE_VC_TYPE}
        >
            <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
