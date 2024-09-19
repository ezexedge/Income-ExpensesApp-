import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from 'redux-thunk'
import dbReducer from "./reducers/transaction.reducer";
import databaseReducer from "./reducers/database.reducer";


const rootReducer = combineReducers({
    transactions: dbReducer,
    database: databaseReducer
  });
  

let middleware: Array<any> = [thunk];

let configStore: any = applyMiddleware(...middleware);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === "development") {
  middleware = [...middleware];
  configStore = composeEnhancers(applyMiddleware(...middleware));
}

const initialState: any = {};

const store = createStore(rootReducer, initialState, configStore);

export type RootStore = ReturnType<typeof rootReducer>;

export default store;