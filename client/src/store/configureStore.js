import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { verifyAuth } from '../actions/authActions';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), devToolsEnhancer())
  );
  store.dispatch(verifyAuth());

  return store;
};

export default configureStore;
