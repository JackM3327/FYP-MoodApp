import React from 'react'
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { COLOURS } from '../../constants';

// const activities = db.collection('activities').doc('userId');

// firebase.initializeApp(firebaseConfig);
//     const db = firebase.firestore();
//     this.entriesRef = db.collection('entries'); 
//     this.entriesRef.get().then(queryRef=>{
//       let newEntries = [];
//       queryRef.forEach(docRef=>{
//         let docData = docRef.data();
//         let newEntry = {
//           text: docData.text,
//           timestamp: docData.timestamp.toDate(),
//           key: docRef.id, 
//           labels: docData.labels
//         }
//         newEntries.push(newEntry);
//       })
//       this.setState({entries: newEntries});
//     });

export default function Home({ navigation }) {
    
    return (
        <View
        style={styles.container}>
            {/* <Text> Welcome {currentUser.name} </Text> */}
        <Button
                style={styles.AddEntryButton}
                title="+ Add a new Entry"
                onPress={() => navigation.navigate("AddEntry")} />
        


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
        alignItems: "center",
        marginBottom: 2,
        marginTop: 5,
        }
})