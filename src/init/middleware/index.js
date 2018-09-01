// Core
import { createLogger } from 'redux-logger';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});
const middleware = [];
const dev = process.env.NODE_ENV === 'development';

if (dev) {
    middleware.push(logger);
}

export { dev, middleware };
