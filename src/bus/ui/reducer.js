// Core
import { Map } from 'immutable';

// Instruments
import { types } from './types';

const initialState = Map({
    step: 1,
    // email: Map({
    //     value: '',
    //     valid: true,
    //     error: '',
    // }),
    // password: Map({
    //     value: '',
    //     valid: true,
    //     error: '',
    // }),
    // confirmPassword: Map({
    //     value: '',
    //     valid: true,
    //     error: '',
    // }),
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_STEP_STATE:
            return state.set('step', action.payload);
            // case types.SET_EMAIL_STATE:
            //     return state.setIn(['email', 'value'], action.payload);
            // case types.SET_PASSWORD_STATE:
            //     return state.setIn(['password', 'value'], action.payload);
            // case types.SET_CONFIRM_PASSWORD_STATE:
            //     return state.setIn(['confirmPassword', 'value'], action.payload);

        default:
            return state;
    }
};
