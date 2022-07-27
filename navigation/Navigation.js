import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableWithoutFeedback } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as theme from "../theme";
import Welcome from "../screens/Welcome";
import Dashboard from "../screens/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "../screens/Settings";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import { onAuthStateChanged } from "firebase/auth";
import Profile from "../screens/Profile";
import FanAndLight from "../screens/FanAndLight";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Navigation = ({ weatherData }) => {
  const [currUser, setCurrUser] = useState(null);
  // const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrUser(user);
      } else {
        setCurrUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {!currUser ? (
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Dashboard" options={{ headerShown: false }}>
            {(props) => <Dashboard {...props} weatherData={weatherData} />}
          </Stack.Screen>
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FanAndLight"
            component={FanAndLight}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
