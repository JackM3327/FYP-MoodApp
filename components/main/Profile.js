import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { ListItem, Icon } from 'react-native-elements'
import { COLOURS, icons, images } from '../../constants';
import Logo from "../../assets/images/Logo1.png";

import firebase from 'firebase'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Profile({ navigation }) {

    const onLogout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const list = [
        {
          title: 'Settings',
          icon: "cog-outline"
        },
        {
          title: 'Information',
          icon: "information-outline"
        },
        {
          title: 'Achievements',
          icon: "trophy"
        },
        {
          title: 'Statistics',
          icon: "chart-bar"
        },
      ]

    return (
        <View>

        <View style={styles.logoContainer}>
			<Image source={Logo} style={styles.logo} />
		</View>

        <TouchableOpacity style={styles.loginBtn}
                onPress={() => onLogout()}>
                <Text>LOGOUT</Text>
            </TouchableOpacity>

        <View>
        {
            list.map((item, i) => (
            <ListItem key={i} bottomDivider
                onPress={() => navigation.navigate(item.title)}>
                <MaterialCommunityIcons name={item.icon} color={COLOURS.darkgrey} size={20}/>
                <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            ))
        }
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: COLOURS.black,
        border: "10",
        alignItems: "center",
        flex: 1,
    },
    settings: {
        width: "95%",
        height: 50,
        alignItems: "left",
        justifyContent: "center",
        backgroundColor: COLOURS.white,
        borderTopWidth: 1,
        borderTopColor: COLOURS.lightGray,
        borderBottomWidth: 1,
        borderBottomColor: COLOURS.lightGray,
        fontSize: 50,
    },
    settingsicon: {
        width: 25,
        height: 25,
        tintColor: COLOURS.secondary,
        backgroundColor: COLOURS.white,
        marginRight: 50,
        marginLeft: 10,
        justifyContent: "center"
      },
    
      settingstext: {
        color: COLOURS.black,
        backgroundColor: COLOURS.white,
        fontSize: 20,
        justifyContent: "center"
      },
      logoContainer: { 
        flex: 0.5, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 10,
        
    },

	logo: { 
        width: 200, 
        height: 200, 
        marginBottom: 10,
        borderRadius: 100,
    },
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: COLOURS.primary,
      },
})