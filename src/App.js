import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import firebaseCreds from '../creds';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
    firebase.initializeApp(firebaseCreds.keys);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  logUserOut() {
    this.setState({ loggedIn: false });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        { this.state.loggedIn ?
        <CardSection> 
          <Button onPress={this.logUserOut.bind(this)}>
            Log Out
          </Button>
        </CardSection> :
        <LoginForm />
        }
      </View>
    );
  }
}

export default App;
