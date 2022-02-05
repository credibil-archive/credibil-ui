import React, { createContext, useContext, useReducer } from 'react';

import PropTypes from 'prop-types';

import { Verifier } from './Verifier';

const reducer = (state, action) => {
    switch (action.type) {
        case 'init':
            return { ...state };
        case 'accessToken':
            if (action.payload) {
                state.user = { sub: '<user subject>' }; //{ sub: action.payload.subject };
                state.accessToken = action.payload.payload;
                localStorage.setItem('token', JSON.stringify({
                    user: state.user,
                    accessToken: state.accessToken
                }));
            }
            return { ...state };
        case 'logout':
            state.user = null;
            state.accessToken = null;
            localStorage.removeItem('token');
            return { ...state };
        case 'error':
            console.error(action.payload);
            return { ...state, error: action.payload };
        default:
            throw new Error('Unknown action type in reducer');
    }
};

const initialState = {
    verifier: "",
    vcType: "",
    user: null,
    accessToken: null,
    error: null,
};

export const VerificationContext = createContext(initialState);

export const VerificationProvider = (props) => {
    const { verifier, vcType, children } = props;
    initialState.verifier = verifier;
    initialState.vcType = vcType;

    // check for cached token
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        initialState.accessToken = token;
        initialState.user = token.user;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <VerificationContext.Provider value={{ state, dispatch }}>
            {children}
        </VerificationContext.Provider>
    );
};
VerificationProvider.propTypes = {
    verifier: PropTypes.string.isRequired,
    vcType: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

// check user has claims for route
export const withCredential = (Component) => {

    // create psuedo component in order to use hooks
    const WithAuth = () => {
        const context = useContext(VerificationContext);
        if (context.state === undefined) {
            throw new Error("withCredential is not within the scope of VerificationProvider")
        }
        const { state, dispatch } = context;

        const handlePayload = (payload) => {
            dispatch({ type: 'accessToken', payload: payload });
        }

        return (
            state.accessToken
                ? <Component />
                : <Verifier endpoint={`${state.verifier}/presentation`} vcType={state.vcType} onPayload={handlePayload} />
        );
    }

    return WithAuth;
}

// const hasClaims = (claims) => {
//     console.log("hasClaims claims", claims);
//     return true;
// }

export default VerificationProvider;
export { useVerifier } from './useVerifier';