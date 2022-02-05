import React, { useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import { QRDisplayer, statuses } from '@/components/Credential';
import { useRequest } from '@/components/Credential';

export const Verifier = (props) => {
    const { endpoint, vcType, onPayload } = props;
    const { getQRCode, qrCode, status, payload } = useRequest(endpoint);

    useEffect(() => {
        if (!qrCode) {
            getQRCode({ type: vcType });
        }
    }, [getQRCode, qrCode, vcType]);

    useEffect(() => {
        payload && onPayload(payload);
    }, [payload, onPayload]);

    return (
        <Dialog open={true} maxWidth="sm">
            <Stack
                sx={{ mx: 2, my: 4 }}
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <QRDisplayer qrCode={qrCode} status={status} />
                <Typography variant='h5'>Scan to login</Typography>
                <Typography variant='caption'>
                    {status === statuses.requested && 'New QR code requested'}
                    {status === statuses.awaiting && 'Waiting for you to scan...'}
                    {status === statuses.retrieved && 'Processing...'}
                    {status === statuses.succeeded && 'Congratulations! You are authenticated.'}
                </Typography>
            </Stack>
        </Dialog>
    );
}
Verifier.propTypes = {
    endpoint: PropTypes.string.isRequired,
    vcType: PropTypes.string.isRequired,
    onPayload: PropTypes.func.isRequired,
}