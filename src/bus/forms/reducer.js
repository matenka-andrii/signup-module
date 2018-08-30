// Core
import { combineForms } from 'react-redux-form';

export const formsReducer = combineForms(
    {
        signup: {
            email:           '',
            password:        '',
            confirmPassword: '',
        },
    },
    'forms',
);
