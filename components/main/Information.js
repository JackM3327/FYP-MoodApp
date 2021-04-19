import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


class Information extends Component {

   render() {
      return (
         <View style={styles.container}>
            <View style={styles.row}>
            <TouchableOpacity style={styles.icon}
                  onPress= {this.IncrementItem}>
                     <MaterialCommunityIcons name="heart-pulse" color={COLOURS.primary} size={40} /> 
            </TouchableOpacity>
               {/* <Text style={styles.header}>Health</Text> */}
            <TouchableOpacity style={styles.icon}
                  onPress= {this.IncrementItem}>
                     <MaterialCommunityIcons name="food-apple" color={COLOURS.primary} size={40} /> 
            </TouchableOpacity>
               {/* <Text style={styles.header}>Food & Drink</Text> */}
            <TouchableOpacity style={styles.icon}
                  onPress= {this.IncrementItem}>
                     <MaterialCommunityIcons name="briefcase" color={COLOURS.primary} size={40} /> 
            </TouchableOpacity>
               {/* <Text style={styles.header}>Work/College</Text> */}
            <TouchableOpacity style={styles.icon}
                  onPress= {this.IncrementItem}>
                     <MaterialCommunityIcons name="account-group" color={COLOURS.primary} size={40} /> 
            </TouchableOpacity>
               {/* <Text style={styles.header}>Relationships</Text> */}
            <TouchableOpacity style={styles.icon}
                  onPress= {this.IncrementItem}>
                     <MaterialCommunityIcons name="gamepad-variant" color={COLOURS.primary} size={40} /> 
            </TouchableOpacity>
               {/* <Text style={styles.header}>Hobbies</Text> */}
            </View>
            
            {/* <View>
               <Text>
                  Exercise
               </Text>
               <Text>
                  Examples of Exercise points:
                  <Text>{'\u2022'}</Text>
               </Text>
            </View> */}
         </View>
      )
   }
}
export default Information

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
      alignItems: 'flex-end',
    },
    icon: {
      width: 50,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      backgroundColor: COLOURS.white,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: COLOURS.secondary,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: COLOURS.black,
      borderWidth: 1,
      backgroundColor: COLOURS.white,
   },
   text: {
    fontStyle: 'bold',
    fontSize: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: COLOURS.black,
      borderWidth: 1,
      backgroundColor: COLOURS.primary,
  },
})