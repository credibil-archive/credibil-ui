import { useCallback, useContext, useMemo } from 'react';

import { AuthContext } from '.';

export const useVerifier = () => {
    const context = useContext(AuthContext);
    if (context.state === undefined) {
        throw new Error("useVerifier should only be used within the scope of AuthContext")
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