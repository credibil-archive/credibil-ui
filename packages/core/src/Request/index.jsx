import * as React from 'react';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import QRDisplayer from './QRDisplayer';
import { useRequest } from './useRequest';

export const Request = (props) => {
    const { endpoint, vcType, claims, onStatusChange } = props;
    // const [claims] = useState(props.claims);
    const [qrCode, setQRCode] = useState();
    const { getQRCode, status } = useRequest(endpoint);

    useEffect(() => {
        if (!qrCode) {
            (async () => {
                // console.log('getQRCode');
                setQRCode(await getQRCode({ type: vcType, claims: claims }));
            })();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [qrCode, getQRCode, vcType]);

    useEffect(() => {
        onStatusChange && onStatusChange(status);
        // onStatusChange function change shouldn't trigger hook
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    return (
        <QRDisplayer qrCode={qrCode} status={status} />
    );
}
Request.propTypes = {
    endpoint: PropTypes.string.isRequired,
    vcType: PropTypes.string.isRequired,
    claims: PropTypes.object,
    onStatusChange: PropTypes.func,
}

export default Request;

export * from './useRequest';
export * from './QRDisplayer';