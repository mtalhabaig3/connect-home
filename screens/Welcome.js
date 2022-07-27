import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

export default function Welcome({ navigation }) {
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.cantainer}>
        <Image
          style={{
            height: 150,
            width: 150,
            position: "absolute",
            top: 50,
            left: 120,
          }}
          source={require("../assets/smart_home.webp")}
        />
        <View style={styles.subView}>
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Text style={styles.subTxt}>Welcome!</Text>
          </View>
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Text style={{ fontSize: 20, marginTop: 10, color: "grey" }}>
              Make Your Home Smarter!
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.btn, { marginTop: 150 }]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.btnTxt}>Signup</Text>
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
    justifyContent: "center",
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
    marginTop: -20,
    fontSize: 30,
    fontWeight: "bold",
    // marginLeft: 40,
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
    marginLeft: 55,
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
