import * as SQLite from 'expo-sqlite/next';
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { Dispatch } from 'redux';

export const LOAD_DATABASE_SUCCESS = "LOAD_DATABASE_SUCCESS";
export const LOAD_DATABASE_FAILURE = "LOAD_DATABASE_FAILURE";

interface LoadDatabaseSuccessAction {
    type: typeof LOAD_DATABASE_SUCCESS;
    payload: {
      message: string;
      error: boolean;
      connected: boolean;
    };
  }

  interface LoadDatabaseFailureAction {
    type: typeof LOAD_DATABASE_FAILURE;
    payload: {
      message: string;
      error: boolean;
      connected: boolean;

    };
  }


  export type DatabaseActionTypes =
  | LoadDatabaseSuccessAction
  | LoadDatabaseFailureAction;



  export const loadDatabase = (): any => {
    return async (dispatch: Dispatch<DatabaseActionTypes>): Promise<void> => {

        try {

            const dbName = "mySQLiteDB.db";
            const dbAsset = require("../../assets/mySQLiteDB.db");


            const dbUri = Asset.fromModule(dbAsset).uri;
            const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
          
            const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
            if (!fileInfo.exists) {
              await FileSystem.makeDirectoryAsync(
                `${FileSystem.documentDirectory}SQLite`,
                { intermediates: true }
              );
              await FileSystem.downloadAsync(dbUri, dbFilePath);
            }


      dispatch({
        type:  LOAD_DATABASE_SUCCESS,
        payload: {
          message: "database connected",
          error: false,
          connected: true,

        },
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: LOAD_DATABASE_FAILURE, payload: {
            message: error?.message,
            error: true,
            connected: false,

        } });
      } else {
        dispatch({ type: LOAD_DATABASE_FAILURE, payload:{
            message: "Unknown error occurred",
            error: true,
            connected: false,

        } });
      }
    }
  };
};