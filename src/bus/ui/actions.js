// Instruments
import { types } from './types';

export const uiActions = Object.freeze({
    setStepState: (step) => ({
        type:    types.SET_STEP_STATE,
        payload: step,
    }),
});
