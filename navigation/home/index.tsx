import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import { RootStackParamList } from "../../types";


const Stack = createNativeStackNavigator<RootStackParamList>();


const HomeNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
          }}
        >
        <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default HomeNavigator;