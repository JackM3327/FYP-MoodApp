import React, { useState, useEffect } from 'react';
import { Button, FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Slider, ListItem } from 'react-native-elements'
import firebase from '../../constants/firebase';

import { COLOURS } from '../../constants';

export default function Home({ navigation }) {

    const [postsList, setPostsList] = useState();

    // constructor (value) {
    //     this.value = value;
    // }

    const state = {
        postsList: [],
      }

    useEffect(() => {
      const entryRef = firebase.database().ref('Entry');
      firebase.firestore()
            .collection('posts')
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch((error) => {
                console.log("Error getting entries: ", error);
            });
    }, []);
    
    
    return (
        <View
        style={styles.container}>
            {/* <Text> Welcome {currentUser.name} </Text> */}
        <Button
                style={styles.AddEntryButton}
                title="+ Add a new Entry"
                onPress={() => navigation.navigate("AddEntry")} />

            {/* <View>
            {
                postsList.map((item, i) => (
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                    <View style={styles.leftContainer}>
                    <Text>item.date</Text>
                    </View>
                    <View style={styles.centerContainer}>
                    <Slider
                    value= {0} //{item.value}
                    maximumValue={20}
                    minimumValue={-10}
                    step={1}
                    disabled='true'
                    width="80%"
                    trackStyle={{ height: 10, backgroundColor: COLOURS.black }}
                    thumbStyle={{ height: 5, width: 5, backgroundColor: COLOURS.primary }}
                    minimumTrackTintColor={{ backgroundColor: 'green'}}
                    maximumTrackTintColor={{ backgroundColor: 'red'}}
                    />
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.valueText}>item.value</Text>
                    </View>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                ))
            } 
            </View> */}
        
        <View
        style={styles.outputBox}>
            <View style={styles.leftContainer}>
                <Text>Date</Text>
            </View>
            <View style={styles.centerContainer}>
            <View style={styles.sliderContainer}>
            <Slider 
            value= {0} //{userPosts.value}
            maximumValue={20}
            minimumValue={-10}
            step={1}
            disabled='true'
            trackStyle={{ height: 20 }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
            minimumTrackTintColor={ COLOURS.primary }
            maximumTrackTintColor={ COLOURS.secondary}
            />
            </View>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.valueText}>19</Text>
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
        height: 50,
        flexDirection: "row",
        marginBottom: 2,
        marginTop: 5,
    },
    leftContainer: {
        backgroundColor: "yellow",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
    },
    centerContainer: {
        backgroundColor: COLOURS.secondary,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "60%",
    },
    sliderContainer: {
        backgroundColor: COLOURS.darkgray,
        height: 20,
        width: "80%",
        justifyContent: "center",
        flexDirection: "row",
    },
    rightContainer: {
        backgroundColor: COLOURS.darkgray,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
    },
    valueText: {
        color: COLOURS.primary,
        fontSize: 20,
    }

})