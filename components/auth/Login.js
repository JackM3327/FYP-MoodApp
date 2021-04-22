import React, { Component } from 'react'
import { View, Button, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import { COLOURS } from '../../constants';
import bgImage from "../../assets/images/background-1.jpg";

import firebase from 'firebase'

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <ImageBackground
			source={bgImage}
			style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                />
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                </View>

                <View>
                <Button style={styles.loginBtn}
                onPress={() => this.onSignUp()}
                title="Login">
                    
                <Text>LOGIN</Text>
                </Button>
                </View>
            </SafeAreaView>
            </ImageBackground>
        )
    }
}

export default Login

const styles = StyleSheet.create({

    background: { 
        flex: 1,
    },

    container: {
        flex: 1,
        backgroundColor: COLOURS.transparent,
        alignItems: "center",
        justifyContent: "center",
      },
     
      image: {
        marginBottom: 40,
      },
     
      inputView: {
        backgroundColor: COLOURS.secondary,
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
     
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
     
    buttonContainer: {
        alignItems: "center",
        marginTop: 100
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: COLOURS.primary,
      },

      buttonText: {

      }
})