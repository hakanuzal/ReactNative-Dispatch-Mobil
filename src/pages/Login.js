import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios'

class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            Email: "",
            Password: ""
        }
    }
    
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.subContainerStyle}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login Screen</Text>
                </View>
                <View style={styles.subContainerStyle}>
                    <TextInput
                        placeholder="E-mail"
                        style={styles.inputStyle}
                        value={this.state.Email}
                        onChangeText={Email => this.setState({ Email })}
                    />
                </View>
                <View style={styles.subContainerStyle}>
                    <TextInput
                        placeholder="Password"
                        style={styles.inputStyle}
                        value={this.state.Password}
                        onChangeText={Password => this.setState({ Password })}
                    />
                </View>
                <View style={styles.subContainerStyle}>
                    <Button title="Login" onPress={login.bind(this)} />
                </View>
            </View>
        );
    }
}
async function login() {
    console.log('Test');
    console.log(this.state);

    axios.post('http://localhost:62259/api/UserLogin/Login', { ...this.state })
        .then(response => {
            console.log(response);
            if (response.data == "5ff4425bff483b88a5cead99") {
                this.props.navigation.navigate('Admin');
            }
            else{
                
            }

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
