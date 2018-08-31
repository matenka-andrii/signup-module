// Core
import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';

// Instruments
import Styles from './styles.scss';

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be minimum 6 characters long';
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
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

const FormOne = (props) => {
    const { handleSubmit, submitting } = props;

    return (
        <form onSubmit = { handleSubmit }>
            <div className = { Styles.form }>
                <Field
                    component = { renderField }
                    label = 'Email'
                    name = 'email'
                    type = 'email'
                />
                <Field
                    component = { renderField }
                    label = 'Password'
                    name = 'password'
                    type = 'password'
                />
                <Field
                    component = { renderField }
                    label = 'Confirm Password'
                    name = 'confirmPassword'
                    type = 'password'
                />
            </div>
            <div className = { Styles.footer }>
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
})(FormOne);
