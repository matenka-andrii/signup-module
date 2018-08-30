// Instruments
import { types } from './types';

export const signupActions = Object.freeze({
    setStepState: (step) => ({
        type:    types.SET_STEP_STATE,
        payload: step,
    }),
    setEmailState: (email) => ({
        type:    types.SET_EMAIL_STATE,
        payload: email,
    }),
    setPasswordState: (pass) => ({
        type:    types.SET_PASSWORD_STATE,
        payload: pass,
    }),
    setConfirmPasswordState: (pass) => ({
        type:    types.SET_CONFIRM_PASSWORD_STATE,
        payload: pass,
    }),
});
