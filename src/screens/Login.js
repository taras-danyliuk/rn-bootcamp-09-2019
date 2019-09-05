import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import TextInput from '../components/TextInput';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "user@mail.com",
      password: "qwerty",
    };

    if (props.screenProps && props.screenProps.isLoggedIn) {
      const replaceAction = StackActions.replace({ routeName: 'Home' });
      this.props.navigation.dispatch(replaceAction);
    }
  }

  onChange = (value, key) => {
    this.setState({ [key]: value });
  };

  goToSignUp = () => {
    const replaceAction = StackActions.replace({ routeName: 'Signup' });
    this.props.navigation.dispatch(replaceAction);
  };



  logIn = () => {
    return fetch("https://rn-bootcamp-09-2019.herokuapp.com/api/user/login", {
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
          Log IN
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

        <TouchableOpacity onPress={this.logIn}>
          <View>
            <Text>Log in</Text>
          </View>
        </TouchableOpacity>



        <TouchableOpacity onPress={this.goToSignUp}>
          <View>
            <Text>Go to sign up</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Login;
