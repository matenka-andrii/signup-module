// Core
import { createStore, applyMiddleware, compose } from 'redux';

// Instruments
import { rootReducer } from './rootReducer';
import { middleware, dev } from './middleware';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);

export { store };
