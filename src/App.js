import React from 'react';

import { StackActions } from 'react-navigation';
import Navigator from './navigation';


export default class App extends React.Component {
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
