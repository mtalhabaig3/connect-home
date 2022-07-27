// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";

// const App = () => {
//   return <Navigation />;
// };

// export default App;

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
// import SearchBar from './components/SearchBar';

const API_KEY = "a074728a9c1e6be576a6af3af11f03c2";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function fetchWeatherData(cityName) {
    setLoaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeatherData("Tokyo");
  }, []);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  } else if (weatherData === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.primaryText}>
          City Not Found! Try Different City
        </Text>
      </View>
    );
  }

  return (
    // <View style={styles.container}>
    //   <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    // </View>
    <Navigation weatherData={weatherData} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    margin: 20,
    fontSize: 28,
  },
});
