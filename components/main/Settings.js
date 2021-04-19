import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { COLOURS } from '../../constants';


class ScrollViewExample extends Component {

   render() {
      return (
         <View>
            
         </View>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
    container: {
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
    
})