import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  let store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
