import { DatabaseActionTypes } from "../actions/database.action";
import {
    LOAD_DATABASE_SUCCESS,
    LOAD_DATABASE_FAILURE,
  } from "../actions/transaction.action";
  
  export interface DatabaseState {
    message: string;
    error: boolean;
    connected: boolean
  }
  
  const initialState: DatabaseState = {
   error:false,
   message: "",
   connected: false

  };
  
  const databaseReducer = (state = initialState, action: DatabaseActionTypes): DatabaseState => {
    switch (action.type) {
      case LOAD_DATABASE_SUCCESS:
        return {
          ...state,
          message: action.payload.message,
          error: action.payload.error,
          connected: action.payload.connected,
        };
      case LOAD_DATABASE_FAILURE    :
        return {
          ...state,
          message: action.payload.message,
          error: action.payload.error,
          connected: action.payload.connected,

        };
      default:
        return state;
    }
  };
  
  export default databaseReducer;
  