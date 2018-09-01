// Core
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cx from 'classnames';

// Instruments
import Styles from './styles.scss';
import FormOne from '../FormOne';
import FormTwo from '../FormTwo';
import { uiActions } from '../../bus/ui/actions';

const mapStateToProps = (state) => ({
    form: state.form,
    step: state.ui.get('step'),
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            setStepState: uiActions.setStepState,
        },
        dispatch,
    ),
});

class Signup extends Component {
    _goToDashboard = () => {
        const { form: { signup: { values: { email, password, day, month, year, gender, how_hear_about_us: how = null }}}} = this.props;
        const date = Date.parse(`${month}/${day}/${year}`);
        const userData = {
            user_data: {
                email,
                password,
                date_of_birth:     date,
                gender,
                how_hear_about_us: how,
            },
        };

        console.log(JSON.stringify(userData));
    };

    _handleBackOnClick = () => {
        const { actions, step } = this.props;

        actions.setStepState(step - 1);
    };

    _handleFormSubmit = () => {
        const { actions, step } = this.props;

        actions.setStepState(step + 1);
    };

    render () {
        const { step } = this.props;

        return (
            <div className = { Styles.signup }>
                <div className = { Styles.title }>
                    {
                        step === 3
                            ? 'Thank you!'
                            : 'Signup'
                    }
                </div>
                <div
                    className = {
                        step === 1
                            ? cx(Styles.progressBar, Styles.stepOne)
                            : step === 2
                                ? cx(Styles.progressBar, Styles.stepTwo)
                                : cx(Styles.progressBar, Styles.stepThree)
                    }>
                    <div />
                </div>
                <TransitionGroup
                    exit = { false }>
                    {
                        step === 1
                            ? <CSSTransition
                                classNames = { {
                                    enter:       Styles.enter,
                                    enterActive: Styles.entered,
                                } }
                                key = { step }
                                timeout = { { enter: 500, exit: 0 } }>
                                <FormOne onSubmit = { this._handleFormSubmit } />
                            </CSSTransition>
                            : step === 2
                                ? <CSSTransition
                                    classNames = { {
                                        enter:       Styles.enter,
                                        enterActive: Styles.entered,
                                    } }
                                    key = { step }
                                    timeout = { { enter: 500, exit: 0 } }>
                                    <FormTwo handleBackOnClick = { this._handleBackOnClick } onSubmit = { this._handleFormSubmit } />
                                </CSSTransition>
                                : <CSSTransition
                                    classNames = { {
                                        enter:       Styles.enter,
                                        enterActive: Styles.entered,
                                    } }
                                    key = { step }
                                    timeout = { { enter: 500, exit: 0 } }>
                                    <div className = { Styles.done }>
                                        <i />
                                        <span
                                            onClick = { this._goToDashboard }>
                                            Go to Dashboard
                                            <i />
                                        </span>
                                    </div>
                                </CSSTransition>
                    }
                </TransitionGroup>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
