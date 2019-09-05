import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";


function Screen4(props) {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello Screen 4</Text>

      <Text>{counter}</Text>

      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <View>
          <Text>Click me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Screen4;

