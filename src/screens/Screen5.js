import React from "react";
import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import SocketIOClient from 'socket.io-client';
import ImagePicker from 'react-native-image-picker';

export default class Screen5 extends React.Component {
  state = {
    image: null
  }

  componentDidMount() {
    // this.intializeSocket();
  }

  intializeSocket() {
    this.socket = SocketIOClient("https://rn-bootcamp-09-2019.herokuapp.com");

    this.socket.on('test', (data) => {
      console.log('Data recieved from server', data);
    });
  }

  openPicker() {
    const options = {};

    ImagePicker.showImagePicker(options, (response) => {
      console.log(response);

      if(response.hasOwnProperty('uri')) {
        this.setState({ image: response })
      }
    });
  };

  uploadImage() {
    const formData = new FormData();
    const {
      uri,
      fileName,
      type,
    } = this.state.image;
    const imageObj = {uri, name: fileName, type};

    formData.append('image', imageObj);


    fetch('https://rn-bootcamp-09-2019.herokuapp.com/api/image/upload', {
      method: "POST",
      Accept: "application/json",
      ContentType: "multipart/form-data",
      body: formData
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
      })
  }

  render() {
    console.log(this.state)
    return (
      <View>
        <Text>Screen 5</Text>
        <Image
          source={{ uri: this.state.image && this.state.image.uri }}
          style={{
            width: 200,
            height: 200
          }}
        />
        <Button
          title="Add Image"
          onPress={this.openPicker.bind(this)}
        />
        <Button
          title="Upload Image"
          onPress={this.uploadImage.bind(this)}
        />
      </View>
    )
  }
}
