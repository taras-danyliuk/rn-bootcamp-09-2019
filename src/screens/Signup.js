import React, { Component } from 'react';
import { StackActions } from 'react-navigation';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import TextInput from '../components/TextInput';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello",
      email: "",
      password: ""
    };

    if (props.screenProps && props.screenProps.isLoggedIn) {
      const replaceAction = StackActions.replace({ routeName: 'Home' });
      this.props.navigation.dispatch(replaceAction);
    }
  }

  goToLogin = () => {
    const replaceAction = StackActions.replace({ routeName: 'Login' });
    this.props.navigation.dispatch(replaceAction);
  };

  onChange = (value, key) => {
    this.setState({ [key]: value });
  };

  signUp = () => {
    return fetch("https://rn-bootcamp-09-2019.herokuapp.com/api/user/register", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    }).then(result => result.json())
      .then(result => {
        if (result.status === "error") return;

        this.props.screenProps.onAuth("login", result);
      })
      .catch(err => console.log(err));
  };

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          Sign UP
        </Text>

        <TextInput
          label="Email"
          inputProps={{
            value: this.state.email,
            onChangeText: newText => this.onChange(newText, "email")
          }}
          containerStyle={{
            backgroundColor: 'green'
          }}
        />
        <TextInput
          label="Password"
          inputProps={{
            placeholder: "Enter password",
            fontSize: 32,
            value: this.state.password,
            onChangeText: newText => this.onChange(newText, "password")
          }}
          containerStyle={{
            backgroundColor: 'red',
          }}
        />

        <TouchableOpacity onPress={this.signUp}>
          <View>
            <Text>Sign up</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.goToLogin}>
          <View>
            <Text>Go to log in</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Signup;
