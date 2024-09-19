import * as React from "react";
import { SQLiteProvider } from "expo-sqlite/next";
import { ActivityIndicator, Text, View } from "react-native";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Navigation from "./navigation";
import * as SplashScreen from 'expo-splash-screen';
import store from "./store";
import { Provider } from "react-redux";
import { loadDatabase } from "./store/actions/database.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DatabaseState } from "./store/reducers/database.reducer";

const Stack = createNativeStackNavigator();

function AppContent() {
  const [dbLoaded, setDbLoaded] = React.useState<boolean>(false);
  const databaseResponse = useSelector((state:any) => state.database.message)

  console.log("databaseResponse",databaseResponse)
  const dispatch = useDispatch();

  React.useEffect(() => {
    const init = async () => {
        setDbLoaded(true);

        await SplashScreen.preventAutoHideAsync();

        dispatch(loadDatabase());

        setTimeout(async () => {
          await SplashScreen.hideAsync(); 
        }, 3000); 
    
    };

    init();
  }, [dispatch]);

  if (!dbLoaded)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
        <Text>Loading Database...</Text>
      </View>
    );

  return (
      <Navigation />
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
