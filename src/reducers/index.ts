import { combineReducers } from 'redux'
import { persistReducer } from "redux-persist";
import localStorage from 'redux-persist/lib/storage'
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  account: persistReducer({
    key: 'account',
    storage: localStorage,
    whitelist: ['address', 'type']
  }, accountReducer),
});

export default rootReducer
