import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SocketIOClient from 'socket.io-client';


export default class Screen5 extends React.Component {
  componentDidMount() {
    this.intializeSocket();
  }

  intializeSocket() {
    this.socket = SocketIOClient("https://rn-bootcamp-09-2019.herokuapp.com");

    this.socket.on('test', (data) => {
      console.log('Data recieved from server', data);
    });
  }


  render() {
    return (
      <View>
        <Text>Screen 5</Text>
      </View>
    )
  }
}
