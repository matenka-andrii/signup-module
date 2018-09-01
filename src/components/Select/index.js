// Core
import React, { Fragment } from 'react';

// Instruments
import Styles from './styles.scss';

const Select = (props) => {
    const renderSelectOptions = (key, index) => (
        <option
            key = { `${index}-${key}` }
            value = { key }>
            { props.options[key] }
        </option>
    );

    if (props && props.options) {

        return (
            <Fragment>
                <label>{ props.label }</label>
                <select { ...props.input } className = { Styles.select }>
                    <option />
                    { Object.keys(props.options).map(renderSelectOptions) }
                </select>
            </Fragment>
        );
    }

    return <div />;
};

export default Select;
