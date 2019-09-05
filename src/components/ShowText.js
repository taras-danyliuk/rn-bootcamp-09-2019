import React from "react";
import {
  View,
  Text,
} from "react-native";


function ShowText({ text }) {
  return (
      <View>
        <Text>
          {text}
        </Text>
      </View>
  )
}

export default ShowText;
