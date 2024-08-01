import { Card, Text } from "react-native-paper";

export interface TransactionsByMonth  {
totalIncome:number,
totalExpenses:number
}

const TransactionSummary:React.FC<TransactionsByMonth>  = ({totalIncome,totalExpenses}) => {
    const savings = totalIncome - totalExpenses;
    const readeblePeriod = new Date().toLocaleDateString("default",{
        month: "long",
        year: "numeric"
    })
 
    const formatMoney = (value: number) => {
        const absValue = Math.abs(value).toFixed(2);
        return `${value < 0 ? "-" : ""}$${absValue}`;
      };
    
    return (
        <Card>
            <Text>Summary for {readeblePeriod}</Text>
            <Text>Income:{" "} {formatMoney(totalIncome)}</Text>
            <Text>Total Expenses:{" "} {formatMoney(totalExpenses)}</Text>
            <Text> Savings:{" "} {formatMoney(savings)}</Text>

        </Card>
    )
}

export default  TransactionSummary;