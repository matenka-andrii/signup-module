// Core
import { Map } from 'immutable';

// Instruments
import { types } from './types';

const initialState = Map({
    step: 1,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_STEP_STATE:
            return state.set('step', action.payload);

        default:
            return state;
    }
};
