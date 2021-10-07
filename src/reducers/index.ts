import { combineReducers } from 'redux'
import { createTransform, persistReducer } from "redux-persist";
import localStorage from 'redux-persist/lib/storage'
import accountReducer from "./accountReducer";
import globalReducer from './globalReducer';
import {parse, stringify} from 'flatted';
export const transformCircular = createTransform(
  (inboundState, key) => stringify(inboundState),
  (outboundState, key) => parse(outboundState),
)
const rootReducer = combineReducers({
  account: persistReducer({
    key: 'account',
    storage: localStorage,
    whitelist: ['address', 'type']
  }, accountReducer),
  global: persistReducer({
    key: 'global',
    storage: localStorage,
    transforms: [transformCircular]
  }, globalReducer),
});

export default rootReducer
