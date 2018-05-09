import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };
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
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
