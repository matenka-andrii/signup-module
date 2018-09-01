// Core
import React from 'react';
import { Field, Fields, reduxForm } from 'redux-form';

// Instruments
import Styles from './styles.scss';
import DateFields from '../Date';
import Radio from '../Radio';
import Select from '../Select';

const validate = (values) => {
    const errors = {};
    const birth = `${values.month}/${values.day}/${values.year}`;
    const isDate = (str) => {
        const parms = str.split('/');
        const yyyy = parseInt(parms[2], 10);
        const mm   = parseInt(parms[1], 10);
        const dd   = parseInt(parms[0], 10);
        const date = new Date(yyyy, mm-1, dd, 0, 0, 0, 0);

        return mm === date.getMonth() + 1 && dd === date.getDate() && yyyy === date.getFullYear();
    };
    const getAge = (dateString) => {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age -= 1;
        }

        return age;
    };

    if (typeof values.year !== 'undefined' && values.year.length < 4) {
        errors.year = 'Date is invalid';
    }
    if (typeof values.year === 'undefined' || !isDate(`${values.day}/${values.month}/${values.year}`) || getAge(birth) < 0) {
        errors.year = 'Date is invalid';
    } else if (getAge(birth) < 18) {
        errors.year = 'Sorry, you must be at least 18 years old';
    }
    if (!values.gender) {
        errors.gender = 'Gender is required';
    }

    return errors;
};

const FormTwo = (props) => {
    const { handleSubmit, submitting, handleBackOnClick } = props;

    return (
        <form onSubmit = { handleSubmit }>
            <div className = { Styles.form }>
                <Fields
                    component = { DateFields }
                    names = { ['day', 'month', 'year'] }
                />
                <Field
                    component = { Radio }
                    label = 'Gender'
                    name = 'gender'
                    options = { {
                        male:        'Male',
                        female:      'Female',
                        unspecified: 'Unspecified',
                    } }
                />
                <Field
                    component = { Select }
                    label = 'Where did you hear about is?'
                    name = 'how_hear_about_us'
                    options = { {
                        radio:   'Radio',
                        tv:      'TV',
                        outdoor: 'Outdoor',
                        friend:  'From a Friend',
                    } }
                />
            </div>
            <div className = { Styles.footer }>
                <span
                    className = { Styles.back }
                    onClick = { handleBackOnClick }>
                    Back
                </span>
                <button
                    className = { Styles.next }
                    disabled = { submitting }
                    type = 'submit'>
                    Next <i />
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form:                     'signup',
    destroyOnUnmount:         false,
    forceUnregisterOnUnmount: true,
    validate,
})(FormTwo);
