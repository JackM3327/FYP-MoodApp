import React, { useState, useEffect } from 'react';
import { Button, Image, FlatList, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { List } from 'react-native-paper'
import { Slider, ListItem } from 'react-native-elements'
import firebase from '../../constants/firebase';
import Logo from "../../assets/images/Logo1.png";

import { COLOURS } from '../../constants';

export default function Home({ navigation }) {

    const [postsList, setPostsList] = useState([]); 
    const [errorMessage, setErrorMessage] = useState("");

    const getEntries = async () => {
        try {
          const list = [];
          var snapshot = await firebase.firestore()
          .collection('posts')
          .doc(firebase.auth().currentUser.uid)
          .collection("userPosts")
          .orderBy("date", "desc")
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
    
    // if (postsList != [] ) {
    //     return (
    //         <View>
    //             <View>
    //             <TouchableOpacity 
    //             style={styles.AddEntryButton}
    //             onPress={() => navigation.navigate("AddEntry")}>
    //                 <Text style={styles.buttonText}>+ Add Entry</Text>
    //             </TouchableOpacity>    
    //         </View>
    //         <View style={styles.nostatemessage}>
    //             <View style={styles.logoContainer}>
    //             <Image source={Logo} style={styles.logo} />
    //             </View>
    //           <Text>Welcome to BalanceDiary!</Text>
    //           <Text>No Entries added yet</Text>
    //           <Text>Click above to add your first Entry!</Text>
    //           <Text>Go to the information section to find out more!</Text>
    //         </View>
    //         </View>
        
    //         )}
    // else {        
    return (
        <ScrollView style={styles.container}>

        <View>
        <TouchableOpacity 
        style={styles.AddEntryButton}
        onPress={() => navigation.navigate("AddEntry")}>
            <Text style={styles.buttonText}>+ Add Entry</Text>
        </TouchableOpacity>    
        </View>

        <View>
            {
            postsList.map((item, i) => (
            
            <ListItem 
            key={i} 
            bottomDivider
            onPress={() => navigation.navigate("ViewEntry", {item})}>
                <ListItem.Content>
                <View style={styles.outputBox}>
                <View style={styles.leftContainer}>
                <Text>{item.date.toDate().toDateString()}</Text>
                </View>
                <View style={styles.centerContainer}>
                <Slider
                style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
                value={item.posvalue}
                maximumValue={item.posvalue + item.negvalue}
                minimumValue={item.negvalue}
                step={1}
                disabled='true'
                trackStyle={{ height: 20 }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
                minimumTrackTintColor={ COLOURS.primary }
                maximumTrackTintColor={ COLOURS.lightGray}
                else
                />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.valueText}>{item.posvalue}:{item.negvalue}</Text>
                </View>
                </View>
                </ListItem.Content>
            </ListItem>
            
            ))
            } 
            </View>
        </ScrollView>
    )
    // }
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
        borderRadius: 30,
        borderColor: COLOURS.secondary,
        width: "70%",
        height: 60,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        margin: 20,
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
    nostatemessage: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: COLOURS.white,
        fontSize: 20
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
    valueText: {
        color: COLOURS.primary,
        fontSize: 20,
    }

})