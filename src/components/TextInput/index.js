import React from 'react';
import {
  TextInput,
  Text,
  View
} from 'react-native';

import styles from './styles';

export default ({
  label = "qwerty",
  inputProps = {},
  containerStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text>
        {label}
      </Text>
      <TextInput {...inputProps}/>
    </View>
  );
}