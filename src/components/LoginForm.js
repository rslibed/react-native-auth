import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };
    onButtonPress() {
        const { email, password } = this.state;
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(() => {
                    this.setState({
                        error: 'Authentication failed.'
                    });
                });
            });
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    label="Email"
                    value={this.state.email}
                    placeholder="user@gmail.com"
                    onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    label="Password"
                    value={this.state.password}
                    secureTextEntry
                    placeholder="*****"
                    onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
