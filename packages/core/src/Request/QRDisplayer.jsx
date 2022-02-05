import * as React from 'react';

import DoneIcon from '@mui/icons-material/Done';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import { statuses } from './useRequest';

export const QRDisplayer = (props) => {
    const { qrCode, status, components = {} } = props;
    const { Retrieved = DefRetrieved, Succeeded = DefSucceeded, Expired = DefExpired, Errored = DefErrored } = components;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
            <Box sx={{ position: 'relative' }}>
                {qrCode
                    ? <img src={qrCode} alt="scan to verifiy" />
                    : <QRSkeleton />
                }

                {/* QR code overlay */}
                {!(status === statuses.requested || status === statuses.awaiting) &&
                    <Box sx={{ width: 256, height: 256, position: 'absolute', top: 0, left: 0, background: 'rgba(255,255,255, 0.8)' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            {status === statuses.retrieved && <Retrieved />}
                            {status === statuses.succeeded && <Succeeded />}
                            {status === statuses.expired && <Expired />}
                            {status === statuses.errored && <Errored />}
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
    );
}
QRDisplayer.propTypes = {
    qrCode: PropTypes.string,
    status: PropTypes.string.isRequired,
    components: PropTypes.shape({
        retrieved: PropTypes.element,
        succeeded: PropTypes.element,
        expired: PropTypes.element,
        errored: PropTypes.element,
    }),
    onStatusChange: PropTypes.func,
}

export default QRDisplayer;

const QRSkeleton = () => {
    return (
        <Box sx={{ width: 240, height: 240, position: 'relative', mt: 3 }}>
            <Skeleton animation="wave" variant="square" width={40} height={40} sx={{ top: 0, left: 0 }} />
            <Skeleton animation="wave" variant="square" width={40} height={40} sx={{ position: 'absolute', top: 0, right: 0 }} />
            <Skeleton animation="wave" variant="square" width={40} height={40} sx={{ position: 'absolute', bottom: 0, left: 0 }} />
            <Skeleton animation="wave" variant="square" width={220} height={220} sx={{ position: 'absolute', top: 10, left: 10 }} />
        </Box>
    );
}

const DefRetrieved = () => {
    return (
        <CircularProgress />
    );
}

const DefSucceeded = () => {
    return (
        <DoneIcon color="success" sx={{ fontSize: 80 }} />
    );
}

const DefExpired = () => {
    return (
        <Dialog open={true} maxWidth="sm">
            <Stack
                sx={{ mx: 2, my: 4 }}
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Typography>
                    Your code has expired. Please try again.
                </Typography>
                <Button variant="contained" onClick={() => window.location.reload(true)}>
                    Retry
                </Button>
            </Stack>
        </Dialog>
    );
}

const DefErrored = () => {
    return (
        <Dialog open={true} maxWidth="sm">
            <Stack
                sx={{ mx: 2, my: 4 }}
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Typography>
                    An error has occurred while processing your request.
                </Typography>
                <Button variant="contained" onClick={() => window.location.reload(true)}>
                    Close
                </Button>
            </Stack>
        </Dialog>
    );
}