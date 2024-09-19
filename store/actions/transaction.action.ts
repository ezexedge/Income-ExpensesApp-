import { Dispatch } from "redux";
import { Transaction } from "../../types"; 
import * as SQLite from 'expo-sqlite/next';

export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
export const LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE";
export const LOAD_DATABASE_SUCCESS = "LOAD_DATABASE_SUCCESS";
export const LOAD_DATABASE_FAILURE = "LOAD_DATABASE_FAILURE";

interface LoadDataSuccessAction {
  type: typeof LOAD_DATA_SUCCESS;
  payload: {
    transactions: Transaction[];
  };
}

interface LoadDataFailureAction {
  type: typeof LOAD_DATA_FAILURE;
  error: string;
}


export type TransactionActionTypes =
  | LoadDataSuccessAction
  | LoadDataFailureAction;



export const getTransactions = (): any => {
    return async (dispatch: Dispatch<TransactionActionTypes>): Promise<void> => {

        try {

      const db = await SQLite.openDatabaseAsync('mySQLiteDB.db');

      const transactions = await db.getAllAsync<Transaction[]>(
          "SELECT * FROM Transactions"
      ) as unknown as Transaction[]


      console.log("transactions",transactions)
      dispatch({
        type: LOAD_DATA_SUCCESS,
        payload: {
          transactions,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: LOAD_DATA_FAILURE, error: error.message });
      } else {
        dispatch({ type: LOAD_DATA_FAILURE, error: "Unknown error occurred" });
      }
    }
  };
};
