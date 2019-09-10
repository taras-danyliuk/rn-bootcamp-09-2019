import React from 'react';
import codePush from "react-native-code-push";

import { StackActions } from 'react-navigation';
import Navigator from './navigation';


const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      userId: ""
    }
  }

  onAuth = (source, result) => {
    this.setState({ isLoggedIn: true, userId: result.id });

    // TODO save to AsyncStorage userId

    const replaceAction = StackActions.replace({ routeName: 'Home' });
    this.navigator && this.navigator.dispatch(replaceAction);
  };

  render () {
    return <Navigator
      ref={nav => { this.navigator = nav }}
      screenProps={{ userId: this.state.userId, isLoggedIn: this.state.isLoggedIn, onAuth: this.onAuth }}
    />;
  }
}

export default codePush(codePushOptions)(App);