import { ParamListBase } from "@react-navigation/native";

export interface Transaction{
id:number;
category_id:number;
amount:number;
date: number;
description:string;
type: "Expense" | "Income";
}

export interface Category{
    id:number;
    name:string;
    type: "Expense" | "Income";
}

export  interface RootStackParamList extends ParamListBase {
    Home: undefined
    CreditCard: undefined
}