import React, { Component, useState } from 'react';
import { Text, TextInput, Button, Image, View, StyleSheet, ScrollView, TouchableOpacity, PixelRatio } from 'react-native';
import { Slider } from 'react-native-elements';
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firebase from '../../constants/firebase'
import { withNavigation } from 'react-navigation';

export default function Settings({ navigation }) {

   const [exercisepos, setexercisepos] = useState(0);
   const [foodpos, setfoodpos] = useState(0);
   const [workpos, setworkpos] = useState(0);
   const [relationshipspos, setrelationshipspos] = useState(0);
   const [hobbiespos, sethobbiespos] = useState(0);
   const [hobbiesneg, sethobbiesneg] = useState(0);
   const [relationshipsneg, setrelationshipsneg] = useState(0);
   const [workneg, setworkneg] = useState(0);
   const [foodneg, setfoodneg] = useState(0);
   const [exerciseneg, setexerciseneg] = useState(0);
   const posvalue = exercisepos + foodpos + workpos + relationshipspos + hobbiespos;
   const negvalue = exerciseneg + foodneg + workneg + relationshipsneg + hobbiesneg;
   const [textInputValue, setTextInputValue] = useState(""); 

   const createEntry = () => {
      const entryRef = firebase.database().ref('Entry');
      firebase.firestore()
            .collection('posts')
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            .add({
               exercisepos: exercisepos,
               foodpos: foodpos,
               workpos: workpos,
               relationshipspos: relationshipspos,
               hobbiespos: hobbiespos,
               posvalue: posvalue,
               exerciseneg: exerciseneg,
               foodneg: foodneg,
               workneg: workneg,
               relationshipsneg: relationshipsneg,
               hobbiesneg: hobbiesneg,
               negvalue: negvalue,
               textInputValue: textInputValue,
               date: firebase.firestore.FieldValue.serverTimestamp()
            }).then((function () {
               navigation.navigate("Home");
            }))
    };

   return (
     <View>
         <View style={styles.row}>
            <View style={styles.leftTop}>
            <Slider
            value={posvalue}
            maximumValue={posvalue+negvalue}
            minimumValue={negvalue}
            step={1}
            disabled='true'
            trackStyle={{ height: 20 }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.green }}
            minimumTrackTintColor={ COLOURS.green }
            maximumTrackTintColor={ COLOURS.white }
            />
            </View>
            <View style={styles.rightTop}>
            <Text style={styles.ratioText}>{posvalue}:{negvalue}</Text>
            </View>
         </View>
            <View style = {styles.row} >
            <MaterialCommunityIcons name="heart-pulse" color={COLOURS.primary} style={styles.icon} size={50} /> 
            <TouchableOpacity style={styles.plusminus}
            onPress={() => setexercisepos(exercisepos - 1)}>
               <MaterialCommunityIcons name="minus" color={COLOURS.green} size={50} /> 
            </TouchableOpacity>
            <View style = {styles.ratioBox}>
               <Text style = {styles.posratioText}>{ exercisepos }</Text>
            </View>
            <TouchableOpacity style={styles.plusminus}
            onPress= {() => setexercisepos(exercisepos + 1)}>
               <MaterialCommunityIcons name="plus" color={COLOURS.green} size={50} /> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusminus}
            onPress={() => setexerciseneg(exerciseneg - 1) }>
               <MaterialCommunityIcons name="minus" color={COLOURS.red} size={50} /> 
            </TouchableOpacity>
            <View style = {styles.ratioBox}>
               <Text style = {styles.negratioText}>{ exerciseneg }</Text>
            </View>
            <TouchableOpacity style={styles.plusminus}
            onPress= {() => setexerciseneg(exerciseneg + 1)}>
               <MaterialCommunityIcons name="plus" color={COLOURS.red} size={50} /> 
            </TouchableOpacity>
         </View>

         <View style = {styles.row} >
         <MaterialCommunityIcons name="food-apple" color={COLOURS.primary} style={styles.icon} size={50} /> 
            <TouchableOpacity style={styles.plusminus}
            onPress={() => setfoodpos(foodpos - 1)}>
               <MaterialCommunityIcons name="minus" color={COLOURS.green} size={50} /> 
            </TouchableOpacity>
            <View style = {styles.ratioBox}>
               <Text style = {styles.posratioText}>{ foodpos }</Text>
            </View>
            <TouchableOpacity style={styles.plusminus}
            onPress= {() => setfoodpos(foodpos + 1)}>
               <MaterialCommunityIcons name="plus" color={COLOURS.green} size={50} /> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusminus}
            onPress={() => setfoodneg(foodneg - 1)}>
               <MaterialCommunityIcons name="minus" color={COLOURS.red} size={50} /> 
            </TouchableOpacity>
            <View style = {styles.ratioBox}>
               <Text style = {styles.negratioText}>{ foodneg }</Text>
            </View>
            <TouchableOpacity style={styles.plusminus}
            onPress= {() => setfoodneg(foodneg + 1)}>
               <MaterialCommunityIcons name="plus" color={COLOURS.red} size={50} /> 
            </TouchableOpacity>
         </View>

         <View style = {styles.row} >
         <MaterialCommunityIcons name="briefcase" color={COLOURS.primary} style={styles.icon} size={50} /> 
            <TouchableOpacity style={styles.plusminus}
            onPress={() => setworkpos(workpos - 1)}>
               <MaterialCommunityIcons name="minus" color={COLOURS.green} size={50} /> 
            </TouchableOpacity>
            <View style = {styles.ratioBox}>
               <Text style = {styles.posratioText}>{ workpos }</Text>
            </View>
            <TouchableOpacity style={styles.plusminus}
            onPress= {() => setworkpos(workpos + 1)}>
               <MaterialCommunityIcons name="plus" color={COLOURS.green} size={50} /> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusminus}
            onPress={() => setworkneg(workneg - 1)}>
               <MaterialCommunityIcons name="minus" color={COLOURS.red} size={50} /> 
            </TouchableOpacity>
            <View style = {styles.ratioBox}>
               <Text style = {styles.negratioText}>{ workneg }</Text>
            </View>
            <TouchableOpacity style={styles.plusminus}
            onPress= {() => setworkneg(workneg + 1)}>
               <MaterialCommunityIcons name="plus" color={COLOURS.red} size={50} /> 
            </TouchableOpacity>
         </View>

         <View style = {styles.row} >
         <MaterialCommunityIcons name="account-group" color={COLOURS.primary} style={styles.icon} size={50} /> 
            <TouchableOpacity style={styles.plusminus}
            onPress={() => setrelationshipspos(relationshipspos - 1)}>
               <MaterialCommunityIcons name="minus" color={COLOURS.green} size={50} /> 
            </TouchableOpacity>
            <View style = {styles.ratioBox}>
               <Text style = {styles.posratioText}>{ relationshipspos }</Text>
            </View>
            <TouchableOpacity style={styles.plusminus}
            onPress= {() => setrelationshipspos(relationshipspos + 1)}>
               <MaterialCommunityIcons name="plus" color={COLOURS.green} size={50} /> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusminus}
            onPress={() => setrelationshipsneg(relationshipsneg - 1)}>
               <MaterialCommunityIcons name="minus" color={COLOURS.red} size={50} /> 
            </TouchableOpacity>
            <View style = {styles.ratioBox}>
               <Text style = {styles.negratioText}>{ relationshipsneg }</Text>
            </View>
            <TouchableOpacity style={styles.plusminus}
            onPress= {() => setrelationshipsneg(relationshipsneg + 1)}>
               <MaterialCommunityIcons name="plus" color={COLOURS.red} size={50} /> 
            </TouchableOpacity>
         </View>

         <View style = {styles.row} >
         <MaterialCommunityIcons name="gamepad-variant" color={COLOURS.primary} style={styles.icon} size={50} /> 
            <TouchableOpacity style={styles.plusminus}
            onPress={() => sethobbiespos(hobbiespos - 1)}>
               <MaterialCommunityIcons name="minus" color={COLOURS.green} size={50} /> 
            </TouchableOpacity>
            <View style = {styles.ratioBox}>
               <Text style = {styles.posratioText}>{ hobbiespos }</Text>
            </View>
            <TouchableOpacity style={styles.plusminus}
            onPress= {() => sethobbiespos(hobbiespos + 1)}>
               <MaterialCommunityIcons name="plus" color={COLOURS.green} size={50} /> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusminus}
            onPress={() => sethobbiesneg(hobbiesneg - 1)}>
               <MaterialCommunityIcons name="minus" color={COLOURS.red} size={50} /> 
            </TouchableOpacity>
            <View style = {styles.ratioBox}>
               <Text style = {styles.negratioText}>{ hobbiesneg }</Text>
            </View>
            <TouchableOpacity style={styles.plusminus}
            onPress= {() => sethobbiesneg(hobbiesneg + 1)}>
               <MaterialCommunityIcons name="plus" color={COLOURS.red} size={50} /> 
            </TouchableOpacity>
         </View>
         <TextInput
            style={styles.textBox}
            onChangeText={setTextInputValue}
            value={textInputValue}
            multiline='true'
            placeholder="Describe your day..."
            />

            <View>
               <TouchableOpacity 
               style={styles.AddEntryButton}
               onPress={createEntry}>
                     <Text style={styles.buttonText}>Save</Text>
               </TouchableOpacity>    
            </View>
         
     </View>
   );
 }

