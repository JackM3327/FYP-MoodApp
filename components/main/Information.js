import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


class Information extends Component {

   render() {
      return (
         <ScrollView>
         <View style={styles.container}>

         <Card>
         <Card.Title>Exercise</Card.Title>
         <Card.Divider/>
            <View style={styles.cardBottom}>
               <View style={styles.icon}>
                  <MaterialCommunityIcons name="heart-pulse" color={COLOURS.primary} size={60} />
               </View>
               <View style={styles.textBox}>
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
         <Card>
         <Card.Title>Food and Drink</Card.Title>
         <Card.Divider/>
         <View style={styles.cardBottom}>
            <View style={styles.icon}>
                  <MaterialCommunityIcons name="food-apple" color={COLOURS.primary} size={60} />
               </View>
               <View style={styles.textBox}>
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
         <Card>
         <Card.Title>Work/School</Card.Title>
         <Card.Divider/>
         <View style={styles.cardBottom}>
            <View style={styles.icon}>
                  <MaterialCommunityIcons name="briefcase" color={COLOURS.primary} size={60} />
               </View>
               <View style={styles.textBox}>
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
         <Card>
         <Card.Title>Relationships</Card.Title>
         <Card.Divider/>
         <View style={styles.cardBottom}>
            <View style={styles.icon}>
                  <MaterialCommunityIcons name="account-group" color={COLOURS.primary} size={60} />
               </View>
               <View style={styles.textBox}>
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
         <Card>
         <Card.Title>Hobbies</Card.Title>
         <Card.Divider/>
            <View style={styles.cardBottom}>
               <View style={styles.icon}>
                  <MaterialCommunityIcons name="gamepad-variant" color={COLOURS.primary} size={60} />
               </View>
               <View style={styles.textBox}>
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
         </ScrollView>
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
   textBox: {
      height: "100%",
      alignItems: "center",
      flexDirection: "row",
      width: "75%",
      fontSize: 50,
      flexDirection: 'row',
  },
})