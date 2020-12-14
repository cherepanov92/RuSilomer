import { createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from '../reducers/rootReducer';

// create a store
const store = () =>
  createStore(
    rootReducer,
    compose(
      (process.env.NODE_ENV === 'development' &&
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()) ||
        {}
    )
  );

// export an assembled wrapper
export const wrapper = createWrapper(store, { debug: false });
