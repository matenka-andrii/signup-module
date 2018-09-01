// Core
import React, { Fragment } from 'react';

// Instruments
import Styles from './styles.scss';

const Input = ({ input, label, type, meta: { touched, error }}) => (
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

export default Input;
