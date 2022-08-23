import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducer';
import rootSaga from './saga';

const createReducer = (injectedReducers = {}) =>
  combineReducers({
    ...injectedReducers,
    ...rootReducer,
  });

const storeConfig = (initialState: any = {}): any => {
  const sagaMiddleware = createSagaMiddleware({});
  let store: any;

  const middleware = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga: sagaMiddleware.run,
    }),
  ];
  const isClient = typeof window !== 'undefined';

  if (isClient) {
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
      middleware: () =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [, /** 'breadCrumbSlice/pushDataBreadCrumb' */ 'toastNotificationSlice/showNotification'],
          },
        }).concat(middleware),
    });
  } else {
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
      enhancers,
      middleware: () => getDefaultMiddleware().concat(middleware),
    });
  }

  store['sagaTask'] = sagaMiddleware.run(rootSaga);

  return store;
  // return { store, persistor };
};

export default storeConfig;
export const wrapperStore = createWrapper(storeConfig, { debug: true });
