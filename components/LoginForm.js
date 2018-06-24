import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid={'transparent'}
          placeholder="Username/email"
          placeholderTextColor="#16a085"
          returnKeyType="next"
          onSubmitEditing={() => this.passWordInput.focus()}
          style={styles.input}
          />
        <TextInput
          underlineColorAndroid={'transparent'}
          placeholder="Password"
          placeholderTextColor="#16a085"
          returnKeyType="go"
          secureTextEntry
          ref={(input) => this.passWordInput = input}
          style={styles.input}
          />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#55efc4',
    marginBottom: 10,
    color: '#16a085',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#16a085',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  },

});
