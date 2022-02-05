import { useCallback, useState } from 'react';

// add validator to check if undefined property is accessed
const validator = {
    get: (target, prop, receiver) => {
        if (prop in target) {
            return Reflect.get(target, prop, receiver);
        }
        throw new Error(`statuses.${prop} not defined`);
    }
};
export const statuses = new Proxy({
    requested: 'requested',
    awaiting: 'awaiting',
    retrieved: 'retrieved',
    succeeded: 'succeeded',
    failed: 'failed',
    expired: 'expired',
    errored: 'errored',
}, validator);

const check = { maxCount: 40, interval: 3000 };

export const useRequest = (endpoint) => {
    const [status, setStatus] = useState(statuses.requested);
    const [qrCode, setQRCode] = useState();
    const [payload, setPayload] = useState();
    let checkCount = 0;

    // check for status of issuance or presentation
    const checkStatus = useCallback(async (stateId) => {
        const request = new Request(`${endpoint}/status/${stateId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        try {
            const rsp = await fetch(request);
            const json = await rsp.json();
            // check for success
            console.log(json.code)
            switch (json.code) {
                case 'awaiting_issuance':
                case 'awaiting_presentation':
                    setStatus(statuses.awaiting);
                    break;
                case 'request_retrieved':
                    setStatus(statuses.retrieved);
                    break;
                case 'issuance_successful':
                    case 'presentation_verified':
                    setStatus(statuses.succeeded);
                    setPayload({ subject: "", payload: json.payload });
                    return;
                case 'issuance_failed':
                case 'presentation_failed':
                    setStatus(statuses.failed);
                    return;
                default:
                    throw new Error(`Unknown status ${json.code} returned`);
            }

            // check whether exceeded the max number of checks
            if (checkCount++ >= check.maxCount) {
                setStatus(statuses.expired);
                return;
            }

            // wait specified interval before checking again
            setTimeout(() => checkStatus(stateId), check.interval);
        } catch (error) {
            setStatus(statuses.errored);
            console.error(error);
        }
    }, [endpoint, checkCount]);

    // get QR code for issuance or presentation
    const getQRCode = useCallback(async (data) => {
        const request = new Request(endpoint, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        try {
            const rsp = await fetch(request);
            const json = await rsp.json();
            checkStatus(json.state);
            setQRCode(json.qrCode);
            return json.qrCode;
        } catch (error) {
            setStatus(statuses.errored);
            console.error(error);
        }
    }, [endpoint, checkStatus]);

    return { getQRCode, qrCode, status, payload };
};