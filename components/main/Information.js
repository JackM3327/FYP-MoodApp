import React, { Component, useState } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Modal from 'modal-react-native-web';
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Information() {

   const [isexerciseModalVisible, setexerciseModalVisible] = useState(false);
   const [isfoodModalVisible, setfoodModalVisible] = useState(false);
   const [isworkModalVisible, setworkModalVisible] = useState(false);
   const [isrelationshipsModalVisible, setrelationshipsModalVisible] = useState(false);
   const [ishobbiesModalVisible, sethobbiesModalVisible] = useState(false);

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
      <ScrollView>

         <View style = {styles.row} >
         <View style={styles.iconcontainer}>
         <MaterialCommunityIcons name="heart-pulse" color={COLOURS.primary} style={styles.topicon} size={50} onPress={toggleexerciseModal} />
         </View>
         <View style={styles.iconcontainer}>
         <MaterialCommunityIcons name="food-apple" color={COLOURS.primary} style={styles.topicon} size={50} onPress={togglefoodModal} />
         </View>
         <View style={styles.iconcontainer}>
         <MaterialCommunityIcons name="briefcase" color={COLOURS.primary} style={styles.topicon} size={50} onPress={toggleworkModal} />
         </View>
         <View style={styles.iconcontainer}>
         <MaterialCommunityIcons name="account-group" color={COLOURS.primary} style={styles.topicon} size={50} onPress={togglerelationshipsModal} />
         </View>
         <View style={styles.iconcontainer}>
         <MaterialCommunityIcons name="gamepad-variant" color={COLOURS.primary} style={styles.topicon} size={50} onPress={togglehobbiesModal} /> 
         </View>
         </View>

         <View style={styles.textBox2}>
            <Card>
            <Text>Each icon represents an activity group for you to track your daily activity</Text>
            <Text>Click on an icon to find out more about each activity group</Text>
            <Text>The goal of this app is to track your daily activities from exercise to the things you enjoy</Text>
            <Text>The overall goal is to come out with a positive ratio of positive to negative experiences</Text>
            </Card>
         </View>

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
      
      </ScrollView>
   )
}

const styles = StyleSheet.create ({
    container: {
      flexDirection: 'column',
      margin: 5,
      margin: 2, 
      justifyContent: 'space-between',
      borderWidth: 5,
      borderColor: 'transparent',
    },
    row: {
      flexDirection: 'row',
      margin: 2, 
      justifyContent: 'space-between',
      alignItems: 'center',
      alignItems: 'flex-end',
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
    iconcontainer: {
      marginTop: 20,
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'row',
       width: 60,
       height: 60,
       backgroundColor: COLOURS.white,
       borderColor: COLOURS.secondary,
       borderRadius: 30,
    },
    topicon: {
      width: 50,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
   textBox: {
      height: "100%",
      alignItems: "center",
      flexDirection: "row",
      width: "75%",
      fontSize: 50,
      flexDirection: 'row',
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
 modalContent: {
      flex: 1, 
 }
})