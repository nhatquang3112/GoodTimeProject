import React from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{uri: 'https://www.funnybuttruequotes.com/images/funny-but-true-quotes.png'}}
          />
          <Text style={styles.title}
            >GOOD TIME PLANNER
          </Text>

        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // flexGrow: 1,
  },
  logo: {
    width: 200,
    height: 150,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    width: 200,
    textAlign: 'center',
    opacity: 0.7,
    fontWeight: '700',
  },
});
