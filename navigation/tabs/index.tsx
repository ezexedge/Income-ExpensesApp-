import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Animated } from "react-native";
import HomeNavigator from "../home";
import Ionicons from "@expo/vector-icons/Ionicons";
import CreditCardNavigator from "../creditCard";

const BottomTab = createBottomTabNavigator();


const TabsNavigator = () => {
    return (
        
            <BottomTab.Navigator
              initialRouteName="HomeTab"
              screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                  fontSize: 12,
                },
                tabBarIconStyle: {
                  fontSize: 22,
                },
              }}>
              <BottomTab.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ focused, color, size }) => (
                    <Animated.View style={{ opacity: 2 }}>
                      <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
                    </Animated.View>
                  ),
                }}
              />
                            <BottomTab.Screen
                name="CreditCardTab"
                component={CreditCardNavigator}
                options={{
                  tabBarLabel: "CreditCard",
                  tabBarIcon: ({ focused, color, size }) => (
                    <Animated.View style={{ opacity: 2 }}>
                      <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
                    </Animated.View>
                  ),
                }}
              />

            </BottomTab.Navigator>
          );
}

export default TabsNavigator;