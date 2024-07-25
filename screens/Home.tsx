import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native"
import { Category, Transaction } from "../types";
import { useSQLiteContext } from "expo-sqlite";
import TrasactionList from "../components/TransactionList";

const Home: React.FC = () => {
    const [categories,setCategories] = useState<Category[]>([]);
    const [transactions,setTransactions] = useState<Transaction[]>([]);

    const db = useSQLiteContext();

    useEffect(()=>{
        db.withTransactionAsync(async()=>{
            console.log("sss")
            await getData();
        })
    },[db])

    async function deleteTransaction(id:number){
        db.withTransactionAsync(async ()=>{
            await db.runAsync(`DELETE FROM Transactions WHERE id = ?;` [id]);
            await getData();
        })
    }

    async function getData(){
        const result = await db.getAllAsync<Transaction>("SELECT * FROM Transactions");
        setTransactions(result);
        const categoriesResult = await db.getAllAsync<Category>("SELECT * FROM Categories");
        console.log(categoriesResult)
        setCategories(categoriesResult);

    }


    return (
        <ScrollView contentContainerStyle={{padding:15,paddingVertical:170}}>
            <TrasactionList
            categories={categories}
            transactions={transactions}
            deleteTransaction={deleteTransaction}
            />
        </ScrollView>
    )
}
export default Home;