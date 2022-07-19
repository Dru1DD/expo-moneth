import React from "react";

import { Text } from "react-native";
import * as WebBrowser from "expo-web-browser";

const handlePress = (href) => {
  WebBrowser.openBrowserAsync(href);
};

export const Anchor = (props) => (
  <Text
    {...props}
    onPress={() => handlePress(props.href)}
  >
    {props.children}
  </Text>
);