const styles = StyleSheet.create ({
   row: {
      flexDirection: 'row',
      margin: 2, 
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderWidth: 5,
      borderColor: 'transparent',
      alignItems: 'center',
    },
    leftTop: {
      width: "80%",
    },
    rightTop: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
   },
   plusminus: {
      width: 40,
      height: 40,
      borderWidth:1,
      backgroundColor: COLOURS.white,
      borderColor:COLOURS.darkgray,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
   },
   ratioBox: {
      size: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
   },
   posratioText: {
      color: COLOURS.green,
      fontSize: 40,
    },
    negratioText: {
      color: COLOURS.red,
      fontSize: 40,
    },
    ratioText: {
      color: COLOURS.primary,
      fontSize: 30,
    },
   textBox: {
      height: 80, 
      borderColor: COLOURS.lightGray, 
      borderWidth: 1,
      borderRadius: 5,
      placeholderTextColor: COLOURS.darkgray,
      margin: 5,
      backgroundColor: COLOURS.white,
   },
   AddEntryButton: {
      borderWidth: 1,
      backgroundColor: COLOURS.primary,
      borderRadius: 30,
      borderColor: COLOURS.secondary,
      width: "80%",
      height: 60,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      margin: 5,
  },
  buttonText: {
      color: COLOURS.white,
      fontSize: 20
  },
    
})