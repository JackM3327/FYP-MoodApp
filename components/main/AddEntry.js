import React, { Component } from 'react';
import { Text, TextInput, Button, Image, View, StyleSheet, ScrollView, TouchableOpacity, PixelRatio } from 'react-native';
import { Slider } from 'react-native-elements';
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firebase from '../../constants/firebase'
import { withNavigation } from 'react-navigation';

export class AddEntry extends Component {

   constructor(props) {
      super(props);
      this.state = {
        exercise: 0,
        foodanddrink: 0,
        work: 0,
        relationships: 0,
        hobbies: 0,
        visible: true,
        value: 0,
        textInputValue: '',
      };
   }
   
    IncrementExercise = () => {
      this.setState({ exercise: this.state.exercise + 1 });
      this.setSlider();
    }
    DecreaseExercise = () => {
      this.setState({ exercise: this.state.exercise - 1 });
      this.setSlider();
    }
    IncrementFoodandDrink = () => {
      this.setState({ foodanddrink: this.state.foodanddrink + 1 });
      this.setSlider();
    }
    DecreaseFoodandDrink = () => {
      this.setState({ foodanddrink: this.state.foodanddrink - 1 });
      this.setSlider();
    }
    IncrementWork = () => {
      this.setState({ work: this.state.work + 1 });
      this.setSlider();
    }
    DecreaseWork = () => {
      this.setState({ work: this.state.work - 1 });
      this.setSlider();
    }
    IncrementRelationships = () => {
      this.setState({ relationships: this.state.relationships + 1 });
      this.setSlider();
    }
    DecreaseRelationships = () => {
      this.setState({ relationships: this.state.relationships - 1 });
      this.setSlider();
    }
    IncrementHobbies = () => {
      this.setState({ hobbies: this.state.hobbies + 1 });
      this.setSlider();
    }
    DecreaseHobbies = () => {
      this.setState({ hobbies: this.state.hobbies - 1 });
      this.setSlider();
    }
    setSlider = () => {
      this.setState({ value: this.state.exercise + this.state.foodanddrink + this.state.work + this.state.relationships + this.state.hobbies });
    }

    createEntry = () => {
      const entryRef = firebase.database().ref('Entry');
      firebase.firestore()
            .collection('posts')
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            .add({
               exercise: this.state.exercise,
               foodanddrink: this.state.foodanddrink,
               work: this.state.work,
               relationships: this.state.relationships,
               hobbies: this.state.hobbies,
               value: this.state.value,
               textInputValue: this.state.textInputValue,
            }).then((function () {
               navigation.navigate("Home");
            }))
    };

