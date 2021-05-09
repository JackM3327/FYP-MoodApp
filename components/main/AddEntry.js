import React, { Component, useState } from 'react';
import { Text, TextInput, Button, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Slider } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firebase from '../../constants/firebase'
import { withNavigation } from 'react-navigation';

export default function AddEntry({ navigation }) {

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

   const [isexerciseModalVisible, setexerciseModalVisible] = useState(false);
   const [isfoodModalVisible, setfoodModalVisible] = useState(false);
   const [isworkModalVisible, setworkModalVisible] = useState(false);
   const [isrelationshipsModalVisible, setrelationshipsModalVisible] = useState(false);
   const [ishobbiesModalVisible, sethobbiesModalVisible] = useState(false);

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

    const toggleexerciseModal = () => {
      setexerciseModalVisible(!isexerciseModalVisible);
    };
    const togglefoodModal = () => {
      setfoodModalVisible(!isfoodModalVisible);
    };
    const toggleworkModal = () => {
      setworkModalVisible(!isworkModalVisible);
    };
    const togglerelationshipsModal = () => {
      setrelationshipsModalVisible(!isrelationshipsModalVisible);
    };
    const togglehobbiesModal = () => {
      sethobbiesModalVisible(!ishobbiesModalVisible);
    };

   return (

      <View style={styles.container}>

      <Modal visible={isexerciseModalVisible} animationType='slide'>
      <View style={styles.modalContent}>
      <View style={styles.modalToggle}>
        <MaterialCommunityIcons 
          name='close'
          size={30} 
          style={styles.modalicon} 
          onPress={toggleexerciseModal} 
        />
        </View>
        <Card>
         <Card.Title>Exercise</Card.Title>
         <Card.Divider/>
            <View style={styles.cardBottom}>
               <View style={styles.icon}>
                  <MaterialCommunityIcons name="heart-pulse" color={COLOURS.primary} size={60} />
               </View>
               <View style={styles.textBox2}>
                  <Text>Award yourself points for each of the following:{'\n'}
                     - Cardio{'\n'}
                     - Strength Training{'\n'}
                     - Target steps reached{'\n'}
                     - Playing Sport{'\n'}
                     Take away points for:{'\n'}
                     - No exercise{'\n'}
                     - {'>'}3,000 steps{'\n'}
                  </Text>
               </View>
            </View>
         </Card>
      </View>
    </Modal>
    <Modal visible={isfoodModalVisible} animationType='slide'>
      <View style={styles.modalContent}>
      <View style={styles.modalToggle}>
        <MaterialCommunityIcons 
          name='close'
          size={30} 
          style={styles.modalicon} 
          onPress={togglefoodModal} 
        />
        </View>
         <Card>
         <Card.Title>Food and Drink</Card.Title>
         <Card.Divider/>
         <View style={styles.cardBottom}>
            <View style={styles.icon}>
                  <MaterialCommunityIcons name="food-apple" color={COLOURS.primary} size={60} />
               </View>
               <View style={styles.textBox2}>
               <Text>Award yourself points for each of the following:{'\n'}
                     - Drinking 8 glasses of water{'\n'}
                     - Homemade Food{'\n'}
                     - Eating Healthily{'\n'}
                     - Eating Breakfast{'\n'}
                     - Vegetarian/Vegan{'\n'}
                     - No Sweet Treats{'\n'}
                     - No Soda{'\n'}
                     Take away points for:{'\n'}
                     - Eating sweet treats{'\n'}
                     - Not drinking enough water{'\n'}
                     - Fast Food{'\n'}
                     - Missing Breakfast{'\n'}
                     - Too much caffeine{'\n'}
                  </Text>
               </View>
            </View>
         </Card>
      </View>
    </Modal>
    <Modal visible={isworkModalVisible} animationType='slide'>
      <View style={styles.modalContent}>
      <View style={styles.modalToggle}>
        <MaterialCommunityIcons 
          name='close'
          size={30} 
          style={styles.modalicon} 
          onPress={toggleworkModal} 
        />
        </View>
         <Card>
         <Card.Title>Work/School</Card.Title>
         <Card.Divider/>
         <View style={styles.cardBottom}>
            <View style={styles.icon}>
                  <MaterialCommunityIcons name="briefcase" color={COLOURS.primary} size={60} />
               </View>
               <View style={styles.textBox2}>
               <Text>Award yourself points for each of the following:{'\n'}
                     - Reaching work goals{'\n'}
                     - Homework Done{'\n'}
                     - Good Time management{'\n'}
                     - Enjoying work{'\n'}
                     Take away points for:{'\n'}
                     - Late for work/college{'\n'}
                     - Missing a deadline{'\n'}
                  </Text>
               </View>
            </View>
         </Card>
      </View>
    </Modal>
    <Modal visible={isrelationshipsModalVisible} animationType='slide'>
      <View style={styles.modalContent}>
      <View style={styles.modalToggle}>
        <MaterialCommunityIcons 
          name='close'
          size={30} 
          style={styles.modalicon} 
          onPress={togglerelationshipsModal} 
        />
        </View>
         <Card>
         <Card.Title>Relationships</Card.Title>
         <Card.Divider/>
         <View style={styles.cardBottom}>
            <View style={styles.icon}>
                  <MaterialCommunityIcons name="account-group" color={COLOURS.primary} size={60} />
               </View>
               <View style={styles.textBox2}>
               <Text>Award yourself points for each of the following:{'\n'}
                     - Socializing{'\n'}
                     - Party{'\n'}
                     - Buying a gift{'\n'}
                     - Being kind to someone{'\n'}
                     Take away points for:{'\n'}
                     - Not socializing{'\n'}
                     - Being mean to someone{'\n'}
                  </Text>
               </View>
            </View>
         </Card>
      </View>
    </Modal>
    <Modal visible={ishobbiesModalVisible} animationType='slide'>
      <View style={styles.modalContent}>
      <View style={styles.modalToggle}>
        <MaterialCommunityIcons 
          name='close'
          size={30} 
          style={styles.modalicon} 
          onPress={togglehobbiesModal} 
        />
        </View>
         <Card>
         <Card.Title>Hobbies</Card.Title>
         <Card.Divider/>
            <View style={styles.cardBottom}>
               <View style={styles.icon}>
                  <MaterialCommunityIcons name="gamepad-variant" color={COLOURS.primary} size={60} />
               </View>
               <View style={styles.textBox2}>
               <Text>Award yourself points for each of the following:{'\n'}
                     - Reading{'\n'}
                     - Watching TV{'\n'}
                     - Gaming{'\n'}
                     - Doing housework{'\n'}
                     Take away points for:{'\n'}
                     - Time wasting{'\n'}
                     - Being lazy{'\n'}
                     - Being antisocial{'\n'}
                  </Text>
               </View>
            </View>
         </Card>
      </View>
    </Modal>


     
         <View style={styles.row}>
            <View style={styles.leftTop}>
            <Slider
            value={posvalue}
            maximumValue={posvalue+negvalue}
            minimumValue={negvalue}
            step={1}
            disabled='true'
            trackStyle={{ height: 20 }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
            minimumTrackTintColor={ COLOURS.primary }
            maximumTrackTintColor={ COLOURS.white }
            />
            </View>
            <View style={styles.rightTop}>
            <Text style={styles.ratioText}>{posvalue}:{negvalue}</Text>
            </View>
         </View>
         <View style={styles.information}><Text>Click on the icons for information about each activity!</Text></View>

         <View style = {styles.row} >
            <MaterialCommunityIcons name="heart-pulse" color={COLOURS.primary} style={styles.icon} size={50} onPress={toggleexerciseModal} /> 
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
         <MaterialCommunityIcons name="food-apple" color={COLOURS.primary} style={styles.icon} size={50} onPress={togglefoodModal} /> 
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
         <MaterialCommunityIcons name="briefcase" color={COLOURS.primary} style={styles.icon} size={50} onPress={toggleworkModal} /> 
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
         <MaterialCommunityIcons name="account-group" color={COLOURS.primary} style={styles.icon} size={50} onPress={togglerelationshipsModal} /> 
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
         <MaterialCommunityIcons name="gamepad-variant" color={COLOURS.primary} style={styles.icon} size={50} onPress={togglehobbiesModal} /> 
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
   container: {
      flex: 1,
   },
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
   information: {
      alignItems: 'center',
      justifyContent: 'center',

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
  modalToggle: {
   color: COLOURS.primary,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLOURS.primary,
    borderRadius: 25,
    alignSelf: 'center',
},
modalicon: {
  justifyContent: 'center',
  alignItems: 'center',
  color: COLOURS.primary,
},
 cardBottom: {
   width: "100%",
   flexDirection: "row",
   justifyContent: 'space-between',
 },
 icon: {
   width: "20%",
   height: "100%",
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
 },    
 textBox2: {
   height: "100%",
   alignItems: "center",
   flexDirection: "row",
   width: "75%",
   fontSize: 50,
   flexDirection: 'row',
},
})