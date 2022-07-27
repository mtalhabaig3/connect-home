import React, { Component, useState, useEffect } from "react";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { LineChart, Path } from "react-native-svg-charts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as shape from "d3-shape";
import * as theme from "../theme";
import { Block, Text } from "../components";
import { auth } from "../firebase";
import mocks from "../settings";
import FanAndLight from "./FanAndLight";

export default function Dashboard({ navigation, settings, weatherData }) {
  // static navigationOptions = {
  //   header: null,
  // };
  // render() {
  // const [weatherData, setWeatherData] = useState(null);
  // const [loaded, setLoaded] = useState(true);
  // const { settings } = this.props;
  const LightIcon = settings["light"].icon;
  const ACIcon = settings["ac"].icon;
  const TempIcon = settings["temperature"].icon;
  const FanIcon = settings["fan"].icon;
  const WiFiIcon = settings["wi-fi"].icon;
  const ElectricityIcon = settings["electricity"].icon;
  const { currentUser } = auth;

  const {
    weather,
    name,
    main: { temp, humidity },
  } = weatherData;
  const [{ main }] = weather;
  console.log(FanAndLight.toggle);

  // async function fetchWeatherData(cityName) {
  //   setLoaded(false);
  //   const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
  //   try {
  //     const response = await fetch(API);
  //     if (response.status == 200) {
  //       const data = await response.json();
  //       setWeatherData(data);
  //     } else {
  //       setWeatherData(null);
  //     }
  //     setLoaded(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchWeatherData("Peshawar");
  // }, []);

  return (
    <ImageBackground
      source={require("../assets/smart_home_3.jpeg")}
      imageStyle={{ opacity: 0.8 }}
      resizeMode="cover"
      style={styles.image}
    >
      <Block style={styles.dashboard}>
        <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
          <Text name style={{ color: "white" }}>
            Salam
          </Text>
          <Text name style={{ color: "white" }}>
            {currentUser.displayName}
          </Text>
        </Block>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="account"
            size={30}
            color="white"
          />
        </TouchableOpacity>

        <Block row style={styles.card}>
          <Block
            flex={1.5}
            elevation={6}
            row
            style={{ alignItems: "flex-end" }}
          >
            <Text h1 style={{ color: "white" }}>
              {Math.round(temp)}
            </Text>

            <Text
              h1
              size={34}
              style={{ color: "white" }}
              height={80}
              weight="600"
              spacing={0.1}
            >
              °C
            </Text>
          </Block>
          <Block flex={1} column>
            <Text
              h2
              style={{ fontSize: 20, marginVertical: -5, color: "white" }}
            >
              {name}
            </Text>
            <Text
              caption
              style={{ fontSize: 14, color: "black", color: "white" }}
            >
              {humidity}% Humidity
            </Text>

            <LineChart
              yMax={100}
              yMin={0}
              data={[0, 20, 25, 15, 20, 55, humidity]}
              style={{ flex: 0.8 }}
              curve={shape.curveNatural}
              svg={{ stroke: "#25a9e2", strokeWidth: 3 }}
            />
          </Block>
        </Block>

        <ScrollView
          contentContainerStyle={styles.buttons}
          showsVerticalScrollIndicator={false}
        >
          <Block column space="between">
            <Block
              row
              space="around"
              style={{ marginVertical: theme.sizes.base }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("FanAndLight", { name: "light" })
                }
              >
                <Block center middle elevation={6} style={styles.button}>
                  <LightIcon size={38} color="#25a9e2" />
                  <Text
                    button
                    style={{
                      marginTop: theme.sizes.base * 0.5,
                      color: "white",
                    }}
                  >
                    {settings["light"].name}
                  </Text>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Settings", { name: "ac" })}
              >
                <Block center middle elevation={6} style={styles.button}>
                  <ACIcon size={38} color="#25a9e2" />
                  <Text
                    button
                    style={{
                      marginTop: theme.sizes.base * 0.5,
                      color: "white",
                    }}
                  >
                    {settings["ac"].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>

            <Block
              row
              space="around"
              style={{ marginVertical: theme.sizes.base }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Settings", { name: "temperature" })
                }
              >
                <Block center middle elevation={6} style={styles.button}>
                  <TempIcon size={38} color="#25a9e2" />
                  <Text
                    button
                    style={{
                      marginTop: theme.sizes.base * 0.5,
                      color: "white",
                    }}
                  >
                    {settings["temperature"].name}
                  </Text>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("FanAndLight", { name: "fan" })
                }
              >
                <Block center middle elevation={6} style={styles.button}>
                  <FanIcon size={38} color="#25a9e2" />
                  <Text
                    button
                    style={{
                      marginTop: theme.sizes.base * 0.5,
                      color: "white",
                    }}
                  >
                    {settings["fan"].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>

            <Block
              row
              space="around"
              style={{ marginVertical: theme.sizes.base, color: "white" }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("FanAndLight", { name: "wi-fi" })
                }
              >
                <Block center middle elevation={6} style={styles.button}>
                  <WiFiIcon size={38} color="#25a9e2" />
                  <Text
                    button
                    style={{
                      marginTop: theme.sizes.base * 0.5,
                      color: "white",
                    }}
                  >
                    {settings["wi-fi"].name}
                  </Text>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("FanAndLight", { name: "electricity" })
                }
              >
                <Block center middle elevation={6} style={styles.button}>
                  <ElectricityIcon size={38} color="#25a9e2" />
                  <Text
                    button
                    style={{
                      marginTop: theme.sizes.base * 0.5,
                      color: "white",
                    }}
                  >
                    {settings["electricity"].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </ImageBackground>
  );
}

Dashboard.defaultProps = {
  settings: mocks,
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: theme.sizes.base * 2,
    marginBottom: -theme.sizes.base * 6,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
  },
  card: {
    paddingVertical: 20,
    // backgroundColor: "rgba(65,105,225, 0.3v  )",
    shadowColor: "black",
    shadowOpacity: 5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    borderRadius: 20,
  },
  button: {
    backgroundColor: "rgba(65,105,225, 0.3)",
    shadowColor: "black",
    shadowOpacity: 4,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    width: 151,
    height: 151,
    borderRadius: 151 / 2,
    // opacity: 0.8,
  },
  icon: {
    position: "absolute",
    top: -50,
    right: 10,
  },
});
