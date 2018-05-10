import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({
            error: '',
            loading: true
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
                });
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }
    onLoginFail() {
        this.setState({
            error: 'Authentication failed.',
            loading: false
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
                    {this.state.loading ? 
                    <Spinner size="small" />
                    : <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>}
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
