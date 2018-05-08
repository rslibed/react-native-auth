import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, View } from 'react-native';
import { firebaseCreds } from '../creds';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseCreds.keys);
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
