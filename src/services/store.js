import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';
import thunk from 'redux-thunk';

const configureStore = (initialStore) => {
  const store = createStore(reducer, initialStore, composeWithDevTools(applyMiddleware(thunk)));

  return store;
}

export default configureStore;