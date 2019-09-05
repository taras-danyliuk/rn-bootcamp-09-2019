import React, { useState } from "react";
import {
  View,
  Text,
} from 'react-native';

import CustomButton from "../components/CustomButton";
import ShowText from "../components/ShowText";


function Screen3Functional(props) {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("text");

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Hello from Screen3Functional
      </Text>

      <Text>
        Counter: {counter}
      </Text>

      <CustomButton label="Add" action={() => setCounter(1)}/>

      <CustomButton label="Set Hi" action={() => setText("Hi")}/>
      <CustomButton label="Set By" action={setText.bind(this, "By")}/>
      <CustomButton label="Set !!!" action={setText.bind(this, "!!!")}/>

      <ShowText text={text}/>
    </View>
  )
}

export default Screen3Functional;
