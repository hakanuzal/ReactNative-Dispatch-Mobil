import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import axios from 'axios'


function Login({ navigation }) {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }
}

return (
    <View style={styles.containerStyle}>
        <View style={styles.subContainerStyle}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login Screen</Text>
        </View>
        <View style={styles.subContainerStyle}>
            <TextInput
                placeholder="E-mail"
                style={styles.inputStyle}
                onChangeText={email => setState({ email })}
            />
        </View>
        <View style={styles.subContainerStyle}>
            <TextInput
                placeholder="Password"
                style={styles.inputStyle}
                onChangeText={password => setState({ password })}
            />
        </View>
        <View style={styles.subContainerStyle}>
            <Button title="Login" onPress={login.bind(this)} />
        </View>
    </View>
);



async function login() {
    console.log('Test');

    //const { email, password } = this.state;

    axios.get('http://localhost:62259/api/UserLogin/Login', {
        params: {
            _Email: this.state.email,
            _Password: this.state.password
        }
    })
        .then(response => {

            console.log(response);
            navigation.navigate('Home');
        }).catch((e) => console.log(e));
};
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
});