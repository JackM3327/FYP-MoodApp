import React from 'react'
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Slider } from 'react-native-elements'

import { COLOURS } from '../../constants';

const readEntries = () => {
    const entryRef = firebase.database().ref('Entry');
    firebase.firestore()
          .collection('posts')
          .doc(firebase.auth().currentUser.uid)
          .collection("userPosts")
          .doc(postId)
          .get();
  };

export default function Home({ navigation }) {

    readEntries();
    
    return (
        <View
        style={styles.container}>
            {/* <Text> Welcome {currentUser.name} </Text> */}
        <Button
                style={styles.AddEntryButton}
                title="+ Add a new Entry"
                onPress={() => navigation.navigate("AddEntry")} />
        
        <View
        style={styles.outputBox}>
            <View style={styles.leftContainer}>
                <Text>Date</Text>
            </View>
            <View style={styles.centerContainer}>
            <Slider
            value={userPosts.value}
            maximumValue={20}
            minimumValue={-10}
            step={1}
            disabled='true'
            width="80%"
            trackStyle={{ height: 10, backgroundColor: COLOURS.black }}
            thumbStyle={{ height: 5, width: 5, backgroundColor: COLOURS.primary }}
            minimumTrackTintColor={{ backgroundColor: COLOURS.primary}}
            />
            </View>
            <View style={styles.rightContainer}>
                <Text>Score</Text>
            </View>
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
    AddEntryButton: {
        borderWidth: 1,
        backgroundColor: COLOURS.primary,
        borderRadius: 5,
        width: "90%",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 2,
        marginTop: 5,
        fontWeight: "bold",
    },
    outputBox: {
        borderWidth: 1,
        borderColor: COLOURS.black,
        borderRadius: 5,
        width: "90%",
        height: 80,
        flexDirection: "row",
        marginBottom: 2,
        marginTop: 5,
    },
    leftContainer: {
        backgroundColor: "yellow",
        height: "100%",
        alignItems: "center",
        flexDirection: "row",
        width: "20%",
    },
    centerContainer: {
        backgroundColor: COLOURS.transparent,
        height: "100%",
        alignItems: "center",
        flexDirection: "row",
        width: "60%",
    },
    rightContainer: {
        backgroundColor: COLOURS.secondary,
        height: "100%",
        alignItems: "center",
        flexDirection: "row",
        width: "20%",
    }

})