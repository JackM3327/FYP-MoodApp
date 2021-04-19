import React from 'react'
import { Button, ImageBackground, Text, View, StyleSheet, SafeAreaView } from 'react-native'

import bgImage from "../../assets/images/background-1.jpg";
import { COLOURS } from '../../constants';

export default function Landing({ navigation }) {
    return (
		<ImageBackground
			source={bgImage}
			style={styles.background}>
			<View style={styles.logoContainer}>
				{/* <Image source={Logo} style={styles.logo} /> */}
				<Text style={styles.tagline}>Track Your Daily Activities</Text>
			</View>
			<SafeAreaView style={styles.buttonContainer}>
            <Button style={styles.buttons}
                title="Register"
                onPress={() => navigation.navigate("Register")} />

                <Button style={styles.buttons}
                title="Login"
                onPress={() => navigation.navigate("Login")} />
			</SafeAreaView>
		</ImageBackground>
    )
}

const styles = StyleSheet.create({
	
    background: { 
        flex: 1 
    },

	logoContainer: { 
        flex: 0.4, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },

	logo: { 
        width: 100, 
        height: 100, 
        marginBottom: 10 
    },

	tagline: { 
        fontSize: 20,
        fontWeight: 'bold',
        color: COLOURS.black 
    },

	buttonContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		margin: 15,
	}
})