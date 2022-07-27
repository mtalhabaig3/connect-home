import React, { Component, useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  SafeAreaView,
  Switch,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Slider from "@react-native-community/slider";
import * as theme from "../theme";
import { Block, Text, PanSlider } from "../components";
import mocks from "../settings";

export default function FanAndLight({ navigation, settings, route }) {
  const [intensity, setIntensity] = useState(45);
  const [direction, setDirection] = useState(45);
  const [speed, setSpeed] = useState(12);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const name = route.params.name;
  const Icon = settings[name].icon;
  const toggle = isEnabled;

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
            {name === "light" && (
              <Icon
                size={theme.sizes.font * 4}
                color={theme.colors.gray2}
                style={{ marginLeft: 30, marginTop: 15 }}
                name={
                  isEnabled ? "lightbulb-on-outline" : "lightbulb-off-outline"
                }
              />
            )}
            {name != "light" && (
              <Icon
                size={theme.sizes.font * 4}
                color={theme.colors.gray2}
                style={{ marginLeft: 30, marginTop: 15 }}
              />
            )}

            <View style={styles.container}>
              {isEnabled ? (
                <Text style={{ fontSize: 30 }}>ON</Text>
              ) : (
                <Text style={{ fontSize: 30 }}>OFF</Text>
              )}
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{
                  transform: [{ scaleX: 2 }, { scaleY: 2 }],
                  marginTop: 15,
                }}
              />
            </View>
          </Block>
        </Block>
        {name === "light" && (
          <Block flex={1} style={{ paddingTop: theme.sizes.base * 2 }}>
            <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
              <Block row space="between">
                <Text welcome color="black" bold>
                  Intensity
                </Text>
                <Text welcome color="black" bold>
                  {intensity}
                </Text>
              </Block>
              <Slider
                value={45}
                mininumValue={0}
                maximumValue={90}
                thumbTintColor="#25a9e2"
                minimumTrackTintColor="#25a9e2"
                maximumTrackTintColor={theme.colors.gray2}
                onValueChange={(value) => setIntensity(parseInt(value, 10))}
              />
            </Block>
          </Block>
        )}

        {name === "fan" && (
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
                onValueChange={(value) =>
                  setDirection({ direction: parseInt(value, 10) })
                }
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
                onValueChange={(value) =>
                  setSpeed({ speed: parseInt(value, 10) })
                }
              />
            </Block>
          </Block>
        )}
      </Block>
      {/* </SafeAreaView> */}
    </ImageBackground>
  );
}

FanAndLight.defaultProps = {
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
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 5,
    left: 260,
  },
});
