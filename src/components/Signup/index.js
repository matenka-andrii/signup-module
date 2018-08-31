// Core
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cx from 'classnames';

// Instruments
import Styles from './styles.scss';
import FormOne from '../FormOne';
import FormTwo from '../FormTwo';
import { uiActions } from '../../bus/ui/actions';

const mapStateToProps = (state) => ({
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
    _handleFormSubmit = () => {
        const { actions, step } = this.props;

        actions.setStepState(step + 1);
    };
    _handleBackOnClick = () => {
        const { actions, step } = this.props;

        actions.setStepState(step - 1);
    };

    render () {
        const { step } = this.props;
        let progressClsObj = {};
        let form = '';

        if (step === 1) {
            progressClsObj = {
                [Styles.stepOne]: true,
            };
            form = <FormOne onSubmit = { this._handleFormSubmit } />;
        } else if (step === 2) {
            progressClsObj = {
                [Styles.stepTwo]: true,
            };
            form = <FormTwo
                handleBackOnClick = { this._handleBackOnClick }
                onSubmit = { this._handleFormSubmit }
            />;
        } else {
            progressClsObj = {
                [Styles.stepThree]: true,
            };
        }

        const progressCls = cx(Styles.progressBar, progressClsObj);

        return (
            <div className = { Styles.signup }>
                <div className = { Styles.title }>Signup</div>
                <div className = { progressCls }>
                    <div />
                </div>
                { form }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
