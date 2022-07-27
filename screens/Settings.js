import React, { Component, useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Slider from "@react-native-community/slider";
import * as theme from "../theme";
import { Block, Text, PanSlider } from "../components";
import mocks from "../settings";

export default function Settings({ navigation, settings, route }) {
  const [direction, setDirection] = useState(45);
  const [speed, setSpeed] = useState(12);

  function renderController() {
    return (
      <Block flex={1} right style={styles.controller}>
        <Block center style={styles.controllerValue}>
          <Text color="white">34</Text>
        </Block>
        <Block flex={0.8} style={[styles.controllerOverlay]} />
      </Block>
    );
  }
  const name = route.params.name;
  const Icon = settings[name].icon;

  return (
    <ImageBackground
      source={require("../assets/smart_home_3.jpeg")}
      imageStyle={{ opacity: 0.6 }}
      resizeMode="cover"
      style={styles.image}
    >
      {/* <SafeAreaView> */}
      <Block flex={1} style={styles.settings}>
        <Block flex={0.5} style={{ marginTop: 15 }} row>
          <Block column>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <FontAwesome
                size={theme.sizes.font * 1.5}
                color={theme.colors.black}
                name="arrow-left"
              />
            </TouchableWithoutFeedback>
            <Icon
              size={theme.sizes.font * 4}
              color={theme.colors.gray2}
              style={{ marginLeft: 30 }}
            />
            <Block row style={{ alignItems: "flex-end" }}>
              <Text h1>27</Text>
              <Text h1 size={34} height={80} weight={"600"} spacing={0.1}>
                °C
              </Text>
            </Block>
            <Text caption style={{ color: "black" }}>
              Temperature
            </Text>
          </Block>
          <Block flex={1} center>
            <PanSlider />
          </Block>
        </Block>
        {name === "ac" && (
          <Block flex={1} style={{ paddingTop: theme.sizes.base * 2 }}>
            <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
              <Block row space="between">
                <Text welcome color="black" bold>
                  Direction
                </Text>
                <Text welcome color="black" bold>
                  {direction}
                </Text>
              </Block>
              <Slider
                value={45}
                mininumValue={0}
                maximumValue={90}
                thumbTintColor="#25a9e2"
                minimumTrackTintColor="#25a9e2"
                maximumTrackTintColor={theme.colors.gray2}
                onValueChange={(value) => setDirection(parseInt(value, 10))}
              />
            </Block>

            <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
              <Block row space="between">
                <Text welcome color="black" bold>
                  Speed
                </Text>
                <Text welcome color="black" bold>
                  {speed}
                </Text>
              </Block>
              <Slider
                value={12}
                mininumValue={0}
                maximumValue={30}
                thumbTintColor="#25a9e2"
                minimumTrackTintColor="#25a9e2"
                maximumTrackTintColor={theme.colors.gray2}
                onValueChange={(value) => setSpeed(parseInt(value, 10))}
              />
            </Block>
          </Block>
        )}
      </Block>
      {/* </SafeAreaView> */}
    </ImageBackground>
  );
}

Settings.defaultProps = {
  settings: mocks,
};

const styles = StyleSheet.create({
  settings: {
    // backgroundColor: "#F0F8FF",
    padding: theme.sizes.base * 2,
  },
  // card: {
  //   paddingVertical: 20,
  //   backgroundColor: "rgba(65,105,225, 0.3 )",
  //   shadowColor: "black",
  //   shadowOpacity: 4,
  //   shadowRadius: 3,
  //   shadowOffset: {
  //     height: 2,
  //     width: 2,
  //   },
  //   borderRadius: 20,
  // },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
