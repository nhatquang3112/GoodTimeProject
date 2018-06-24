import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import LoginScreen from './components/LoginScreen'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Default username',
      passWord: 'Default password',
    };
  }

  render() {
    return (
      <LoginScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
