// Core
import React, { Fragment } from 'react';

// Instruments
import Styles from './styles.scss';

const DateFields = (fields) => (
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

export default DateFields;
