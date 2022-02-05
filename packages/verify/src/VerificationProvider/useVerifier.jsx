import { useCallback, useContext, useMemo } from 'react';

import { VerificationContext } from '.';

export const useVerifier = () => {
    const context = useContext(VerificationContext);
    if (context.state === undefined) {
        throw new Error("useVerifier should only be used within the scope of VerificationProvider")
    }
    const { state, dispatch } = context;

    const getAccessToken = useCallback(async () => {
        return state.accessToken;
    }, [state.accessToken]);

    const logout = useCallback(async () => {
        dispatch({ type: 'logout' });
    }, [dispatch]);

    const actions = useMemo(() => {
        return { logout, getAccessToken };
    }, [logout, getAccessToken]);

    return [state, actions];
};