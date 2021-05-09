import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { Slider, ListItem } from 'react-native-elements'
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const ViewEntry = ({route}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
          <View style={styles.textContainer}>
          <Text style={styles.textStyle}>
            {route.params.date}
          </Text>
          </View>
          <View style={styles.container}>
         <View style={styles.row}>
             <View style={styles.leftTop}>
             <Slider
            value={route.params.posvalue}
            maximumValue={route.params.posvalue + route.params.negvalue}
            minimumValue={-1}
            step={1}
            disabled='true'
            trackStyle={{ height: 20 }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
            minimumTrackTintColor={ COLOURS.primary }
            maximumTrackTintColor={ COLOURS.white }
            />
            </View>
            <View style={styles.rightTop}>
            <Text style={styles.ratioText}>{route.params.posvalue}:{route.params.negvalue}</Text>
            </View>
         </View>
            
    <View style={styles.outputBox}>
      <View style={styles.leftContainer}>
      <MaterialCommunityIcons name="heart-pulse" color={COLOURS.primary} size={40} />
            </View>
            <View style={styles.centerContainer}>
            <Slider
            style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
            value={route.params.exercisepos}
            maximumValue={route.params.exercisepos + route.params.exerciseneg}
            minimumValue={-1}
            step={1}
            disabled='true'
            trackStyle={{ height: 20 }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
            minimumTrackTintColor={ COLOURS.primary }
            maximumTrackTintColor={ COLOURS.white}
            else
            />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.valueText}>{route.params.exercisepos}:{route.params.exerciseneg}</Text>
            </View>
            </View>
            <View style={styles.outputBox}>
      <View style={styles.leftContainer}>
      <MaterialCommunityIcons name="food-apple" color={COLOURS.primary} size={40} />
            </View>
            <View style={styles.centerContainer}>
            <Slider
            style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
            value={route.params.foodpos}
            maximumValue={route.params.foodpos + route.params.foodneg}
            minimumValue={-1}
            step={1}
            disabled='true'
            trackStyle={{ height: 20 }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
            minimumTrackTintColor={ COLOURS.primary }
            maximumTrackTintColor={ COLOURS.white}
            else
            />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.valueText}>{route.params.foodpos}:{route.params.foodneg}</Text>
            </View>
            </View>
            <View style={styles.outputBox}>
      <View style={styles.leftContainer}>
      <MaterialCommunityIcons name="briefcase" color={COLOURS.primary} size={40} />
            </View>
            <View style={styles.centerContainer}>
            <Slider
            style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
            value={route.params.workpos}
            maximumValue={route.params.workpos + route.params.workneg}
            minimumValue={-1}
            step={1}
            disabled='true'
            trackStyle={{ height: 20 }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
            minimumTrackTintColor={ COLOURS.primary }
            maximumTrackTintColor={ COLOURS.white}
            else
            />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.valueText}>{route.params.workpos}:{route.params.workneg}</Text>
            </View>
            </View>
            <View style={styles.outputBox}>
      <View style={styles.leftContainer}>
      <MaterialCommunityIcons name="account-group" color={COLOURS.primary} size={40} />
            </View>
            <View style={styles.centerContainer}>
            <Slider
            style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
            value={route.params.relationshipspos}
            maximumValue={route.params.relationshipspos + route.params.relationshipsneg}
            minimumValue={-1}
            step={1}
            disabled='true'
            trackStyle={{ height: 20 }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
            minimumTrackTintColor={ COLOURS.primary }
            maximumTrackTintColor={ COLOURS.white}
            else
            />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.valueText}>{route.params.relationshipspos}:{route.params.relationshipsneg}</Text>
            </View>
            </View>
            <View style={styles.outputBox}>
      <View style={styles.leftContainer}>
      <MaterialCommunityIcons name="gamepad-variant" color={COLOURS.primary} size={40} />
            </View>
            <View style={styles.centerContainer}>
            <Slider
            style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
            value={route.params.hobbiespos}
            maximumValue={route.params.hobbiespos + route.params.hobbiesneg}
            minimumValue={-1}
            step={1}
            disabled='true'
            trackStyle={{ height: 20 }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
            minimumTrackTintColor={ COLOURS.primary }
            maximumTrackTintColor={ COLOURS.white}
            else
            />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.valueText}>{route.params.hobbiespos}:{route.params.hobbiesneg}</Text>
            </View>
            </View>

            <View style={styles.textBox}>
                <Text>{route.params.textInputValue}</Text>
            </View>
    </View> 
      </SafeAreaView>
    );
  };
  
  export default ViewEntry;

const styles = StyleSheet.create({
    container: {
        color: COLOURS.black,
        border: "10",
        flex: 1,
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    textStyle: {
        fontSize: 20,

    },
    listContainer: {
        width: "100%",
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
      ratioBox: {
        size: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
     },
     ratioText: {
        color: COLOURS.primary,
        fontSize: 30,
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
});