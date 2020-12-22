import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import AddInventory from "./screens/AddInventory";
import RemoveInventory from "./screens/RemoveInventory";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddInventory"
        component={AddInventory}
        options={{ title: "Agregar Inventario" }}
      />
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Inicio de sesión" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Registro" }}
      />
      <Stack.Screen
        name="RemoveInventory"
        component={RemoveInventory}
        options={{ title: "Eliminar inventario" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
