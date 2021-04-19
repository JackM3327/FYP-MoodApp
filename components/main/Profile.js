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
import { COLOURS, icons, images } from '../../constants';

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

    return (
        <View>

        {/* <Text>{currentUser.name} is Logged in</Text> */}

        <Button
            title="Logout"
            onPress={() => onLogout()}
        />

        {/* <Button
                title="Settings"
                onPress={() => navigation.navigate("Settings")} /> */}
        <TouchableOpacity style={styles.settings}
        onPress={() => navigation.navigate("Settings")}>
            <View>
            <Text style={styles.settingstext}>
            <MaterialCommunityIcons name="cog-outline" color={COLOURS.secondary} size={26} />    
             Settings
            </Text>
            </View>
        </TouchableOpacity>

        {/* <Button
                title="Favourites"
                onPress={() => navigation.navigate("Favourites")} /> */}
        <TouchableOpacity style={styles.settings}
        onPress={() => navigation.navigate("Information")}>
            <View>
            <Text style={styles.settingstext}>
            <MaterialCommunityIcons name="information-outline" color={COLOURS.secondary} size={26} />   
             Information
            </Text>
            </View>
        </TouchableOpacity>

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
})