import React, { useState } from "react";
import { ScrollView, View, Button, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
// import { LinearGradient } from "expo-linear-gradient";
import firebase from "../database/firebase";
import "firebase/auth";
import Register from "./Register";

const Login = (props) => {
  // console.log(firebase.firestore());
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const email = user.email;
  const password = user.password;

  const loginButton = async () => {
    console.log(user.email);
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
    }
    if (firebase.auth) {
      props.navigation.navigate("Home");
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
        <Text style={styles.labels}>Email</Text>
        <View style={styles.form}>
          <TextInput
            color="white"
            value={user.email}
            onChangeText={(text) => handleChangeText("email", text)}
            // placeholder={user.email === "" ? "Email requerido" : ""}
          />
        </View>
        <Text style={styles.labels}>Password</Text>
        <View style={styles.form}>
          <TextInput
            color="white"
            value={user.password}
            onChangeText={(text) => handleChangeText("password", text)}
            secureTextEntry={true}
          />
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          title="Login"
          color="#212941"
          onPress={() => {
            loginButton();
          }}
        />
      </View>
      <View>
        <Button
          title="¿No tienes una cuenta? Registrate"
          auth={Register}
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        />
        <Button />
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
