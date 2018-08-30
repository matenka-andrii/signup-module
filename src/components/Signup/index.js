// Core
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Control, Form, Errors } from 'react-redux-form';
import cx from 'classnames';

// Instruments
import Styles from './styles.scss';
import FormInput from '../FormInput';
import { signupActions } from '../../bus/ui/actions';
import { store } from '../../init/store';


const mapStateToProps = (state) => ({
    step:       state.ui.get('step'),
    signup:     state.signup,
    signupForm: state.signupForm,
    // email:           state.signup.get('email'),
    // password:        state.signup.get('password'),
    // confirmPassword: state.signup.get('confirmPassword'),
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            setStepState:            signupActions.setStepState,
            setEmailState:           signupActions.setEmailState,
            setPasswordState:        signupActions.setPasswordState,
            setConfirmPasswordState: signupActions.setConfirmPasswordState,
        },
        dispatch,
    ),
});

const required = (val) => val && val.length;
const passwordsMatch = ({ password, confirmPassword }) => {
    return password === confirmPassword;
};
//console.log(store.getState());
//console.log(formActions);

class Signup extends Component {
    _handleButtonClick = (e) => {
        //e.preventDefault();
        //const { actions, step } = this.props;

        //actions.setStepState(step + 1);
        //console.log('_handleButtonClick');
    };
    _handleFieldBlur = ({ target }) => {

    };
    _handleFieldChange = ({ target }) => {
        // const { actions } = this.props;
        // const { id, value } = target;

        // switch (id) {
        //     case 'email':
        //         actions.setEmailState(value);
        //         break;
        //     case 'password':
        //         actions.setPasswordState(value);
        //         break;
        //     case 'confirmPassword':
        //         actions.setConfirmPasswordState(value);
        //         break;
        //     default:
        //         return false;
        // }

    };
    _handleFormSubmit = (e) => {
        console.log('Submit e: ', e);
    };

    render () {
        const { step } = this.props;
        let progressClsObj = {};

        if (step === 1) {
            progressClsObj = {
                [Styles.stepOne]: true,
            };
        } else if (step === 2) {
            progressClsObj = {
                [Styles.stepTwo]: true,
            };
        } else {
            progressClsObj = {
                [Styles.stepThree]: true,
            };
        }

        const progressCls = cx(Styles.progressBar, progressClsObj);

        //console.log(email.validity.required);
        //console.log(step);

        return (
            <div className = { Styles.signup }>
                <Form
                    model = 'forms.signup'
                    validators = { {
                        '':    { passwordsMatch },
                        email: {
                            required,
                            validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
                        },
                        password: {
                            required,
                            length: (val) => val && val.length >= 6,
                        },
                        confirmPassword: {
                            required,
                        },
                    } }
                    onSubmit = { this._handleFormSubmit }>
                    <div className = { Styles.title }>Signup</div>
                    <div className = { progressCls }>
                        <div />
                    </div>
                    <div className = { Styles.form }>
                        <Control.text
                            component = { FormInput }
                            id = 'email'
                            label = 'Email'
                            model = '.email'
                            type = 'email'

                            // validators = { {
                            //     required,
                            //     validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
                            // } }
                            //onChange = { this._handleFieldChange }
                        />

                        <label htmlFor = 'password'>Password</label>
                        <Control.text
                            id = 'password'
                            model = '.password'
                            type = 'password'
                            // validators = { {
                            //     required,
                            //     length: (val) => val && val.length >= 6,
                            // } }
                            //onChange = { this._handleFieldChange }
                        />

                        <label htmlFor = 'confirmPassword'>Confirm Password</label>
                        <Control.text
                            id = 'confirmPassword'
                            model = '.confirmPassword'
                            type = 'password'
                            // validators = { {
                            //     required,
                            //     matches: (val) => val === store.getState().forms.signup.password,
                            // } }
                            //onChange = { this._handleFieldChange }
                        />

                    </div>
                    <div className = { Styles.footer }>
                        <span
                            className = { Styles.next }
                            onClick = { this._handleButtonClick }>
                            Next <i />
                        </span>
                    </div>
                </Form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
