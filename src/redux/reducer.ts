import { combineReducers } from 'redux';

import { reducer as navDrawerReducer } from 'base/layouts/sidebar/slice';

import { reducer as appReducer } from './slice';

const rootReducer = combineReducers({
  // base
  appReducer,
  navDrawerReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
