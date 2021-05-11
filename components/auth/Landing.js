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
            <View>
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => navigation.navigate("Register")} >
                <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}
                onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            </View>
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
        marginBottom: 20,
        borderRadius: 175,
    },
    
    buttonContainer: {
        alignItems: "center",
        marginTop: 120
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