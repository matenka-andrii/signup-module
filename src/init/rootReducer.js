// Core
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

// Instruments
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    form: reduxFormReducer,
    ui,
});
