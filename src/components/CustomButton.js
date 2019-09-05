import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
} from "react-native";

function CustomButton({ label, action }) {
  return (
    <TouchableOpacity onPress={action}>
      <View style={{ borderWidth: 1, borderColor: "#777", borderRadius: 4, paddingVertical: 7, paddingHorizontal: 10}}>
        <Text>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton;
