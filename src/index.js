import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import App from './App';

// this startingPlantArray should eventually be removed
const startingPlantArray = [];

const plantList = (state = startingPlantArray, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return action.payload;
    default:
      return state;
  }
};

function* rootSaga() {
  yield takeEvery('FETCH_ELEMENTS', fetchElements);
  yield takeEvery('ADD_ELEMENTS', addElement);
}

function* addElement(action) {
  try {
    yield axios.post('/api/plant', action.payload);
    yield fetchElements();
  } catch (error) {
    console.log('Error posting elements: ', error);
  }
}

function* fetchElements() {
  try {
    const response = yield axios.get('/api/plant');
    yield put({ type: 'ADD_PLANT', payload: response.data });
  } catch (error) {
    console.log('error with fetch element request', error);
  }
}

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleWare, logger)
);

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
