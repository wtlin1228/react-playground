import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import example from 'slices/example';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    example: example.reducer
  });

export default rootReducer;
