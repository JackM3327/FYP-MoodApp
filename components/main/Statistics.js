import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Slider, ListItem } from 'react-native-elements'
import firebase from '../../constants/firebase';
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Logo from "../../assets/images/Logo1.png";

export default function Statistics() {

  const [postsList, setPostsList] = useState([]); 
  const [errorMessage, setErrorMessage] = useState("");
  const [totalPos, setTotalPos] = useState(107);
  const [totalNeg, setTotalNeg] = useState(29);
  const [totalExercisePos, setTotalExercisePos] = useState(27);
  const [totalExerciseNeg, setTotalExerciseNeg] = useState(5);
  const [totalFoodPos, setTotalFoodPos] = useState(28);
  const [totalFoodNeg, setTotalFoodNeg] = useState(7);
  const [totalWorkPos, setTotalWorkPos] = useState(26);
  const [totalWorkNeg, setTotalWorkNeg] = useState(4);
  const [totalRelationshipsPos, setTotalRelationshipsPos] = useState(12);
  const [totalRelationshipsNeg, setTotalRelationshipsNeg] = useState(9);
  const [totalHobbiesPos, setTotalHobbiesPos] = useState(14);
  const [totalHobbiesNeg, setTotalHobbiesNeg] = useState(4);


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

      // getTotalPos (() => {
      //   {
      //     const totalPos = 0;
      //     EntriesList.map((item, i) => (
      //         item.posvalue;
      //         setTotalPos = totalPos;
      //     )}
      // })

    if (postsList.length == 0 ) {
      return (
          <View>
          <View style={styles.nostatemessage}>
          <View style={styles.header}>
            <MaterialCommunityIcons name="chart-bar" color={COLOURS.primary} style={styles.headerIcon} size={60} />
            <Text style={styles.headerText}>Statistics</Text>
            </View>
          <View style={styles.logoContainer}>
              <Image source={Logo} style={styles.logo} />
            </View>
              <Text>No Entries added yet!</Text>
              <Text>This page will show your total ratios for each category</Text>
              <Text>Go to the information section to find out more!</Text>
            </View>
          </View>
        
            )}
    else { 

    return (
        <ScrollView>

            <View style={styles.header}>
            <MaterialCommunityIcons name="chart-bar" color={COLOURS.primary} style={styles.headerIcon} size={60} />
            <Text style={styles.headerText}>Statistics</Text>
            </View>

            
            <ListItem style={styles.statistic} bottomDivider>
            <View style={styles.outputBox}>
            <View style={styles.leftContainer}>
            <MaterialCommunityIcons name="account" color={COLOURS.primary} style={styles.icon} size={40} /> 
              </View>
              <View style={styles.centerContainer}>
                <Slider
                style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
                value={totalPos}
                maximumValue={totalPos + totalNeg}
                minimumValue={-1}
                step={1}
                disabled='true'
                trackStyle={{ height: 20 }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
                minimumTrackTintColor={ COLOURS.primary }
                maximumTrackTintColor={ COLOURS.secondary}
                else
                />
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.valueText}>{totalPos}:{totalNeg}</Text>
              </View>
              </View>
              </ListItem>
            
            {/* <ListItem style={styles.statistic} bottomDivider>
            <Text>Best Day: </Text>
            </ListItem>

            <ListItem style={styles.statistic} bottomDivider>
            <Text>Best Category</Text>
            </ListItem>
            <ListItem style={styles.statistic} bottomDivider>
            <Text>Worst Category</Text>
            </ListItem> */}

            <ListItem style={styles.statistic} bottomDivider>
            <View style={styles.outputBox}>
                <View style={styles.leftContainer}>
                <MaterialCommunityIcons name="heart-pulse" color={COLOURS.primary} style={styles.icon} size={40} /> 
                </View>
                <View style={styles.centerContainer}>
                <Slider
                style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
                value={totalExercisePos}
                maximumValue={totalExercisePos + totalExerciseNeg}
                minimumValue={-1}
                step={1}
                disabled='true'
                trackStyle={{ height: 20 }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
                minimumTrackTintColor={ COLOURS.primary }
                maximumTrackTintColor={ COLOURS.secondary}
                else
                />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.valueText}>{totalExercisePos}:{totalExerciseNeg}</Text>
                </View>
              </View>
            </ListItem>

            <ListItem style={styles.statistic} bottomDivider>
            <View style={styles.outputBox}>
                <View style={styles.leftContainer}>
                <MaterialCommunityIcons name="food-apple" color={COLOURS.primary} style={styles.icon} size={40} /> 
                </View>
                <View style={styles.centerContainer}>
                <Slider
                style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
                value={totalFoodPos}
                maximumValue={totalFoodPos + totalFoodNeg}
                minimumValue={-1}
                step={1}
                disabled='true'
                trackStyle={{ height: 20 }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
                minimumTrackTintColor={ COLOURS.primary }
                maximumTrackTintColor={ COLOURS.secondary}
                else
                />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.valueText}>{totalFoodPos}:{totalFoodNeg}</Text>
                </View>
              </View>
            </ListItem>

            <ListItem style={styles.statistic} bottomDivider>
            <View style={styles.outputBox}>
                <View style={styles.leftContainer}>
                <MaterialCommunityIcons name="briefcase" color={COLOURS.primary} style={styles.icon} size={40} /> 
                </View>
                <View style={styles.centerContainer}>
                <Slider
                style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
                value={totalWorkPos}
                maximumValue={totalWorkPos + totalWorkNeg}
                minimumValue={-1}
                step={1}
                disabled='true'
                trackStyle={{ height: 20 }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
                minimumTrackTintColor={ COLOURS.primary }
                maximumTrackTintColor={ COLOURS.secondary}
                else
                />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.valueText}>{totalWorkPos}:{totalWorkNeg}</Text>
                </View>
                </View>
            </ListItem>

            <ListItem style={styles.statistic} bottomDivider>
            <View style={styles.outputBox}>
            <View style={styles.leftContainer}>
                <MaterialCommunityIcons name="account-group" color={COLOURS.primary} style={styles.icon} size={40} /> 
                </View>
                <View style={styles.centerContainer}>
                <Slider
                style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
                value={totalRelationshipsPos}
                maximumValue={totalRelationshipsPos + totalRelationshipsNeg}
                minimumValue={-1}
                step={1}
                disabled='true'
                trackStyle={{ height: 20 }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
                minimumTrackTintColor={ COLOURS.primary }
                maximumTrackTintColor={ COLOURS.secondary}
                else
                />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.valueText}>{totalRelationshipsPos}:{totalRelationshipsNeg}</Text>
                </View>
                </View>
            </ListItem>

            <ListItem style={styles.statistic} bottomDivider>
            <View style={styles.outputBox}>
            <View style={styles.leftContainer}>
                <MaterialCommunityIcons name="gamepad-variant" color={COLOURS.primary} style={styles.icon} size={40} /> 
              </View>
              <View style={styles.centerContainer}>
                <Slider
                style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
                value={totalHobbiesPos}
                maximumValue={totalHobbiesPos + totalHobbiesNeg}
                minimumValue={-1}
                step={1}
                disabled='true'
                trackStyle={{ height: 20 }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
                minimumTrackTintColor={ COLOURS.primary }
                maximumTrackTintColor={ COLOURS.lightGray}
                else
                />
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.valueText}>{totalHobbiesPos}:{totalHobbiesNeg}</Text>
              </View>
              </View>
              </ListItem>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLOURS.white,
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: { 
      flex: 0.5, 
      alignItems: 'center', 
      justifyContent: 'center',
      marginTop: 10,
  },
  logo: { 
      width: 200, 
      height: 200, 
      marginBottom: 10,
      borderRadius: 100,
  },
  nostatemessage: {
      alignItems: 'center',
      justifyContent: 'center',
  },
    headerText: {
      fontSize: 20,
      color: COLOURS.primary
    },
    headerIcon: {
      marginTop: 20,
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
    outputBox: {
      width: "90%",
      height: 30,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      margin: 10
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
})
