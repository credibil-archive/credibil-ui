import * as React from 'react';
import { useState } from 'react';

import { Request, statuses } from '@credibil/core';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const Present = () => {
    const [status, setStatus] = useState();

    return (
        <Card variant='outlined' sx={{ p: 4, width: '100%' }}>
            <Typography sx={{ my: 1, textAlign: 'center' }} variant="h2">
                Present Credential
            </Typography>
            <Typography sx={{ textAlign: 'center', mt: 2 }} gutterBottom variant='h4'>
                Scan to verify your credential
            </Typography>

            <Request
                endpoint={`${import.meta.env.VITE_ISSUER}/presentation`}
                vcType={import.meta.env.VITE_VC_TYPE}
                claims={{
                    "given_name": 'Jane',
                    "family_name": 'Doe',
                    "birth_date": '07-09-1999',
                }}
                onStatusChange={status => setStatus(status)}
            />

            <Typography sx={{ textAlign: 'center' }} variant='body2'>
                {status === statuses.requested && 'Waiting for you to scan...'}
                {status === statuses.retrieved && 'Processing request...'}
                {status === statuses.succeeded && 'Congratulations! You have a new credential.'}
            </Typography>
        </Card >
    )
}
export default Present;
