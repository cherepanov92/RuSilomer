import {createStore, compose} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import rootReducer from '../reducers/rootReducer';

// create a store
const store = context => createStore(rootReducer, compose(
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

// export an assembled wrapper
export const wrapper = createWrapper(store, {debug: true});