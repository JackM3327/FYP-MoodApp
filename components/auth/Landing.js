import React from 'react'
import { Button, ImageBackground, Image, Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'

import bgImage from "../../assets/images/background-1.jpg";
import Logo from "../../assets/images/Logo1.png";
import { COLOURS } from '../../constants';

export default function Landing({ navigation }) {
    return (
		<ImageBackground
			source={bgImage}
			style={styles.background}>
			<View style={styles.logoContainer}>
				<Image source={Logo} style={styles.logo} />
			</View>
			<SafeAreaView style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => navigation.navigate("Register")} >
                <Text>REGISTER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}
                onPress={() => navigation.navigate("Login")}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
    )
}

const styles = StyleSheet.create({
	
    background: { 
        flex: 1,
    },

	logoContainer: { 
        flex: 0.5, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 100,
        
    },

	logo: { 
        width: 300, 
        height: 300, 
        marginBottom: 10,
        borderRadius: 175,
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