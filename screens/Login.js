import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signIn } from "../firebase";
import { auth, db } from "../firebase";
// import { doc, setDoc } from "@firebase/firestore";
// import { updateProfile } from "@firebase/auth";
// import firebase from 'react-native-firebase';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);

  async function handleLogin() {
    Keyboard.dismiss();

    // check with backend API or with some static data
    await signIn(email, password);
    navigation.navigate("Dashboard");
  }

  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.cantainer}>
        <Image
          style={{
            height: 150,
            width: 150,
            position: "absolute",
            top: 30,
            left: 120,
          }}
          source={require("../assets/smart_home.webp")}
        />
        <View style={styles.subView}>
          <Text style={styles.subTxt}>Login</Text>
          <TextInput
            style={styles.nameInput}
            placeholder="Email"
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
          <TextInput
            secureTextEntry
            style={styles.nameInput}
            placeholder="Password"
            onChangeText={(password) => {
              setPassword(password);
            }}
          />
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity style={styles.btn} onPress={handleLogin}>
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.endView}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.endTxt}>Dont have an account? SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  cantainer: {
    backgroundColor: "white",
    height: 300,
  },
  subView: {
    backgroundColor: "#F5F5F5",
    height: 430,
    marginTop: 240,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  headerTxt: {
    fontSize: 40,
    marginLeft: 40,
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    marginTop: 140,
  },
  subTxt: {
    color: "black",
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 40,
  },
  nameInput: {
    height: 40,
    width: 270,
    marginLeft: 40,
    borderBottomWidth: 1,
    marginTop: 30,
  },
  btn: {
    height: 50,
    width: 270,
    backgroundColor: "#25a9e2",
    borderRadius: 80,
    marginTop: 30,
    marginLeft: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  endView: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginLeft: -60,
  },
  endTxt: {
    fontSize: 15,
    marginTop: 20,
    marginLeft: 80,
  },
  endBtn: {
    marginRight: 80,
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 17,
  },
});
