import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AnalyticsScreen } from "../screens/AnalyticsScreen";

import { HomeStack, SettingsStack } from "./stack";

import { navigationStyles as styles } from "../styles";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.customTabBarTouchableOpacity, styles.shadow]}
      onPress={onPress}
    >
      <View style={styles.customTabBarContainer}>{children}</View>
    </TouchableOpacity>
  );
};

const tabBarOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: [styles.tabBarStyle, styles.shadow]
};

export const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions} initialRouteName="HomeStack">
      <Tab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            iconName = focused ? "analytics" : "analytics-outline";
            return <Ionicons name={iconName} size={32} color={"red"} />;
          },
        }}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} size={32} color={"white"} />;
          },
          tabBarButton: (props) => {
            return <CustomTabBarButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ focused }) => {
            iconName = focused ? "settings" : "settings-outline";
            return <Ionicons name={iconName} size={32} color={"red"} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
