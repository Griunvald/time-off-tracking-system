import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), devToolsEnhancer())
  );

  return store;
};

export default configureStore;
