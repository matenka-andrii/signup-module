// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

// Components
import Signup from '../../components/Signup';

export default class App extends Component {
    render () {
        return (
            <div className = { Styles.app }>
                <Signup />
            </div>
        );
    }
}
