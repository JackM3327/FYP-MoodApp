import React, { Component } from 'react'
import { View, Button, ImageBackground, TextInput, StyleSheet } from 'react-native'
import { COLOURS } from '../../constants';
import bgImage from "../../assets/images/background-1.jpg";
import firebase from 'firebase'

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
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
            <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.TextInput}
                    placeholder="name"
                    onChangeText={(name) => this.setState({ name })}
                />
            </View>
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
                <Button 
                style={styles.loginBtn}
                onPress={() => this.onSignUp()}
                title="Sign Up"
                />
            </View>
            </ImageBackground>
        )
    }
}

export default Register

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
        backgroundColor: "#FFC0CB",
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
     
      loginBtn: {
        borderWidth: 1,
        backgroundColor: COLOURS.primary,
        borderRadius: 30,
        borderColor: COLOURS.secondary,
        width: "70%",
        height: 60,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        margin: 20,
      },

      buttonText: {
        color: COLOURS.white,
        fontSize: 20
    },
})