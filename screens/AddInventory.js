import React, { useState } from "react";
import { View, ScrollView, Text, Button, StyleSheet } from "react-native";
import Picker from "@react-native-picker/picker";

import { TextInput } from "react-native-gesture-handler";

const Home = (props) => {
  const [item, setItem] = useState({
    code: "",
    name: "",
    marca: "",
    price: "",
    quantity: "",
    unity: "",
  });

  const [unity, setUnity] = useState({
    piece: "",
    kg: "",
    box: "",
    pound: "",
    lt: "",
    gallon: "",
    mt: "",
    ft: "",
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Add Inventory</Text>
      </View>
      <ScrollView style={styles.inputGroup}>
        <Text>Código del producto. *</Text>
        <View>
          <TextInput color="white" />
        </View>
        <Text>Nombre. *</Text>
        <View>
          <TextInput color="white" />
        </View>
        <Text>Marca.</Text>
        <View>
          <TextInput color="white" />
        </View>
        <Text>Precio. *</Text>

        <View>
          <TextInput color="white" />
        </View>
        <Text>Cantidad. *</Text>
        <View>
          <TextInput color="white" />
        </View>
        <Text>Unidad. *</Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          // onValueChange={(itemValue, itemIndex) =>
          //   this.setState({ language: itemValue })
          // }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <View>
          <TextInput color="white" />
        </View>
        <Text>Categoria.</Text>
        <View>
          <TextInput color="white" />
        </View>
        <Text>Descripción.</Text>
        <View>
          <TextInput color="white" />
        </View>
        <Text>Foto.</Text>
        <View>
          <TextInput color="white" />
        </View>
        <Text>Fecha</Text>
        <View>
          <TextInput color="white" />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5,
  },
  container: {
    flex: 1,
    padding: 35,
    // backgroundColor: "#0D0E1B",
    // color: "#0000",
  },
  labels: {
    margin: 15,
    // color: "#515B79",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    // borderBottomColor: "#ccc",
    // backgroundColor: "#212941",
    padding: 10,
  },
  form: {
    borderBottomColor: "#1E2740",
    borderBottomWidth: 2,
    color: "green",
    // borderRadius: 30,
    // margin: 10,
    marginBottom: 15,
  },
  buttons: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "#12172A",
  },
});

export default Home;
