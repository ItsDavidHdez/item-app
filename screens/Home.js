import React from "react";
import { View, ScrollView, Text, Button } from "react-native";

const Home = (props) => {
  return (
    <ScrollView>
      <View>
        <Text>Dashboard</Text>
      </View>
      <View>
        <Text>Bienvenido @User</Text>
      </View>
      <View>
        <Button
          title="Agregar inventario"
          onPress={() => props.navigation.navigate("AddInventory")}
        />
      </View>
      <View>
        <Button
          title="Eliminar inventario"
          onPress={() => props.navigation.navigate("RemoveInventory")}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
