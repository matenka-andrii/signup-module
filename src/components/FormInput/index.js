// Core
import React, { Component, Fragment } from 'react';
//import cx from 'classnames';

// Instruments
//import Styles from './styles.scss';

export default class FormInput extends Component {
    _handleInputChange = ({ target }) => {
        const { handleOnChange } = this.props;

        handleOnChange(target.value);
    };

    render () {
        const { id, label, type } = this.props;

        console.log(this.props);

        return (
            <Fragment>
                <label
                    htmlFor = { id }>
                    { label }
                </label>
                <input
                    id = { id }
                    type = { type }
                    { ...this.props }
                    //onChange = { this._handleInputChange }
                />
            </Fragment>
        );
    }
}
