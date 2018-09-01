// Core
import React, { Fragment } from 'react';
import { Field, Fields, reduxForm } from 'redux-form';

// Instruments
import Styles from './styles.scss';

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
            age--;
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

    return errors;
};

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error },
}) => (
    <Fragment>
        <label className = { touched && error ? Styles.error : '' }>
            {
                touched && error
                    ? error
                    : label
            }
        </label>
        <input { ...input } type = { type } />
    </Fragment>
);

const renderFields = (fields) => {
    console.log(fields);

    return (
        <Fragment>
            <label
                className = {
                    fields.year.meta.touched && fields.year.meta.error
                        ? Styles.error
                        : ''
                }>
                {
                    fields.year.meta.touched && fields.year.meta.error
                        ? fields.year.meta.error
                        : 'Date of Birth'
                }
            </label>
            <div className = { Styles.date }>
                <input
                    min = '1'
                    placeholder = 'DD'
                    type = 'number'
                    { ...fields.day.input }
                />
                <input
                    max = '12'
                    min = '1'
                    placeholder = 'MM'
                    type = 'number'
                    { ...fields.month.input }
                />
                <input
                    placeholder = 'YYYY'
                    type = 'number'
                    { ...fields.year.input }
                />
            </div>
        </Fragment>
    );
};

const renderRadio = (fields) => {
    return (
        <Fragment>
            <label
                className = {
                    fields.gender.meta.error
                        ? Styles.error
                        : ''
                }>
                {
                    fields.gender.meta.error
                        ? fields.gender.meta.error
                        : 'Gender'
                }
            </label>
            <div className = { Styles.gender }>
                <label>

                </label>
                <input
                    type = 'radio'
                    //value = 'male'
                    { ...fields.gender.input }
                />
                <input
                    type = 'radio'
                    //value = 'female'
                    { ...fields.gender.input }
                />
                <input
                    type = 'radio'
                    //value = 'unspecified'
                    { ...fields.gender.input }
                />
            </div>
        </Fragment>
    );
};

const FormTwo = (props) => {
    const { handleSubmit, submitting, handleBackOnClick } = props;

    return (
        <form onSubmit = { handleSubmit }>
            <div className = { Styles.form }>
                <Fields
                    component = { renderFields }
                    names = { ['day', 'month', 'year'] }
                />
                <Fields
                    component = { renderRadio }
                    names = { ['gender'] }
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
