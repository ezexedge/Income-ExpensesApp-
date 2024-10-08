import { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native"
import { Category, Transaction } from "../types";
import { useSQLiteContext } from "expo-sqlite";
import TrasactionList from "../components/TransactionList";
import TransactionSummary, { TransactionsByMonth } from "../components/TransactionSummary";
import AddTransaction from "../components/AddTransaction";
import { useSelector } from "react-redux";
import { DbState } from "../store/reducers/transaction.reducer";
import { useDispatch } from "react-redux";
import { getTransactions } from "../store/actions/transaction.action";
import { useFocusEffect } from "@react-navigation/native";

const Home: React.FC = () => {
    const [categories,setCategories] = useState<Category[]>([]);
    const [transactions,setTransactions] = useState<Transaction[]>([]);
    const [transactionByMonth,setTransactionsByMonth] = useState<TransactionsByMonth>({totalExpenses:0,totalIncome:0})

    const questionListSelector = useSelector((state:DbState) => state.transactions);
    const databaseConnected = useSelector((state:any) => state.database.connected);

    console.log("database",databaseConnected)
    console.log("questionListSelectorquestionListSelector",questionListSelector)

    const  {totalExpenses,totalIncome} = transactionByMonth;

    const dispatch = useDispatch()
  
    useEffect(() => {
      console.log("/////////conectado afuera")

      if(databaseConnected){
        console.log("/////////conectado")
        dispatch(getTransactions());
      }
    }, [databaseConnected,dispatch ]); 
  
  
    // async function deleteTransaction(id:number){
    //     db.withTransactionAsync(async ()=>{
    //         await db.runAsync(`DELETE FROM Transactions WHERE id = ?;` [id]);
    //         await getData();
    //     })
    // }

    // async function getData(){
    //     const result = await db.getAllAsync<Transaction>("SELECT * FROM Transactions");
    //     setTransactions(result);
    //     const categoriesResult = await db.getAllAsync<Category>("SELECT * FROM Categories");
    //     setCategories(categoriesResult);

    //     const now = new Date();


    //     // Set to the first day of the current month
    //     const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    //     // Get the first day of the next month, then subtract one millisecond to get the end of the current month
    //     const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    //     endOfMonth.setMilliseconds(endOfMonth.getMilliseconds() - 1);
    
    //     // Convert to Unix timestamps (seconds)
    //     const startOfMonthTimestamp = Math.floor(startOfMonth.getTime() / 1000);
    //     const endOfMonthTimestamp = Math.floor(endOfMonth.getTime() / 1000);
    
    //     const transactionsByMonth = await db.getAllAsync<TransactionsByMonth>(
    //       `
    //       SELECT
    //         COALESCE(SUM(CASE WHEN type = 'Expense' THEN amount ELSE 0 END), 0) AS totalExpenses,
    //         COALESCE(SUM(CASE WHEN type = 'Income' THEN amount ELSE 0 END), 0) AS totalIncome
    //       FROM Transactions
    //       WHERE date >= ? AND date <= ?;
    //     `,
    //       [startOfMonthTimestamp, endOfMonthTimestamp]
    //     );
    //     setTransactionsByMonth(transactionsByMonth[0]);
    // }

    // async function insertTransaction(transaction: Transaction) {

    //   console.log("%%%%%",transaction)
    //     db.withTransactionAsync(async () => {
    //       await db.runAsync(
    //         `
    //         INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (?, ?, ?, ?, ?);
    //       `,
    //         [
    //           transaction.category_id,
    //           transaction.amount,
    //           transaction.date,
    //           transaction.description,
    //           transaction.type,
    //         ]
    //       );
    //       await getData();
    //     });
    //   }

    return (
        <ScrollView contentContainerStyle={{padding:15,paddingVertical:170}}>
          <Text>holaaa</Text>
                    {/* <AddTransaction insertTransaction={insertTransaction} />

            <TransactionSummary totalExpenses={totalExpenses} totalIncome={totalIncome} />
            <TrasactionList
            categories={categories}
            transactions={transactions}
            deleteTransaction={deleteTransaction}
            /> */}
        </ScrollView>
    )
}
export default Home;