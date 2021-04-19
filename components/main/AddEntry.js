import React, { Component } from 'react';
import { Text, Button, Image, View, StyleSheet, ScrollView, TouchableOpacity, PixelRatio } from 'react-native';
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class AddEntry extends Component {

   constructor(props) {
      super(props);
      this.state = {
        exercise: 0,
        foodanddrink: 0,
        work: 0,
        relationships: 0,
        hobbies: 0,
        visible: true,
      };
   }

   
    IncrementExercise = () => {
      this.setState({ exercise: this.state.exercise + 1 });
    }
    DecreaseExercise = () => {
      this.setState({ exercise: this.state.exercise - 1 });
    }
    IncrementFoodandDrink = () => {
      this.setState({ foodanddrink: this.state.foodanddrink + 1 });
    }
    DecreaseFoodandDrink = () => {
      this.setState({ foodanddrink: this.state.foodanddrink - 1 });
    }
    IncrementWork = () => {
      this.setState({ work: this.state.work + 1 });
    }
    DecreaseWork = () => {
      this.setState({ work: this.state.work - 1 });
    }
    IncrementRelationships = () => {
      this.setState({ relationships: this.state.relationships + 1 });
    }
    DecreaseRelationships = () => {
      this.setState({ relationships: this.state.relationships - 1 });
    }
    IncrementHobbies = () => {
      this.setState({ hobbies: this.state.hobbies + 1 });
    }
    DecreaseHobbies = () => {
      this.setState({ hobbies: this.state.hobbies - 1 });
    }

   render() {

   
      return (
         <View>
            <ScrollView>

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

               <Button style={styles.submitBtn}
               title="Save"
               onPress={() => navigation.navigate('SaveEntry', {this.state})}
               >
              </Button>

            </ScrollView>
         </View>
      )
   }
}
export default AddEntry

const styles = StyleSheet.create ({
    topheader: {
        fontStyle: 'bold',
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
   fontStyle: 'bold',
   fontSize: 30,
   color: COLOURS.white,
  },
})