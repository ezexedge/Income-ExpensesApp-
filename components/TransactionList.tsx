import React from "react"
import { Category, Transaction } from "../types";
import { Text, TouchableOpacity, View } from "react-native";
import TransactionListItem from "./TransactionListItem";

interface TransactionListProps {
    categories: Category[];
    transactions: Transaction[];
    deleteTransaction: (id:number) => Promise<void>;
};

const TrasactionList: React.FC<TransactionListProps> = ({transactions,categories,deleteTransaction}) => {
    return(
        <View>
            {transactions.map((transaction)=>{
                const categoryForCurrentItem = categories.find((category)=> category.id === transaction.category_id)
                return (
                    <TouchableOpacity
                    key={transaction.id}
                    activeOpacity={.7}
                    onLongPress={()=> deleteTransaction(transaction.id)}
                    >
                      <TransactionListItem transaction={transaction} categoryInfo={categoryForCurrentItem}                        
                      />
                    </TouchableOpacity>
                );
            })}
        </View>
    )   
}

export default TrasactionList;