import { combineReducers } from '@reduxjs/toolkit';

import { counterReducer } from './modules';

const reducer = combineReducers({
   counter: counterReducer,
});

export default reducer;
