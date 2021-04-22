import React, { useState, useEffect } from 'react';
import { Button, FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { List } from 'react-native-paper'
import { Slider, ListItem } from 'react-native-elements'
import firebase from '../../constants/firebase';

import { COLOURS } from '../../constants';

export default function Home({ navigation }) {

    const [postsList, setPostsList] = useState([]); //Initialise restaurant list with setter
    const [errorMessage, setErrorMessage] = useState("");

    const getEntries = async () => {
        try {
          const list = [];
          var snapshot = await firebase.firestore()
          .collection('posts')
          .doc(firebase.auth().currentUser.uid)
          .collection("userPosts")
          .get();
          snapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setPostsList([...list]);
        } catch (e) {
          setErrorMessage(
            "No Entries added yet"
          );
        }
      };
    
      //Call when component is rendered
      useEffect(() => {
        getEntries();
      }, []);

    return (
        <View style={styles.container}>
            
        <Button
            style={styles.AddEntryButton}
            title="+ Add a new Entry"
            onPress={() => navigation.navigate("AddEntry")} />

        <View>

            {
            postsList.map((item, i) => (
            <ListItem key={i} bottomDivider>
                <ListItem.Content>
                <View style={styles.outputBox}>
                <View style={styles.leftContainer}>
                <Text>Date</Text>
                </View>
                <View style={styles.centerContainer}>
                <Slider
               value={item.value}
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
                <View style={styles.rightContainer}>
                    <Text style={styles.valueText}>{item.value}</Text>
                </View>
                </View>
                </ListItem.Content>
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
    listContainer: {
        width: "100%",
    },
    outputBox: {
        width: "90%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
    leftContainer: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
    },
    centerContainer: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
    },
    sliderContainer: {
        height: 20,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
    },
    rightContainer: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
    },
    // valueText: {
    //     color: COLOURS.primary,
    //     fontSize: 20,
    // }

})