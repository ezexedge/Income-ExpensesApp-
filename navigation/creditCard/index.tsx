import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreditCard from "../../screens/CreditCard";
import { RootStackParamList } from "../../types";


const Stack = createNativeStackNavigator<RootStackParamList>();


const CreditCardNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
        <Stack.Screen name="CreditCard" component={CreditCard} />
        </Stack.Navigator>
    )
}

export default CreditCardNavigator;