// Core
import React, { Fragment } from 'react';
import { Field } from 'redux-form';

// Instruments
import Styles from './styles.scss';

const Radio = (props) => {
    if (props && props.options) {
        const renderRadioButtons = (key, index) => (
            <Fragment
                key = { `${index}` } >
                <Field
                    component = 'input'
                    id = { `${props.input.name}-${index}` }
                    name = { props.input.name }
                    type = 'radio'
                    value = { key }
                />
                <label htmlFor = { `${props.input.name}-${index}` }>
                    <span>
                        { props.options[key] }
                    </span>
                </label>
            </Fragment>
        );

        return (
            <Fragment>
                <label
                    className = {
                        props.meta.touched && props.meta.error
                            ? Styles.error
                            : ''
                    }>
                    {
                        props.meta.touched && props.meta.error
                            ? props.meta.error
                            : props.label
                    }
                </label>
                <div className = { Styles.gender }>
                    { Object.keys(props.options).map(renderRadioButtons) }
                </div>
            </Fragment>
        );
    }

    return <div />;
};

export default Radio;
