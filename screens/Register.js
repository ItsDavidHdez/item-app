import React, { useState } from "react";
import { ScrollView, View, Button, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
// import { LinearGradient } from "expo-linear-gradient";
import firebase from "../database/firebase";
import "firebase/auth";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const authUser = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const saveUser = async () => {
    try {
      await firebase.db.collection("Users").add({
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
      });
      console.log("Guardado");
    } catch (err) {
      console.log(err);
    }
  };

  const repeatPassword = "";
  const AddNewUser = async () => {
    console.log(user);
    if (user.password === "" || user.email === "" || user.email === "") {
      alert("Por favor, rellene los campos correspondientes");
    } else {
      authUser();
      saveUser();
    }
  };

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  return (
    // <LinearGradient
    //   colors={["#212D4C", "#0D0E1B", "#192f6a"]}
    //   style={styles.linearGradient}
    // >
    <ScrollView style={styles.container}>
      <ScrollView style={styles.inputGroup}>
        <Text style={styles.labels}>Nombre</Text>
        <View style={styles.form}>
          <TextInput
            color="white"
            value={user.name}
            onChangeText={(value) => handleChangeText("name", value)}
          />
        </View>
        <Text style={styles.labels}>Télefono</Text>
        <View style={styles.form}>
          <TextInput
            color="white"
            value={user.phone}
            onChangeText={(value) => handleChangeText("phone", value)}
          />
        </View>
        <Text style={styles.labels}>Correo</Text>
        <View style={styles.form}>
          <TextInput
            color="white"
            value={user.email}
            onChangeText={(value) => handleChangeText("email", value)}
          />
        </View>
        <Text style={styles.labels}>Contraseña</Text>
        <View style={styles.form}>
          <TextInput
            color="white"
            value={user.password}
            onChangeText={(value) => handleChangeText("password", value)}
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.labels}>Repetir contraseña</Text>
        <View style={styles.form}>
          <TextInput
            color="white"
            value={repeatPassword}
            // placeholder={(text) => repeatPassword(text)}
            secureTextEntry={true}
          />
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          title="Login"
          color="#212941"
          onPress={() => {
            AddNewUser();
          }}
        />
      </View>
      <View>
        <Button title="Registrate con Google" />
        <Button title="Registrate con Facebook" />
      </View>
    </ScrollView>
    // </LinearGradient>
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

export default Login;
