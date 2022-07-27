import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from "../firebase";
import { SignOut } from "../firebase";
import * as theme from "../theme";

export default function Profile({ navigation }) {
  const { currentUser } = auth;
  return (
    <ImageBackground
      source={require("../assets/smart_home_3.jpeg")}
      imageStyle={{ opacity: 0.6 }}
      resizeMode="cover"
      style={styles.image}
    >
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <FontAwesome
          size={theme.sizes.font * 1.5}
          style={{ marginTop: 35, marginLeft: 15 }}
          color={theme.colors.black}
          name="arrow-left"
        />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", position: "absolute", top: 180 }}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="account"
            size={30}
            color="black"
          />
          <Text style={styles.text}>{currentUser.displayName}</Text>
        </View>

        <View style={{ flexDirection: "row", position: "absolute", top: 215 }}>
          <Ionicons name="mail" size={30} color="black" />
          <Text style={[styles.text, { marginLeft: 10, fontSize: 20 }]}>
            {currentUser.email}
          </Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={SignOut}>
          <Text style={styles.btnTxt}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F0F8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    color: "black",
    // fontWeight: "bold",
  },
  btn: {
    height: 50,
    width: 270,
    backgroundColor: "black",
    borderRadius: 80,
    marginTop: 30,
    marginLeft: 35,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 300,
  },
  btnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
