import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native'
import { Slider, ListItem } from 'react-native-elements'
import firebase from '../../constants/firebase';

import { COLOURS } from '../../constants';

export default function Statistics() {

    const [postsList, setPostsList] = useState([]); 
    const [errorMessage, setErrorMessage] = useState("");
    const [best, setBest] = useState([]);

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
            comsole.log(list);
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

    // const totalRatio = () => {
    //     var snapshot = await firebase.firestore()
    //     .collection('posts')
    //     .doc(firebase.auth().currentUser.uid)
    //     .collection("userPosts")
    //     .orderBy("date", "desc")
    //     .get();
    //     snapshot.forEach((doc) => {
    //       list.push(doc.data());
    //     });
    //     setPostsList([...list]);
    //   } catch (e) {
    //     setErrorMessage(
    //       "No Entries added yet"
    //     );
    // }
    const bestEntry = () => {
        try {
        const best = []
        var snapshot = firebase.firestore()
          .collection('posts')
          .doc(firebase.auth().currentUser.uid)
          .collection("userPosts")
          .orderBy("posvalue", "desc")
          .limitToFirst(1);
          snap.forEach((doc) =>{
            best.push({posvalue: doc.data().posvalue})
            })
            setBest({ best });
        } catch (e) {
            setErrorMessage(
              "No Entries added yet"
            );
          }
        };

    return (
        <View>

            <ListItem style={StyleSheet.header} bottomDivider>
            <Text>Statistics</Text>
            </ListItem>

            {
            postsList.map((item, i) => (
            <ListItem style={StyleSheet.statistic} bottomDivider>
            <Text>Total Ratio: </Text>
            </ListItem>
            ))}
            
            <ListItem style={StyleSheet.statistic} bottomDivider>
            <Text>Best Day: {best}</Text>
            </ListItem>

            <ListItem style={StyleSheet.statistic} bottomDivider>
            <Text>Best Category</Text>
            </ListItem>
            <ListItem style={StyleSheet.statistic} bottomDivider>
            <Text>Worst Category</Text>
            </ListItem>
            <ListItem style={StyleSheet.statistic} bottomDivider>
            <Text>Current Streak</Text>
            </ListItem>
            <ListItem style={StyleSheet.statistic} bottomDivider>
            <Text>Longest Streak</Text>
            </ListItem>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        color: COLOURS.black,
        border: "10",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
