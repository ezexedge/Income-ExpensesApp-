import {
    TransactionActionTypes,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
  } from "../actions/transaction.action";
  
  export interface DbState {
    transactions: any[];
    categories: any[];
    transactionsByMonth: any;
    loading: boolean;
    error: string | null;
  }
  
  const initialState: DbState = {
    transactions: [],
    categories: [],
    transactionsByMonth: { totalExpenses: 0, totalIncome: 0 },
    loading: false,
    error: null,
  };
  
  const dbReducer = (state = initialState, action: TransactionActionTypes): DbState => {
    switch (action.type) {
      case LOAD_DATA_SUCCESS:
        return {
          ...state,
          transactions: action.payload.transactions,
        //   categories: action.payload.categories,
        //   transactionsByMonth: action.payload.transactionsByMonth,
          loading: false,
          error: null,
        };
      case LOAD_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default dbReducer;
  