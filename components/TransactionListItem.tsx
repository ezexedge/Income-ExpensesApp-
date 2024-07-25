import React from "react"
import { Category, Transaction } from "../types";
import { Card , Text  ,Button, Icon } from "react-native-paper";
import { categoryColors, categoryEmojies } from "../constants";

interface TransactionListItemProps {
    transaction:Transaction;
    categoryInfo: Category | undefined;
}

const TransactionListItem:React.FC<TransactionListItemProps>  = ({transaction,categoryInfo}) => {

    const iconName =
    transaction.type === "Expense" ? "minus-circle" : "plus-circle";
  const color = transaction.type === "Expense" ? "red" : "green";
  const categoryColor = categoryColors[categoryInfo?.name ?? "Default"];
  const emoji = categoryEmojies[categoryInfo?.name ?? "Default"];

    return (
        <Card style={{marginBottom: 30,padding: 10}} > 
        <Card.Content>
        <Icon
        
    source={iconName}
    color={color}
    size={20}
  />
          <Text variant="titleLarge">{categoryInfo?.name} amount: {transaction.amount}</Text>
          <Text variant="titleLarge">{transaction.date}</Text>

          <Text>
        {emoji} {categoryInfo?.name}
      </Text>
        </Card.Content>
      </Card>    )
}




export default TransactionListItem;