   render() {

      return (
         <View>
            <ScrollView>
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>

            {/* <DatePicker
            date={this.state.date}
            onDateChange={setDate}
            /> */}

            <Slider
               value={this.state.value}
               maximumValue={20}
               minimumValue={-10}
               step={1}
               disabled='true'
               trackStyle={{ height: 20 }}
               thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
               minimumTrackTintColor={ COLOURS.primary }
               maximumTrackTintColor={ COLOURS.secondary}
            />
            <Text>Value: {this.state.value}</Text>
            </View>

               <View style = {styles.row} >
                  <MaterialCommunityIcons name="heart-pulse" color={COLOURS.primary} style={styles.icon} size={70} /> 
                  <TouchableOpacity style={styles.plusminus}
                  onPress={this.DecreaseExercise}>
                     <MaterialCommunityIcons name="minus" color={COLOURS.primary} size={50} /> 
                  </TouchableOpacity>
                  <View style = {styles.ratioBox}>
                     <Text style = {styles.ratioText}>{ this.state.exercise }</Text>
                  </View>
                  <TouchableOpacity style={styles.plusminus}
                  onPress= {this.IncrementExercise}>
                     <MaterialCommunityIcons name="plus" color={COLOURS.primary} size={50} /> 
                  </TouchableOpacity>
               </View>

               <View style = {styles.row} >
               <MaterialCommunityIcons name="food-apple" color={COLOURS.primary} style={styles.icon} size={70} /> 
                  <TouchableOpacity style={styles.plusminus}
                  onPress={this.DecreaseFoodandDrink}>
                     <MaterialCommunityIcons name="minus" color={COLOURS.primary} size={50} /> 
                  </TouchableOpacity>
                  <View style = {styles.ratioBox}>
                     <Text style = {styles.ratioText}>{ this.state.foodanddrink }</Text>
                  </View>
                  <TouchableOpacity style={styles.plusminus}
                  onPress= {this.IncrementFoodandDrink}>
                     <MaterialCommunityIcons name="plus" color={COLOURS.primary} size={50} /> 
                  </TouchableOpacity>
               </View>

               <View style = {styles.row} >
               <MaterialCommunityIcons name="briefcase" color={COLOURS.primary} style={styles.icon} size={70} /> 
                  <TouchableOpacity style={styles.plusminus}
                  onPress={this.DecreaseWork}>
                     <MaterialCommunityIcons name="minus" color={COLOURS.primary} size={50} /> 
                  </TouchableOpacity>
                  <View style = {styles.ratioBox}>
                     <Text style = {styles.ratioText}>{ this.state.work }</Text>
                  </View>
                  <TouchableOpacity style={styles.plusminus}
                  onPress= {this.IncrementWork}>
                     <MaterialCommunityIcons name="plus" color={COLOURS.primary} size={50} /> 
                  </TouchableOpacity>
               </View>

               <View style = {styles.row} >
               <MaterialCommunityIcons name="account-group" color={COLOURS.primary} style={styles.icon} size={70} /> 
                  <TouchableOpacity style={styles.plusminus}
                  onPress={this.DecreaseRelationships}>
                     <MaterialCommunityIcons name="minus" color={COLOURS.primary} size={50} /> 
                  </TouchableOpacity>
                  <View style = {styles.ratioBox}>
                     <Text style = {styles.ratioText}>{ this.state.relationships }</Text>
                  </View>
                  <TouchableOpacity style={styles.plusminus}
                  onPress= {this.IncrementRelationships}>
                     <MaterialCommunityIcons name="plus" color={COLOURS.primary} size={50} /> 
                  </TouchableOpacity>
               </View>

               <View style = {styles.row} >
               <MaterialCommunityIcons name="gamepad-variant" color={COLOURS.primary} style={styles.icon} size={70} /> 
                  <TouchableOpacity style={styles.plusminus}
                  onPress={this.DecreaseHobbies}>
                     <MaterialCommunityIcons name="minus" color={COLOURS.primary} size={50} /> 
                  </TouchableOpacity>
                  <View style = {styles.ratioBox}>
                     <Text style = {styles.ratioText}>{ this.state.hobbies }</Text>
                  </View>
                  <TouchableOpacity style={styles.plusminus}
                  onPress= {this.IncrementHobbies}>
                     <MaterialCommunityIcons name="plus" color={COLOURS.primary} size={50} /> 
                  </TouchableOpacity>
               </View>
               <TextInput
                  style={{ 
                  height: 80, 
                  borderColor: 'gray', 
                  borderWidth: 1,
                  placeholderTextColor: 'gray',
               }}
               onChangeText={(textInputValue) => this.setState({ textInputValue })}
               value={this.state.textInputValue}
               multiline='true'
               placeholder="Describe your day..."
               />

               <Button style={styles.submitBtn}
               title="Set Slider"
               onPress={this.setSlider}
               >
              </Button>

               <Button style={styles.submitBtn}
               title="Save"
               onPress={this.createEntry}
               >
              </Button>

            </ScrollView>
         </View>
      )
   }
}
export default withNavigation(AddEntry)

const styles = StyleSheet.create ({
    topheader: {
        color: COLOURS.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: COLOURS.black,
        borderWidth: 1,
        backgroundColor: COLOURS.primary,
    },
    row: {
      flexDirection: 'row',
      margin: 2, 
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderWidth: 5,
      borderColor: 'transparent',
    },
    icon: {
      width: 60,
      height: 60,
      borderRadius: 30
   },
   plusminus: {
      width: 60,
      height: 60,
      borderWidth:1,
      backgroundColor: COLOURS.secondary,
      borderColor:COLOURS.lightGray,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
   },
   ratioBox: {
      size: 60,
      height: 60,
      backgroundColor: 'transparent',
      borderColor:COLOURS.lightGray,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
   },
   ratioText: {
     color: COLOURS.primary,
     fontSize: 50,
   },
   buttons: {
      width: 60,
      height: 60,
      backgroundColor: 'blue',
      borderRadius: 30
   },
   submitBtn: {
      flexDirection: 'bottom',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: COLOURS.black,
      borderWidth: 1,
      backgroundColor: COLOURS.primary,
  },
  submitText: {
   fontSize: 30,
   color: COLOURS.white,
  },
})