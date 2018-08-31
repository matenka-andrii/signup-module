// Core
import React, { Fragment } from 'react';
import { Field, Fields, reduxForm } from 'redux-form';

// Instruments
import Styles from './styles.scss';

const validate = (values) => {
    const errors = {};
    const isDate = (str) => {
        const parms = str.split('/');
        const yyyy = parseInt(parms[2], 10);
        const mm   = parseInt(parms[1], 10);
        const dd   = parseInt(parms[0], 10);
        const date = new Date(yyyy, mm-1, dd, 0, 0, 0, 0);

        return mm === (date.getMonth()+1) && dd === date.getDate() && yyyy === date.getFullYear();
    };

    if (typeof values.year !== 'undefined' && values.year.length < 4) {
        errors.year = 'Date is invalid';
    }
    if (typeof values.year === 'undefined' || !isDate(`${values.day}/${values.month}/${values.year}`)) {
        errors.year = 'Date is invalid';
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

const FormTwo = (props) => {
    const { handleSubmit, submitting, handleBackOnClick } = props;

    return (
        <form onSubmit = { handleSubmit }>
            <div className = { Styles.form }>
                <Fields
                    component = { renderFields }
                    names = { ['day', 'month', 'year'] }
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
