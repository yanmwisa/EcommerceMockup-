import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen"; // Assurez-vous que WelcomeScreen est importé
import TabNavigator from "./navigation/TabNavigator"; // Contient Home et les autres onglets

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Welcome Screen affiché en premier */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* TabNavigator pour les onglets principaux */}
        <Stack.Screen name="HomeTabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;