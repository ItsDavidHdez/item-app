import React from "react";
import { ScrollView, View, Button, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  return (
    <LinearGradient
      colors={["#212D4C", "#0D0E1B", "#192f6a"]}
      style={styles.linearGradient}
    >
      <ScrollView style={styles.container}>
        <ScrollView style={styles.inputGroup}>
          <Text style={styles.labels}>Username</Text>
          <View style={styles.form}>
            <TextInput color="white" />
          </View>
          <View style={styles.form}>
            <Text style={styles.labels}>Password</Text>
            <TextInput color="white" />
          </View>
        </ScrollView>
        <View style={styles.buttons}>
          <Button
            title="Login"
            color="#212941"
            onPress={() => console.log(true)}
          />
        </View>
      </ScrollView>
    </LinearGradient>
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
    color: "#0000",
  },
  labels: {
    margin: 15,
    color: "#515B79",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomColor: "#ccc",
    // backgroundColor: "#212941",
    padding: 10,
  },
  form: {
    borderBottomColor: "#1E2740",
    borderBottomWidth: 2,
    color: "green",
    // borderRadius: 30,
    margin: 15,
  },
  buttons: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "#12172A",
  },
});

export default Login;
